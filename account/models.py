from django.db import models
from django.contrib.auth.models import User


class Theme(models.Model):
    name = models.CharField(max_length=6)
    is_navbar_dark = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.RESTRICT, null=True)
    phone = models.CharField(max_length=10, null=True)
    registered = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    theme = models.ForeignKey(Theme, related_name='customers', on_delete=models.RESTRICT)

    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name
