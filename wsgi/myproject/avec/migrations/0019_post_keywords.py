# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0018_auto_20170126_1239'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='keywords',
            field=models.ManyToManyField(to='avec.Keywords', blank=True),
        ),
    ]
