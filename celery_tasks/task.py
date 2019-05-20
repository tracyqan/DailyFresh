#!/usr/bin/env python
# -*- coding: utf-8 -*-
# author: tracyqan time:2019/3/13
from celery import Celery
from django.conf import settings
from django.core.mail import send_mail


# 用于运行celery服务器上部署django环境初始化
# import os
# import django
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", 'DDfresh.settings')
# django.setup()

# 创建一个Celery类的实例对象
app = Celery('celery_tasks.tasks', broker='redis://127.0.0.1:6379/1')
# 定义任务函数
@app.task
def send_register_active_email(to_email, username, token):
    """发送激活邮件"""
    # 组织邮件信息
    subject = '天天生鲜欢迎信息' # 邮件标题
    message = ''    # 没样式的邮件内容
    sender = settings.EMAIL_FROM
    receiver = [to_email]
    # 带样式的邮件内容
    html_message = '<h1>{}, 欢迎您成为天天生鲜注册会员</h1>请点击下面链接激活您的账户<br><a href="http://127.0.0.1:8000/user/acitve/{}">http://127.0.0.1:8000/user/acitve/{}</a>'.format(username, token, token)
    send_mail(subject, message, sender, receiver, html_message=html_message)
