from django.urls import path, re_path
from .views import library, add_comedian

app_name = 'library'

urlpatterns = [
    path('add_comedian', add_comedian, name='add_comedian'),
    path('', library, name='library'),
]
