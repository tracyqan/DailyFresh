from django.urls import re_path
from goods.views import IndexView, DetailView, ListView
app_name = 'goods'
urlpatterns = [
    re_path(r'^$', IndexView.as_view(), name='index'), # 首页
    re_path(r'^goods/detail/(?P<good_id>\d+)$', DetailView.as_view(), name='detail'), # 详情页
    re_path(r'^goods/list/(?P<good_type>.*)$', ListView.as_view(), name='list'), # 列表页
]
