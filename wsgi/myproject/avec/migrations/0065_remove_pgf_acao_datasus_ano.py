# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2018-03-20 17:05
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0064_pgf_acao_datasus_ano'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pgf_acao_datasus',
            name='ano',
        ),
    ]