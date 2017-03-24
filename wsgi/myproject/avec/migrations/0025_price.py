# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2017-03-22 03:38
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0007_alter_validators_add_error_messages'),
        ('avec', '0024_auto_20170321_2348'),
    ]

    operations = [
        migrations.CreateModel(
            name='Price',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country_code', models.IntegerField(default=0)),
                ('country_name', models.CharField(max_length=150)),
                ('country_slug', models.CharField(max_length=160)),
                ('pvalue', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_date', models.DateTimeField(blank=True, null=True)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group_price', to='auth.Group')),
            ],
        ),
    ]
