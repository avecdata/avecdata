# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2017-12-06 05:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0056_auto_20171206_0302'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pgf_acao_datasus',
            name='total',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=15),
            preserve_default=False,
        ),
    ]
