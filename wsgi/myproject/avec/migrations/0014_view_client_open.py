# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2017-06-22 20:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0013_remove_view_client_open'),
    ]

    operations = [
        migrations.AddField(
            model_name='view_client',
            name='open',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
    ]
