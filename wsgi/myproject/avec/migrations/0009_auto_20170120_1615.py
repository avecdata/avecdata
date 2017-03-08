# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0008_auto_20170120_1614'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subject',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
