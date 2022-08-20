from django.urls import path, re_path
from .views import calendar

app_name = 'calendar'

urlpatterns = [
    path('', calendar, name='calendar'),
]
