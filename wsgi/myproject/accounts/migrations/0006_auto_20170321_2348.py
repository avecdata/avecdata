# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2017-03-22 02:48
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models
import re


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20170321_1739'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(help_text='Um nome curto que sera usado para identifica-lo de forma unica na plataforma', max_length=30, unique=True, validators=[django.core.validators.RegexValidator(re.compile('^[\\w.@+-]+$', 32), 'Informe um nome de usuario valido. Este valor deve conter apenas letras, numeros e os caracteres: @/./+/-/_ .', 'invalid')], verbose_name='Usuário'),
        ),
    ]
