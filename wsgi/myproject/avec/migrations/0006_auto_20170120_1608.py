# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0005_auto_20170120_1607'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subject',
            name='keywords',
            field=models.ManyToManyField(to='avec.Keywords', blank=True),
        ),
    ]
