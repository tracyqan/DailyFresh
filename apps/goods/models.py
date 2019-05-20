from django.db import models
from mydb.base_model import BaseModel
from tinymce.models import HTMLField
# Create your models here.

class GoodsType(BaseModel):
    """商品类型模型类"""
    name = models.CharField(max_length=20, verbose_name='种类名称')
    logo = models.CharField(max_length=20, verbose_name='logo标识')
    image = models.ImageField(upload_to='type', verbose_name='商品类型图片')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '商品类型'
        verbose_name_plural = verbose_name


class GoodSku(BaseModel):
    """商品SKU模型类"""
    status_choices = (
        (0, '下线'),
        (1, '上线'),
    )
    name = models.CharField(max_length=20, verbose_name='商品名称')
    desc = models.CharField(max_length=256, verbose_name='商品简介')
    price = models.FloatField(verbose_name='商品价格')
    unit = models.CharField(max_length=5, verbose_name='商品单位')
    inventory = models.IntegerField(verbose_name='库存数量')
    sales_num = models.IntegerField(verbose_name='销售数量')
    image = models.ImageField(upload_to='goods', verbose_name='商品图片')
    status = models.SmallIntegerField(default=1, choices=status_choices, verbose_name='商品状态')
    good_type = models.ForeignKey('GoodsType',on_delete=models.CASCADE, verbose_name='商品种类')
    spu = models.ForeignKey('GoodSpu', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '商品SKU'
        verbose_name_plural = verbose_name


class GoodImage(BaseModel):
    """商品图片模型类"""
    images = models.ImageField(upload_to='image', verbose_name='商品图片')
    sku = models.ForeignKey('GoodSku', on_delete=models.CASCADE)

    class Meta:
        verbose_name = '商品图片'
        verbose_name_plural = verbose_name


class GoodSpu(BaseModel):
    """商品Spu模型类"""
    name = models.CharField(max_length=20, verbose_name='商品名称')
    # HTMLField 富文本类型:带有样式的文本
    detail = HTMLField(verbose_name='商品详情')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '商品SPU'
        verbose_name_plural = verbose_name

class IndexCarousel(BaseModel):
    """首页轮播图模型类"""
    sku = models.ForeignKey('GoodSku', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='carousel', verbose_name='轮播图片')
    index = models.SmallIntegerField(verbose_name='位置ID')

    class Meta:
        verbose_name = '首页轮播图'
        verbose_name_plural = verbose_name

class IndexGoods(BaseModel):
    """首页商品列表模型类"""
    display_choice = (
        (0, '图片'),
        (1, '文字'),
    )
    type = models.ForeignKey('GoodsType',on_delete=models.CASCADE, verbose_name='商品类型')
    sku = models.ForeignKey('GoodSku', on_delete=models.CASCADE)
    display_type = models.SmallIntegerField(default=0 ,choices=display_choice, verbose_name='展示方式')
    index = models.SmallIntegerField(verbose_name='位置ID')

    class Meta:
        verbose_name = '首页商品列表'
        verbose_name_plural = verbose_name

class IndexBanner(BaseModel):
    """首页促销图模型类"""
    name = models.CharField(max_length=20, verbose_name='活动名称')
    image = models.ImageField(upload_to='banner', verbose_name='banner图')
    activity_url = models.URLField(verbose_name='活动链接')
    index = models.SmallIntegerField(verbose_name='位置ID')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '首页促销活动'
        verbose_name_plural = verbose_name



