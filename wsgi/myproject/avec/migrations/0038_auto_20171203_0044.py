# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2017-12-03 00:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0037_pgf_acao_detalhe'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pgf_acao',
            name='mes',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='pgf_acao',
            name='vl_total',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
    ]
