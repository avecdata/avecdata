# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2017-11-01 15:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0026_remove_view_client_script'),
    ]

    operations = [
        migrations.AddField(
            model_name='view_client',
            name='script',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
