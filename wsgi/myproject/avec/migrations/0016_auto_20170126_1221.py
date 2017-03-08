# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0015_auto_20170126_1213'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subject_detail',
            name='author',
        ),
        migrations.RemoveField(
            model_name='subject_detail',
            name='keywords',
        ),
        migrations.RemoveField(
            model_name='subject_detail',
            name='subject',
        ),
        migrations.AlterField(
            model_name='post',
            name='subject',
            field=models.ManyToManyField(to='avec.Subject'),
        ),
        migrations.DeleteModel(
            name='Subject_detail',
        ),
    ]
