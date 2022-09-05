from django.db import models
from django.db.models import URLField
from profile.models import Account, Country


class Comedian(models.Model):
    name = models.CharField(max_length=30)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    born = models.DateField(null=True)
    died = models.DateField(null=True)
    picture = models.ImageField(upload_to='comedians')
    wiki_url = URLField(max_length=200)
    country = models.ForeignKey(Country, related_name='comedians', on_delete=models.RESTRICT)
    added_by = models.ForeignKey(Account, related_name='added_comedians', on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Streaming(models.Model):
    name = models.CharField(max_length=30)
    web_address = URLField(max_length=200)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Special(models.Model):
    name = models.CharField(max_length=30)
    comedian = models.ForeignKey(Comedian, related_name='comedian', on_delete=models.RESTRICT, null=True)
    duration = models.DurationField(null=True)
    release_date = models.DateField(null=True)
    streaming = models.ForeignKey(Streaming, related_name='specials', on_delete=models.RESTRICT, null=True)
    poster = models.ImageField(upload_to='specials/%Y/%m', null=True)
    imdb_url = URLField(max_length=200, null=True)
    added_by = models.ForeignKey(Account, related_name='added_specials', on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Special_Cast(models.Model):
    special = models.ForeignKey(Special, related_name='cast', on_delete=models.RESTRICT)
    comedian = models.ForeignKey(Comedian, related_name='specials', on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=True)


class Comedian_Comments(models.Model):
    comedian = models.ForeignKey(Comedian, related_name='comments', on_delete=models.RESTRICT)
    user = models.ForeignKey(Account, related_name='comedians_comments', on_delete=models.RESTRICT)
    comment = models.TextField(max_length=3000)
    answer_to = models.ForeignKey('self', related_name='responses', null=True, on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=True)


class Special_Comments(models.Model):
    special = models.ForeignKey(Special, related_name='comments', on_delete=models.RESTRICT)
    user = models.ForeignKey(Account, related_name='special_comments', on_delete=models.RESTRICT)
    comment = models.TextField(max_length=3000)
    answer_to = models.ForeignKey('self', related_name='responses', null=True, on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=True)


class User_Comedian_Rating(models.Model):
    user = models.ForeignKey(Account, related_name='comedian_ratings', on_delete=models.RESTRICT)
    comedian = models.ForeignKey(Comedian, related_name='user_ratings', on_delete=models.RESTRICT)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    note = models.TextField(max_length=3000, null=True)


class User_Special_Rating(models.Model):
    user = models.ForeignKey(Account, related_name='special_ratings', on_delete=models.RESTRICT)
    special = models.ForeignKey(Special, related_name='user_ratings', on_delete=models.RESTRICT)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    note = models.TextField(max_length=3000, null=True)


class Favorite_Comedians(models.Model):
    user = models.ForeignKey(Account, related_name='favorite_comedians', on_delete=models.RESTRICT)
    comedian = models.ForeignKey(Comedian, related_name='in_favorites', on_delete=models.RESTRICT)
    note = models.TextField(max_length=3000, null=True)


class Favorite_Specials(models.Model):
    user = models.ForeignKey(Account, related_name='favorite_specials', on_delete=models.RESTRICT)
    special = models.ForeignKey(Special, related_name='in_favorites', on_delete=models.RESTRICT)
    note = models.TextField(max_length=3000, null=True)


class To_Watch(models.Model):
    user = models.ForeignKey(Account, related_name='to_watch', on_delete=models.RESTRICT)
    special = models.ForeignKey(Special, related_name='in_to_watch', on_delete=models.RESTRICT)
    note = models.TextField(max_length=3000, null=True)
