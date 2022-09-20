from django.urls import path, re_path
from .views import my_calendar

app_name = 'my_calendar'

urlpatterns = [
    path('', my_calendar, name='my_calendar'),
]
