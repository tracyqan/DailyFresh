from django.db import models
from mydb.base_model import BaseModel
# Create your models here.

class Order(BaseModel):
    """订单模型类"""
    pay_choice = (
        (0, '货到付款'),
        (1, '微信支付'),
        (2, '支付宝支付'),
        (3, '银联支付'),
    )
    status_choice = (
        (0, '待支付'),
        (1, '待发货'),
        (2, '待收货'),
        (3, '待评价'),
        (4, '已完成'),
    )
    order_id = models.IntegerField(primary_key=True, verbose_name='订单号')
    user_id = models.ForeignKey('user.User',on_delete=models.CASCADE, verbose_name='用户名')
    addr_id = models.ForeignKey('user.Address',on_delete=models.CASCADE, verbose_name='地址')
    payment = models.SmallIntegerField(choices=pay_choice, verbose_name='支付方式')
    order_total = models.IntegerField(verbose_name='总订单数')
    money_total = models.IntegerField(verbose_name='总金额')
    freight = models.IntegerField(verbose_name='运费')
    pay_status = models.SmallIntegerField(choices=status_choice, verbose_name='支付状态')
    trade_no = models.CharField(max_length=128, verbose_name='订单编号')


class OrderGoods(BaseModel):
    """订单商品模型类"""
    order_id = models.ForeignKey('Order',on_delete=models.CASCADE, verbose_name='订单ID')
    sku_id = models.ForeignKey('goods.GoodSku',on_delete=models.CASCADE, verbose_name='Sku_id')
    count = models.IntegerField(verbose_name='商品数量')
    price = models.FloatField(verbose_name='商品价格')
    comment = models.TextField(verbose_name='商品评价')