from django.urls import path, re_path
from .views import profile

app_name = 'settings'

urlpatterns = [
    path('profile', profile, name='profile'),

    path('', profile, name='profile'),
]
