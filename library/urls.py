from django.urls import path, re_path
from .views import library, edit_comedian, post_comedian

app_name = 'library'

urlpatterns = [
    path('edit_comedian', edit_comedian, name='edit_comedian'),
    path('post_comedian', post_comedian, name='post_comedian'),
    path('', library, name='library'),
]
