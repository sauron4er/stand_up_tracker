from django.urls import path, re_path
from .views import home

app_name = 'home'

urlpatterns = [
    # path('home', home, name='home'),

    path('', home, name='home'),
]
