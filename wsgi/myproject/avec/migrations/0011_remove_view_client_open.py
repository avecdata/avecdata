# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2017-06-22 20:21
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0010_view_client_open'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='view_client',
            name='open',
        ),
    ]