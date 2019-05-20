# Generated by Django 2.1.5 on 2019-03-12 01:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('goods', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('is_delete', models.BooleanField(default=False, verbose_name='是否删除')),
                ('order_id', models.IntegerField(primary_key=True, serialize=False, verbose_name='订单号')),
                ('payment', models.SmallIntegerField(choices=[(0, '货到付款'), (1, '微信支付'), (2, '支付宝支付'), (3, '银联支付')], verbose_name='支付方式')),
                ('order_total', models.IntegerField(verbose_name='总订单数')),
                ('money_total', models.IntegerField(verbose_name='总金额')),
                ('freight', models.IntegerField(verbose_name='运费')),
                ('pay_status', models.SmallIntegerField(choices=[(0, '待支付'), (1, '待发货'), (2, '待收货'), (3, '待评价'), (4, '已完成')], verbose_name='支付状态')),
                ('trade_no', models.CharField(max_length=128, verbose_name='订单编号')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OrderGoods',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('is_delete', models.BooleanField(default=False, verbose_name='是否删除')),
                ('count', models.IntegerField(verbose_name='商品数量')),
                ('price', models.FloatField(verbose_name='商品价格')),
                ('comment', models.TextField(verbose_name='商品评价')),
                ('order_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='order.Order', verbose_name='订单ID')),
                ('sku_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.GoodSku', verbose_name='Sku_id')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]