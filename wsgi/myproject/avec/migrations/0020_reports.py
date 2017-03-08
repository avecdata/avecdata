# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('avec', '0019_post_keywords'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reports',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200)),
                ('text', models.TextField()),
                ('pdf', models.FileField(upload_to=b'pdf')),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_date', models.DateTimeField(null=True, blank=True)),
                ('author', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
                ('keywords', models.ManyToManyField(to='avec.Keywords', blank=True)),
                ('subject', models.ManyToManyField(related_name='subparent1', to='avec.Subject')),
                ('subject_detail', models.ManyToManyField(related_name='subchild1', to='avec.Subject_detail')),
            ],
        ),
    ]
