from django.urls import path, re_path
from .views import library

app_name = 'library'

urlpatterns = [
    path('', library, name='library'),
]
