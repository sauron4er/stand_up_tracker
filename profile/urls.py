from django.urls import path, re_path
from .views import profile

app_name = 'profile'

urlpatterns = [
    path('', profile, name='profile'),
]
