# Generated by Django 4.1.1 on 2022-09-23 06:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0005_special_rating_alter_comedian_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='special',
            name='comedian',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='specials', to='library.comedian'),
        ),
        migrations.AlterField(
            model_name='special_cast',
            name='comedian',
            field=models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, related_name='cast_in_specials', to='library.comedian'),
        ),
    ]
