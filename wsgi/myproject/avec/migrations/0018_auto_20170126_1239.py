# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0017_auto_20170126_1237'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='subject_detail',
            field=models.ManyToManyField(related_name='subchild', to='avec.Subject_detail'),
        ),
        migrations.AlterField(
            model_name='post',
            name='subject',
            field=models.ManyToManyField(related_name='subparent', to='avec.Subject'),
        ),
    ]
