# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2017-04-27 02:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0007_alter_validators_add_error_messages'),
        ('avec', '0004_auto_20170416_1542'),
    ]

    operations = [
        migrations.CreateModel(
            name='Paineis',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_date', models.DateTimeField(blank=True, null=True)),
                ('open', models.BooleanField()),
                ('external_files', models.TextField(blank=True)),
                ('group', models.ManyToManyField(to='auth.Group')),
                ('keywords', models.ManyToManyField(blank=True, to='avec.Keywords')),
                ('subject', models.ManyToManyField(related_name='subparent_painel', to='avec.Subject')),
                ('subject_detail', models.ManyToManyField(related_name='subchild_painel', to='avec.Subject_detail')),
            ],
        ),
        migrations.CreateModel(
            name='SimpleDashboard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_date', models.DateTimeField(blank=True, null=True)),
                ('open', models.BooleanField()),
                ('external_files', models.TextField(blank=True)),
                ('group', models.ManyToManyField(to='auth.Group')),
                ('keywords', models.ManyToManyField(blank=True, to='avec.Keywords')),
                ('subject', models.ManyToManyField(related_name='subparent_simple', to='avec.Subject')),
                ('subject_detail', models.ManyToManyField(related_name='subchild_simple', to='avec.Subject_detail')),
            ],
        ),
        migrations.CreateModel(
            name='tabPaineis',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('subtitle', models.CharField(max_length=200)),
                ('footer', models.TextField(blank=True)),
                ('html', models.TextField(blank=True)),
                ('painel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='avec.Paineis', verbose_name='Paineis')),
            ],
            options={
                'verbose_name_plural': 'tabPaineis',
                'verbose_name': 'tabPainel',
            },
        ),
        migrations.CreateModel(
            name='tabSimple',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('subtitle', models.CharField(max_length=200)),
                ('footer', models.TextField(blank=True)),
                ('html', models.TextField(blank=True)),
                ('simpleDashboard', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='avec.SimpleDashboard', verbose_name='SimpleDashboard')),
            ],
            options={
                'verbose_name_plural': 'tabSimples',
                'verbose_name': 'tabSimple',
            },
        ),
        migrations.RemoveField(
            model_name='dashsource',
            name='dash',
        ),
        migrations.DeleteModel(
            name='Dashsource',
        ),
    ]