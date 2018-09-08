from django.db import models
from django.utils import timezone
from django.contrib.auth.models import Group, User
from django.contrib.auth import get_user_model
from django.conf import settings
from django.db.models import Q
from django.utils.translation import ugettext_lazy as _


# Create your models here.

class Hemocentro(models.Model):
    nm_hemocentro = models.CharField(max_length=200 , null=True)

    def publish_pgf_entidade(self):
        self.save()

    def __str__(self):
        return self.nm_hemocentro
