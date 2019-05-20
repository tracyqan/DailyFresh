#!/usr/bin/env python
# -*- coding: utf-8 -*-
# author: tracyqan time:2019/3/19
# 定义索引类
from haystack import indexes
from goods.models import GoodSku

# 指定对于某个类的某些数据建立索引
# 索引类名格式: 模型类名+Index
class GoodSkuIndex(indexes.SearchIndex, indexes.Indexable):
    # 索引字段 use_template=True 指定根据表中的哪些字段建立索引文件的说明放在一个文件中
    text = indexes.CharField(document=True, use_template=True)

    def get_model(self):
        # 返回索引所在的模型类
        return GoodSku

    # 建立索引的数据
    def index_queryset(self, using=None):
        return self.get_model().objects.all()