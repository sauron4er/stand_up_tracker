# Generated by Django 4.1.1 on 2022-11-08 06:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0009_alter_comedian_name_alter_streaming_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='special',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]
