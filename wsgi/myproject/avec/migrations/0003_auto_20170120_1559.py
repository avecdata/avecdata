# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0002_keywords_subject'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subject',
            name='author',
        ),
        migrations.RemoveField(
            model_name='subject',
            name='keywords',
        ),
        migrations.DeleteModel(
            name='Keywords',
        ),
        migrations.DeleteModel(
            name='Subject',
        ),
    ]
