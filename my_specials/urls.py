from django.urls import path, re_path
from .views import my_specials

app_name = 'my_specials'

urlpatterns = [
    path('', my_specials, name='my_specials'),
]
