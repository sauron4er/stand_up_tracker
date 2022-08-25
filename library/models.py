from django.db import models
from django.db.models import URLField
from profile.models import Account


class Comic(models.Model):
    name = models.CharField(max_length=30)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    born = models.DateField(null=True)
    died = models.DateField(null=True)
    picture = models.ImageField(upload_to='comics')
    wiki_url = URLField(max_length=200)
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
    duration = models.DurationField(null=True)
    release_date = models.DateField(null=True)
    streaming = models.ForeignKey(Streaming, related_name='specials', on_delete=models.RESTRICT, null=True)
    poster = models.ImageField(upload_to='specials/%Y/%m', null=True)
    imdb_url = URLField(max_length=200, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Special_Cast(models.Model):
    special = models.ForeignKey(Special, related_name='cast', on_delete=models.RESTRICT)
    comic = models.ForeignKey(Comic, related_name='specials', on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=True)


class Comic_Comments(models.Model):
    comic = models.ForeignKey(Comic, related_name='comments', on_delete=models.RESTRICT)
    user = models.ForeignKey(Account, related_name='comic_comments', on_delete=models.RESTRICT)
    comment = models.TextField(max_length=3000)
    answer_to = models.ForeignKey('self', related_name='responses', null=True, on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=True)


class Special_Comments(models.Model):
    special = models.ForeignKey(Special, related_name='comments', on_delete=models.RESTRICT)
    user = models.ForeignKey(Account, related_name='special_comments', on_delete=models.RESTRICT)
    comment = models.TextField(max_length=3000)
    answer_to = models.ForeignKey('self', related_name='responses', null=True, on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=True)


class User_Comic_Rating(models.Model):
    user = models.ForeignKey(Account, related_name='comic_ratings', on_delete=models.RESTRICT)
    comic = models.ForeignKey(Comic, related_name='user_ratings', on_delete=models.RESTRICT)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    note = models.TextField(max_length=3000, null=True)


class User_Special_Rating(models.Model):
    user = models.ForeignKey(Account, related_name='special_ratings', on_delete=models.RESTRICT)
    special = models.ForeignKey(Special, related_name='user_ratings', on_delete=models.RESTRICT)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    note = models.TextField(max_length=3000, null=True)


class Favorite_Comics(models.Model):
    user = models.ForeignKey(Account, related_name='favorite_comics', on_delete=models.RESTRICT)
    comic = models.ForeignKey(Comic, related_name='in_favorites', on_delete=models.RESTRICT)
    note = models.TextField(max_length=3000, null=True)


class Favorite_Specials(models.Model):
    user = models.ForeignKey(Account, related_name='favorite_specials', on_delete=models.RESTRICT)
    special = models.ForeignKey(Special, related_name='in_favorites', on_delete=models.RESTRICT)
    note = models.TextField(max_length=3000, null=True)


class To_Watch(models.Model):
    user = models.ForeignKey(Account, related_name='to_watch', on_delete=models.RESTRICT)
    special = models.ForeignKey(Special, related_name='in_to_watch', on_delete=models.RESTRICT)
    note = models.TextField(max_length=3000, null=True)
