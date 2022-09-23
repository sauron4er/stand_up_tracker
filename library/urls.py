from django.urls import path, re_path
from .views import library, edit_comedian, post_comedian, rate_comedian, rate_special, get_streamings, get_comedians
from profile.views import get_countries

app_name = 'library'

urlpatterns = [
    re_path(r'get_comedians/(?P<page>\d+)', get_comedians, name='get_comedians'),
    path('edit_comedian', edit_comedian, name='edit_comedian'),
    path('post_comedian', post_comedian, name='post_comedian'),
    path('rate_comedian', rate_comedian, name='rate_comedian'),
    path('rate_special', rate_special, name='rate_special'),
    path('get_countries', get_countries, name='get_countries'),
    path('get_streamings', get_streamings, name='get_streamings'),
    path('', library, name='library'),
]
