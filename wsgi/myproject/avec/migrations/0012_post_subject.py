# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0011_auto_20170120_1649'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='subject',
            field=models.ManyToManyField(to='avec.Subject'),
        ),
    ]
