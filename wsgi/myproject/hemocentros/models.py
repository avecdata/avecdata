from django.db import models
from django.utils import timezone
from django.contrib.auth.models import Group, User
from django.contrib.auth import get_user_model
from django.conf import settings
from django.db.models import Q
from django.utils.translation import ugettext_lazy as _


# Create your models here.

class Hemocentro(models.Model):
    nm_hemocentro = models.CharField(max_length=201 , null=True)

    def publish_pgf_entidade(self):
        self.save()

    def __str__(self):
        return self.nm_hemocentro

class v_hemocentro_teste(models.Model):
    periodo = models.IntegerField(blank=True)
    qtd = models.IntegerField(blank=True, null=True)
    vlr = models.IntegerField(blank=True, null=True)

    class Meta:
      managed = False

    def __str__(self):
        return self.periodo

class v_coleta_anual(models.Model):
    ano = models.DateField()
    coletas = models.IntegerField(blank=True, null=True)
    inaptos = models.IntegerField(blank=True, null=True)
    variação_total_ano = models.IntegerField(blank=True, null=True)

    class Meta:
      managed = False

    def __str__(self):
        return self.coletas

class Comment(models.Model):
    date = models.DateField()
    time = models.TimeField()
