# Generated by Django 2.1.3 on 2019-03-24 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0002_auto_20190321_2017'),
    ]

    operations = [
        migrations.AddField(
            model_name='word',
            name='upvoted_by',
            field=models.CharField(default=None, max_length=1000),
        ),
    ]
