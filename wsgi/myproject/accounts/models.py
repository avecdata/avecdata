# coding=utf-8

import re

from django.db import models
from django.core import validators
from django.contrib.auth.models import AbstractBaseUser, UserManager, PermissionsMixin
from datetime import datetime


class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(
        'Usuário', max_length=30, unique=True, validators=[
            validators.RegexValidator(
                re.compile('^[\w.@+-]+$'),
                'Informe um nome de usuario valido. '
                'Este valor deve conter apenas letras, numeros '
                'e os caracteres: @/./+/-/_ .'
                , 'invalid'
            )
        ], help_text='Um nome curto que sera usado para identifica-lo de forma unica na plataforma'
    )
    name = models.CharField('Nome', max_length=100, blank=False)
    phone = models.CharField('Telefone', max_length=22, null=True)
    email = models.EmailField('E-mail', unique=True)
    is_staff = models.BooleanField('Equipe', default=False)
    is_active = models.BooleanField('Ativo', default=True)
    is_from_socialnetwork = models.BooleanField('Login Social', default=False)
    imgprofile = models.TextField('Avatar', default="")
    gender = models.CharField('Gênero', max_length=2, null=True)
    date_joined = models.DateTimeField('Data de Entrada', auto_now_add=True)
    date_expiration = models.DateTimeField('Data de Expiração', default=datetime.now, blank=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    class Meta:
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'

    def __str__(self):
        return self.name or self.username

    def get_full_name(self):
        return str(self)

    def get_short_name(self):
        return str(self).split(" ")[0]
