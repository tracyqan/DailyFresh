# Generated by Django 2.1.5 on 2019-03-17 14:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0002_auto_20190317_1403'),
    ]

    operations = [
        migrations.RenameField(
            model_name='goodimage',
            old_name='sku_id',
            new_name='sku',
        ),
        migrations.RenameField(
            model_name='goodsku',
            old_name='spu_id',
            new_name='spu',
        ),
        migrations.RenameField(
            model_name='indexcarousel',
            old_name='sku_id',
            new_name='sku',
        ),
        migrations.RenameField(
            model_name='indexgoods',
            old_name='sku_id',
            new_name='sku',
        ),
    ]
