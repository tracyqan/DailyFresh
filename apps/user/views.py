from django.shortcuts import render, redirect, reverse
from django.views.generic import View
from user.models import User, Address
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from itsdangerous import SignatureExpired
from django.conf import settings
from django.http import HttpResponse
from celery_tasks.task import send_register_active_email
import re
from utils.mixin import LoginRequiredMixin
from django.contrib.auth import logout, authenticate, login
from django_redis import get_redis_connection
from goods.models import  GoodSku

# Create your views here.

class RegisterView(View):
    """注册视图"""
    def get(self, request):
        # get请求时
        return render(request, 'register.html')

    def post(self, request):
        # post请求时,获取提交的数据
        username = request.POST['user_name']
        password = request.POST['pwd']
        password_again = request.POST['cpwd']
        email = request.POST['email']
        # allow = request.POST['allow']

        # 数据校验
        # 有数据为空时
        # if not all([username, password, password_again, email]):
        #     return render(request, 'register.html', {'errormsg': '信息不完整!'})
        # # 用户名规范验证
        # if not re.match(r'\w{5,20}$', username):
        #     return render(request, 'register.html', {'errormsg': '用户名不符合!'})
        # # 邮箱规范验证
        # if not re.match(r'^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$', email):
        #     return render(request, 'register.html', {'errormsg': '邮箱格式不正确'})
        # # 是否同意协议
        # if allow != 'on':
        #     return render(request, 'register.html', {'errormsg': '请同意协议'})
        # 用户名是否被注册
        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            if password != password_again:
                return render(request, 'register.html', {'errormsg': '两次密码不一致'})
            else:
                # 创建用户
                user = User.objects.create_user(username, password=password, email=email)
                # 设置用户未激活状态
                user.is_active = 0
                user.save()
                # 获取用户id进行加密,生成激活token
                info = {'confirm': user.id}
                serializer = Serializer(settings.SECRET_KEY, 3600)
                token = serializer.dumps(info)
                token = token.decode()
                # 利用celery发送邮件
                send_register_active_email.delay(email, username, token)
                # 注册成功返回首页
                return  redirect(reverse('goods:index'))
        else:
            return render(request, 'register.html', {'errormsg': '用户名已注册'})

class ActiveView(View):
    """用户激活视图"""
    def get(self, request, token):
        """进行用户激活"""
        # 解密,获取要激活的用户信息
        s = Serializer(settings.SECRET_KEY, 3600)
        try:
            info = s.load(token)
            # 获取激活用户的id
            user_id = info['confirm']
            # 根据用户id获取用户信息
            user = User.objects.get(id=user_id)
            user.is_active = 1
            user.save()
            # 激活成功跳转到登录页
            return redirect(reverse('user:login'))
        except SignatureExpired :
            # 激活链接已过期, 再发一份邮件
            # 调用celery发送邮件
            send_register_active_email(request.user.email, request.user.username, token)
            return HttpResponse('激活链接已过期!!!')


# user/login
class LoginView(View):
    """登录页视图"""
    def get(self, request):
        return render(request, 'login.html')

    def post(self, request):
        # 接收数据
        username = request.POST['username']
        password = request.POST['pwd']
        # 业务处理:登录校验
        user = authenticate(username=username, password=password)
        # if user:
        #     login(request, user)
        #     next_url = request.GET.get('next', reverse('goods:index'))
        #     response = redirect(next_url)
        #     return response
        if user is not None:
            # 用户名密码正确
            if user.is_active:
                # 用户已激活,记录用户登录状态
                login(request, user)
                # 获取登录后需要跳转的地址, 为空时跳转首页
                next_url = request.GET.get('next', reverse('goods:index'))
                response = redirect(next_url)
                # 判断是否需要记住用户名
                remember = request.POST.get('remember')
                if remember == 'on':
                    # 记住用户名
                    response.set_cookie('username', username, max_age=7*24*3600)
                else:
                    response.delete_cookie('username')
                return response
            else:
                # 用户未激活
                return render(request, 'login.html', {'errormsg':'账户未激活!'})
        else:
            return render(request, 'login.html', {'errormsg':'用户名或者密码错误!'})
# user/logout
class LogoutView(View):
    """注销视图"""
    def get(self, request):
        """退出登录"""
        # 清除用户的session信息
        logout(request)
        return redirect(reverse('goods:index'))


#  user/center/info
class UserInfoView(LoginRequiredMixin, View):
    # 继承于LoginRequiredMixin, 访问验证登录
    """用户中心-信息页视图"""
    def get(self, request):
        # page参数用于模板中判断网页地址给标签加样式
        # 用户访问django网页时,django框架会给request一个user属性,表示当前用户
        # 如果用户登录,则user属性是User的实例
        # 如果用户未登录,则user属性是AnonymousUser的实例
        # request.user.is_authenticated() 判断用户是否登录,如果登录则返回True
        # 除了通过参数传给模板文件的模板变量之外,django框架会把request.user也传给模板文件,可以直接在模板文件中使用is_authenticated方法判断用户是否登录
        # 获取用户信息
        user = request.user
        # 获取默认地址
        address = Address.objects.get_default_address(user)
        # 获取用户浏览记录
        # from redis import StrictRedis
        # sr = StrictRedis(host='localhost', port='6379', db=9)
        con = get_redis_connection('default') # 链接redis数据库的简化方法
        history_key = 'history_{}'.format(user.id)
        # 获取用户最近浏览的5个商品id
        sku_ids = con.lrange(history_key, 0, 4)
        # 从数据库中查询对应的商品
        goods = [GoodSku.objects.get(id=id) for id in sku_ids]
        context = {'page':'info',
                   'address':address,
                   'goods':goods}
        return render(request, 'user_center_info.html', context)

# user/center/order
class UserOrderView(LoginRequiredMixin, View):
    """用户中心-订单页视图"""
    def get(self, request):
        # 获取订单信息
        return render(request, 'user_center_order.html', {'page':'order'})

# user/center/site
class UserSiteView(LoginRequiredMixin, View):
    """用户中心-地址页视图"""
    def get(self, request):
        # 获取登录用户的user
        user = request.user
        # 获取默认地址
        # try:
        #     address = Address.objects.get(user=request.usr, is_default=True)
        # except Address.DoesNotExist:
        #     # 没有默认地址
        #     address = None
        address = Address.objects.get_default_address(user)

        return render(request, 'user_center_ite.html', {'page':'site', 'address':address})


    def post(self, request):
        # 用户提交新地址
        uname = request.POST.get('uname')
        uaddr = request.POST.get('uaddr')
        uyoub = request.POST.get('uyoub')
        utel = request.POST.get('utel')
        if not all([uname, uaddr, utel]):
            return render(request, 'user_center_site.html', {'page':'site', 'errormsg': '信息不完整!!'})
        # 获取登录用户的user
        user = request.user
        # 获取默认地址
        # try:
        #     address = Address.objects.get(user=request.usr, is_default=True)
        # except Address.DoesNotExist:
        #     # 没有默认地址
        #     address = None
        address = Address.objects.get_default_address(user)
        # 查找默认地址,若无则新地址为默认地址
        is_default = False if address else True
        # 创建新地址
        Address.objects.create(user=request.user, receive_person=uname, receive_addr=uaddr, zip_code=uyoub, tel=utel, is_default=is_default)

        return redirect(reverse('user:site')) # 重定向为get请求