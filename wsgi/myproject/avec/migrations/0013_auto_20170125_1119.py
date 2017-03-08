# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0012_post_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='link',
            field=models.CharField(max_length=350),
        ),
    ]
