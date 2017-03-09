# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0020_reports'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='link',
        ),
    ]
