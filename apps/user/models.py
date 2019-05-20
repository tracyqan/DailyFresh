from django.db import models
from mydb.base_model import BaseModel
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
# Create your models here.

class User(AbstractUser, BaseModel):

   """用户信息模型类"""
   # 继承于AbstractUser django系统自带认证系统


   def generate_active_token(self):
       """重写生成用户签名字符串"""
       serializer = Serializer(settings.SECRET_KEY, 3600)
       info = {'confirm':self.id}
       token = serializer.dumps(info)
       return token.decode()
   

   class Meta:
        db_table = 'df_user'
        verbose_name = '用户'
        verbose_name_plural = verbose_name

class AddressManager(models.Manager):
    """地址模型管理类"""
    # 1.修改查询集结果 (重写all get...方法)
    # 2.封装方法:用户操作模型类对应的数据表(增删改查)
    def get_default_address(self, user):
        try:
            # self.models 获取self对象所在的模型类
            address = self.get(user, is_default=True)
        except self.model.DoesNotExist:
            # 没有默认地址
            address = None
        return address

class Address(BaseModel):
    """用户地址信息模型类"""
    user = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='所属账户')
    receive_person = models.CharField(max_length=20, verbose_name='收件人')
    receive_addr = models.CharField(max_length=256, verbose_name='收件地址')
    tel = models.CharField(max_length=6, verbose_name='联系方式')
    zip_code = models.CharField(max_length=11, verbose_name='邮编')
    is_default = models.BooleanField(default=False, verbose_name='默认地址')

    objects = AddressManager()
    class Meta:
        db_table = 'df_address'
        verbose_name = '地址'
        verbose_name_plural = verbose_name