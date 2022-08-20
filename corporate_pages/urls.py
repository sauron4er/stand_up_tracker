from django.urls import path, re_path
from .views import subscribe, contact_us

app_name = 'corporate_pages'

urlpatterns = [
    path('subscribe', subscribe, name='subscribe'),
    path('contact_us', contact_us, name='contact_us'),
]
