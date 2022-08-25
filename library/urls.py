from django.urls import path, re_path
from .views import library, comedians, specials

app_name = 'library'

urlpatterns = [
    path('comedians', comedians, name='comedians'),
    path('specials', specials, name='specials'),
    path('', library, name='library'),
]
