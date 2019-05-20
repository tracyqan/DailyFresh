from django.contrib.auth.decorators import login_required
from django.urls import re_path
from user.views import RegisterView, UserInfoView, UserOrderView, UserSiteView, LogoutView, LoginView, ActiveView

app_name = 'user'

urlpatterns = [
    re_path(r'^register/$', RegisterView.as_view(), name='register'), # 注册页面
    re_path(r'^login/$', LoginView.as_view(), name='login'), # 登录页面
    # 采用类视图无法直接使用装饰器
    # 相当于使用@login_required 来装饰UserInfoView.as_view()返回的方法
    # 验证登录,如果没登录则跳转到settings.LOGIN_URL
    # re_path(r'^center/info/$', login_required(UserInfoView.as_view()), name='info'),
    # re_path(r'^center/order/$', login_required(UserOrderView.as_view()), name='order'),
    # re_path(r'^center/site/$', login_required(UserSiteView.as_view()), name = 'site'),
    # 在类视图中第一个父类继承于LoginRequiredMixin,LoginRequiredMixin重写as_view方法
    re_path(r'^$', UserInfoView.as_view(), name='info'), # 用户中心-个人信息
    re_path(r'^center/info/$', UserInfoView.as_view(), name='info'), # 用户中心-个人信息
    re_path(r'^center/order/$', UserOrderView.as_view(), name='order'), # 用户中心-订单信息
    re_path(r'^center/site/$', UserSiteView.as_view(), name='site'), # 用户中心-地址信息
    re_path(r'^logout/$', LogoutView.as_view(), name='logout'), # 用户注销
    re_path(r'^active/(?P<token>.*)$', ActiveView.as_view(), name='active'), # 用户激活
]

