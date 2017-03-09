# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0007_auto_20170120_1612'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subject',
            name='title',
            field=models.TextField(max_length=200),
        ),
    ]
