# Generated by Django 2.1.3 on 2019-03-19 17:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag_name', models.CharField(max_length=144, unique=True)),
                ('tag_slug', models.CharField(max_length=144)),
                ('tag_pub_date', models.DateTimeField(auto_now_add=True)),
                ('is_main_field', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Word',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word_name', models.CharField(max_length=144)),
                ('word_def', models.CharField(max_length=200)),
                ('word_example', models.CharField(default=None, max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('upvotes', models.IntegerField(default=0)),
                ('downvotes', models.IntegerField(default=0)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('word_tag', models.ManyToManyField(to='words.Tag')),
            ],
        ),
    ]
