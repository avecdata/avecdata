# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2017-11-01 15:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0031_remove_view_client_no_script'),
    ]

    operations = [
        migrations.AddField(
            model_name='view_client',
            name='no_script',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
    ]
