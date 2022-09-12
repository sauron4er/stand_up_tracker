from django.urls import path, re_path
from .views import library, edit_comedian, post_comedian
from profile.views import get_countries

app_name = 'library'

urlpatterns = [
    path('edit_comedian', edit_comedian, name='edit_comedian'),
    path('post_comedian', post_comedian, name='post_comedian'),
    path('get_countries', get_countries, name='get_countries'),
    path('', library, name='library'),
]
