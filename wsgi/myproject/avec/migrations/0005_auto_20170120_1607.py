# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0004_keywords_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subject',
            name='keywords',
            field=models.ManyToManyField(to='avec.Keywords', null=True),
        ),
    ]
