from django.contrib import admin
from goods.models import GoodsType, GoodSku, GoodImage, GoodSpu, IndexCarousel, IndexGoods, IndexBanner
# Register your models here.

@admin.register(GoodsType)
class GoodsTypeAdmin(admin.ModelAdmin):
    """商品种类后台管理"""
    list_display = [
        'name', 'logo', 'image',  'create_time', 'update_time', 'is_delete',
    ]

@admin.register(GoodSku)
class GoodSkuAdmin(admin.ModelAdmin):
    list_display = [
        'name', 'desc', 'price', 'unit', 'inventory', 'sales_num', 'image', 'status', 'good_type', 'create_time', 'update_time',
    ]

@admin.register(GoodImage)
class GoodImageAdmin(admin.ModelAdmin):
    list_display = [
        'images', 'sku', 'create_time', 'update_time', 'is_delete',
    ]

@admin.register(GoodSpu)
class GoodSpuAdmin(admin.ModelAdmin):
    list_display = [
        'name', 'detail', 'create_time', 'update_time', 'is_delete',
    ]

@admin.register(IndexCarousel)
class IndexCarouselAdmin(admin.ModelAdmin):
    list_display = [
        'sku', 'image', 'index', 'create_time', 'update_time', 'is_delete',
    ]

@admin.register(IndexGoods)
class IndexGoodsAdmin(admin.ModelAdmin):
    list_display = [
        'type', 'sku', 'display_type', 'index', 'create_time', 'update_time', 'is_delete',
    ]

@admin.register(IndexBanner)
class IndexBannerAdmin(admin.ModelAdmin):
    list_display = [
        'name', 'image', 'activity_url', 'index', 'create_time', 'update_time', 'is_delete',
    ]