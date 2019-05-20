from django.shortcuts import render
from django.views.generic import View
from goods.models import GoodsType, IndexCarousel, IndexGoods, IndexBanner, GoodSku
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.core.cache import cache
from django_redis import get_redis_connection

# Create your views here.

class IndexView(View):
    """商品首页视图类"""
    def get(self, request):

        # 先尝试从缓存中获取数据
        context = cache.get('index_cache_data')
        if not context:
            # 获取首页商品种类
            types = GoodsType.objects.all()
            # 获取首页轮播图
            carousel = IndexCarousel.objects.all().order_by('index')
            # 获取首页活动图
            banner = IndexBanner.objects.all().order_by('index')
            # 获取首页商品列表
            for t in types:
                image_banner = IndexGoods.objects.filter(type=t, display_type=0).order_by('index')
                title_banner = IndexGoods.objects.filter(type=t, display_type=1).order_by('index')
                # 动态的给每一个type类增加属性,方便在模板中便利
                t.image_banner = image_banner
                t.title_banner = title_banner
            # 设置缓存内容
            context = {
                'types': types,
                'carousel': carousel,
                'banner': banner,
                }
            cache.set('index_cache_data', context, 3600)
            print('设置缓存')

        # 获取用户购物车商品数量
        user = request.user
        cart_count = 0
        # 判断用户是否登录
        if user.is_authenticated:
            # 连接数据库
            conn = get_redis_connection('default')
            # 生成缓存数据的key
            cart_key = 'cart_{}'.format(user.id)
            cart_count = conn.hlen(cart_key)
        context.update(cart_count=cart_count)

        return render(request, 'index.html', context)

# /goods/detail/商品id
class DetailView(View):
    """商品详情页视图"""
    def get(self, request, good_id):
        # 通过商品id获取相关信息
        try:
            sku = GoodSku.objects.get(id=good_id)
        except GoodSku.DoesNotExist:
            sku = GoodSku.objects.get(id=1)
        # 获取所有商品种类
        types = GoodsType.objects.all()
        # 获取新品推荐
        new_goods = GoodSku.objects.filter(good_type=sku.good_type).order_by('create_time')[:2]
        # 获取购物车条目

        context = {
            'types':types,
            'sku': sku,
            'new_goods': new_goods,
            'page_type': 'detail',
        }

        return render(request, 'detail.html', context)

# /goods/list/商品种类?sort=排序方式
class ListView(View):
    """商品列表页视图"""
    def get(self, request, good_type):
        # 获取商品种类,构造字典,替换循环简化代码
        types = GoodsType.objects.all()
        type_dict = {k.logo:k for k in types}
        # print(type_dict)
        # 获取排序方式
        sort = request.GET.get('sort', 'default')
        # print(sort)
        sort_dict = {'default':'id', 'hot':'sales_num', 'price':'price'}
        # 获取所有商品
        good_list = GoodSku.objects.filter(good_type=type_dict[good_type]).order_by(sort_dict[sort])
        # 获取新品推荐
        new_goods = GoodSku.objects.filter(good_type=type_dict[good_type]).order_by('create_time')[:2]
        # 生成Paginator对象,每1个展示一页
        paginator = Paginator(good_list, 1)
        # 获取当前页数, 默认为1
        page = request.GET.get('page', 1)
        try:
            # 获取当前页码的商品
            good_list = paginator.page(page)
        except PageNotAnInteger:
            # 当前页数不是整数返回第一页
            good_list = paginator.page(1)
        except EmptyPage:
            # 当前页数超过最大值返回最后一页
            good_list = paginator.page(paginator.num_pages)

        context = {
            'types': types,
            'good_list': good_list,
            'new_goods': new_goods,
            'page_type': 'list',
            'sort': sort,
            'paginator': paginator,
        }

        return render(request, 'good_list.html', context)