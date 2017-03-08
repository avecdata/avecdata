# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('avec', '0016_auto_20170126_1221'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subject_detail',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200)),
                ('text', models.TextField()),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_date', models.DateTimeField(null=True, blank=True)),
                ('author', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
                ('keywords', models.ManyToManyField(to='avec.Keywords', blank=True)),
                ('subject', models.ForeignKey(to='avec.Subject')),
            ],
        ),
        migrations.AlterField(
            model_name='post',
            name='subject',
            field=models.ManyToManyField(related_name='subchild', to='avec.Subject_detail'),
        ),
    ]
