# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2017-11-01 15:43
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0023_view_client_image2'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='view_client',
            name='script',
        ),
    ]
