# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2017-12-03 00:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0041_auto_20171203_0046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pgf_acao',
            name='vl_total',
            field=models.DecimalField(decimal_places=20, default=0.0, max_digits=20),
        ),
    ]
