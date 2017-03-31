# -*- coding: utf-8 -*-
'''
Created on 27 de mar de 2017

@author: theogenes
'''

from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import requests, json

def validate_even(value):
    if value % 2 != 0:
        raise ValidationError(
            _('%(value)s is not an even number'),
            params={'value': value},
        )

def validate_is_not_empty(value):
    if not(value and value.strip()):
        raise ValidationError(_('Campo Obrigatório'), params={}, )

@csrf_exempt
def check_email(request):
    
    resultado_json = False
#     print('hkjfsh dfkjhds')
    if request.method == 'POST':
        email = request.POST.get('username')
        
        User = get_user_model()
        user_payment = User.objects.filter(email=email)
        
        if not user_payment:
            resultado_json = True
        else:
            resultado_json = False
    
    return JsonResponse(resultado_json, safe=False)

@csrf_exempt
def check_username(request):
    
    resultado_json = False
    if request.method == 'POST':
        username = request.POST.get('username')
        
        User = get_user_model()
        user_payment = User.objects.filter(username=username)
        
        if not user_payment:
            resultado_json = True
        else:
            resultado_json = False
    
    return JsonResponse(resultado_json, safe=False)