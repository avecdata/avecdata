# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0014_subject_detail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='subject',
            field=models.ManyToManyField(to='avec.Subject_detail'),
        ),
    ]
