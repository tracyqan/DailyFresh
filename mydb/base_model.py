#!/usr/bin/env python
# -*- coding: utf-8 -*-
# author: tracyqan time:2019/3/10

from django.db import models

class BaseModel(models.Model):
    """抽象模型基类,用于所有模型继承 记录时间"""
    create_time = models.DateTimeField(verbose_name='创建时间', auto_now_add=True)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True)
    is_delete = models.BooleanField(default=False, verbose_name='是否删除')



    class Meta:
        # 说明是一个抽象模型类,否则在生成表的时候会报错
        abstract = True