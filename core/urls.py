from django.contrib import admin
from django.urls import include, path, re_path
from django.contrib.auth.views import LoginView, LogoutView
from django.views.static import serve
from core import settings

from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from corporate_pages.views import subscribe, contact_us
from library.views import search


urlpatterns = [
    path('admin/', admin.site.urls, name='sts_admin'),
    path('logout/', LogoutView.as_view(), {'template_name': 'accounts/login.html'}, name='logout'),
    path('login/', LoginView.as_view(), {'template_name': 'accounts/login.html'}, name='login'),

    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),

    path(r'settings/', include('settings.urls', namespace='settings')),
    path(r'home/', include('home.urls', namespace='home')),
    path(r'my_specials/', include('my_specials.urls', namespace='my_specials')),
    path(r'calendar/', include('calendar.urls', namespace='calendar')),
    path(r'library/', include('library.urls', namespace='library')),
    path(r'profile/', include('profile.urls', namespace='profile')),

    path('subscribe', subscribe, name='subscribe'),
    path('contact_us', contact_us, name='contact_us'),
    path('search', search, name='search'),

    path('', include('home.urls', namespace='home_from_blank')),
]
