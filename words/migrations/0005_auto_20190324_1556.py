# Generated by Django 2.1.3 on 2019-03-24 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0004_auto_20190324_1552'),
    ]

    operations = [
        migrations.AlterField(
            model_name='word',
            name='upvoted_by',
            field=models.CharField(default='', max_length=1000),
        ),
    ]
