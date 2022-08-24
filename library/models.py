from django.db import models
from django.db.models import URLField


class Comic(models.Model):
    name = models.CharField(max_length=30)
    rating = models.DecimalField(max_digits=2, decimal_places=1)  # до 1 000 000
    born = models.DateField(null=True)
    died = models.DateField(null=True)
    picture = models.ImageField(upload_to='comics')
    wiki_url = URLField(max_length=200)
    is_active = models.BooleanField(default=True)


class Streaming(models.Model):
    name = models.CharField(max_length=30)
    web_address = URLField(max_length=200)
    is_active = models.BooleanField(default=True)


class Special(models.Model):
    name = models.CharField(max_length=30)
    duration = models.DurationField()
    release_date = models.DateField(null=True)
    streaming = models.ForeignKey(Streaming, related_name='specials', on_delete=models.RESTRICT, null=True)
    web_address = URLField(max_length=200, null=True)