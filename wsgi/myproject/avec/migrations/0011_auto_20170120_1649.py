# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('avec', '0010_auto_20170120_1648'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subject',
            name='theme',
            field=models.ForeignKey(to='avec.Themes'),
        ),
    ]
