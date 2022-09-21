from django.db import models
from django.contrib.auth.models import User


class Theme(models.Model):
    name = models.CharField(max_length=6)
    is_navbar_dark = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Language(models.Model):
    name = models.CharField(max_length=10)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Country(models.Model):
    name = models.CharField(max_length=25)
    flag = models.ImageField(upload_to='flags', null=True)
    main_language = models.ForeignKey(Language, related_name='countries', on_delete=models.RESTRICT, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.RESTRICT)
    phone = models.CharField(max_length=10, null=True)
    country = models.ForeignKey(Country, related_name='users', on_delete=models.RESTRICT)
    theme = models.ForeignKey(Theme, related_name='users', on_delete=models.RESTRICT, null=True)
    language = models.ForeignKey(Language, related_name='accounts', on_delete=models.RESTRICT, null=True)
    note = models.TextField(max_length=1000, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.user.username
