# -*- coding: utf-8 -*-
'''
Created on 28 de mar de 2017

@author: theogenes
'''
from django.utils import timezone
import datetime
import calendar
from django.conf import settings
from django.core.mail import EmailMessage
from avec.models import Group

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils import six

def add_time(input_date, time_unit, quantity):

    time_dict = {'year': add_year, 'month': add_months, 'days': add_days, 'hour': add_hours, 'minute': add_minutes, 'seconds': add_seconds}

    date_time_added = time_dict[time_unit](input_date, quantity)

    year = date_time_added.year
    month = date_time_added.month
    day = date_time_added.day

    hour = date_time_added.hour
    minute = date_time_added.minute
    second = date_time_added.second
    msec = date_time_added.microsecond
    tzinfo = date_time_added.tzinfo

    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_seconds(input_date, seconds):

    second = input_date.second

    minutes = int((seconds+second)/60)
    date_seconds_added = add_minutes(input_date, minutes)
    seconds_added = seconds+second

    if(seconds_added >= 60):
        seconds_added = seconds_added%60

    year = date_seconds_added.year
    month = date_seconds_added.month
    day = date_seconds_added.day

    hour = date_seconds_added.hour
    minute = date_seconds_added.minute
    second = seconds_added
    msec = date_seconds_added.microsecond
    tzinfo = date_seconds_added.tzinfo

    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_minutes(input_date, minutes):

    minute = input_date.minute

    hours = int((minutes+minute)/60)
    date_minutes_added = add_hours(input_date, hours)
    minutes_added = minutes+minute

    if((minutes+minute) >= 60):
        minutes_added = (minutes+minute)%60

    year = date_minutes_added.year
    month = date_minutes_added.month
    day = date_minutes_added.day

    hour = date_minutes_added.hour
    minute = minutes_added
    second = date_minutes_added.second
    msec = date_minutes_added.microsecond
    tzinfo = date_minutes_added.tzinfo

    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_hours(input_date, hours):

    hour = input_date.hour

    days = int((hours+hour)/24)

    date_days_added = add_days(input_date, days)
    hours_added = hours+hour

    if((hours+hour) >= 24):
        hours_added = (hours+hour)%24

    year = date_days_added.year
    month = date_days_added.month
    day = date_days_added.day

    hour = hours_added
    minute = date_days_added.minute
    second = date_days_added.second
    msec = date_days_added.microsecond
    tzinfo = date_days_added.tzinfo

    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_days(input_date, days):

    days_per_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    year = input_date.year
    month = input_date.month
    day = input_date.day

    hour = input_date.hour
    minute = input_date.minute
    second = input_date.second
    msec = input_date.microsecond
    tzinfo = input_date.tzinfo

    for x in range(0, days):
        day = day +1
        if (day > days_per_month[month-1]) or (month==2 and day==29 and not calendar.isleap(year)):
            day = 1
            month = month + 1

            if(month == 13):
                month = 1
                year = year + 1

    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_months(input_date, months):

    month = input_date.month-1 + months
    year = int(input_date.year + month/12)
    month = month%12 + 1
    day = min(input_date.day,calendar.monthrange(year, month)[1])

    return datetime.datetime(year, month, day, input_date.hour, input_date.minute, input_date.second, input_date.microsecond, tzinfo=input_date.tzinfo)

def add_year(input_date, num_years):

    year = input_date.year
    month = input_date.month
    day = input_date.day

    hour = input_date.hour
    minute = input_date.minute
    second = input_date.second
    msec = input_date.microsecond
    tzinfo = input_date.tzinfo

    year = year + num_years

    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def check_plan_validity(user_session):

    now = timezone.now()

    if user_session is not None:
        #print(user_session)
        basic_group = Group.objects.get(id=1)

        if(now > user_session.date_expiration and len(user_session.groups.filter(name=basic_group.name)) < 1 and len(user_session.groups.filter(id=4)) < 1):

            std_group = Group.objects.get(id=5)
            pro_group = Group.objects.get(id=2)
            corp_group = Group.objects.get(id=3)
#             adm_group = Group.objects.get(id=4)

            basic_group.user_set.remove(user_session)
            std_group.user_set.remove(user_session)
            pro_group.user_set.remove(user_session)
            corp_group.user_set.remove(user_session)
#             adm_group.user_set.remove(user_session)

            basic_group.user_set.add(user_session)

            return False
    else:
        return False

    return True

def send_mail(title, content_message, receivers):

        email_obj = EmailMessage(title, content_message, to=receivers)
        email_obj.content_subtype = "html"  # Main content is now text/html
        email_obj.send()

def get_content_subscription_email(name, plan_type, item_list):

    content_message = '<font face="Helvetica, Arial, sans-serif" size="2" color="#000000">'
    content_message += '<img src="http://www.avecdata.com/static/avecv2.0-template/img/avec-nova-logo.png"><br>'
    content_message += '<hr height="1" style="height:1px; border:0 none; color: #76899a; background-color: #76899a; margin-top: 0.5em; margin-bottom:1.5em;">'
    content_message += '<br>'
    content_message += '<span>Olá '+name+',</span><br>'
    content_message += '<br>'
    content_message += '<p>Obrigado pelo interesse em assinar um dos nossos planos de acesso à plataforma AVEC.</p>'
    content_message += '<br>'

    if(plan_type == 'Básico'):
        content_message += '<p>Seu cadastro foi concluído e agora você tem acesso ao <strong>Plano de Assinatura '+plan_type+'</strong>.</p>'
    else:
        content_message += '<p>Seu cadastro foi concluído e seu acesso ao <strong>Plano de Assinatura '+plan_type+'</strong> será liberado automaticamente após a confirmação do pagamento.</p>'

    content_message += '<br>'
    content_message += '<p>Com ele você terá acesso aos seguintes serviços:</p>'
    content_message += '<ul>'

    for item in item_list:
        content_message += '<li>'+item+'</li>'

    content_message += '</ul>'
    content_message += '<br>'
    content_message += '<span>Atenciosamente,</span>'
    content_message += '<br>'
    content_message += '<br>'
    content_message += '<p>-----------------------------------------------------------------<br>AVEC DATA - Plataforma de Dados Setoriais</p>'
    content_message += '</font>'

    return content_message

def get_content_update_register(name, plan_type):

    content_message = '<font face="Helvetica, Arial, sans-serif" size="2" color="#000000">'
    content_message += '<img src="http://www.avecdata.com/static/avecv2.0-template/img/avec-nova-logo.png"><br>'
    content_message += '<hr height="1" style="height:1px; border:0 none; color: #76899a; background-color: #76899a; margin-top: 0.5em; margin-bottom:1.5em;">'
    content_message += '<br>'
    content_message += '<span>Olá '+name+',</span><br>'
    content_message += '<br>'
    content_message += '<p>Seus dados cadastrais foram atualizados com sucesso!.</p>'
    content_message += '<br>'
    content_message += '<p>Seu Plano de Assinatura atual é: '+plan_type+'</strong>.</p>'
    content_message += '<br>'
    content_message += '<span>Atenciosamente,</span>'
    content_message += '<br>'
    content_message += '<br>'
    content_message += '<p>-----------------------------------------------------------------<br>AVEC DATA - Plataforma de Dados Setoriais</p>'
    content_message += '</font>'

    return content_message

def get_content_update_subscription_email(name, plan_type, item_list):

    content_message = '<font face="Helvetica, Arial, sans-serif" size="2" color="#000000">'
    content_message += '<img src="http://www.avecdata.com/static/avecv2.0-template/img/avec-nova-logo.png"><br>'
    content_message += '<hr height="1" style="height:1px; border:0 none; color: #76899a; background-color: #76899a; margin-top: 0.5em; margin-bottom:1.5em;">'
    content_message += '<br>'
    content_message += '<span>Olá '+name+',</span><br>'
    content_message += '<br>'
    content_message += '<p>Obrigado pelo interesse em expandir seu plano de assinatura à plataforma AVEC.</p>'
    content_message += '<br>'
    content_message += '<p>Sua solicitação foi realizada e seu acesso ao <strong>Plano de Assinatura '+plan_type+'</strong> será liberado automaticamente após a confirmação do pagamento.</p>'
    content_message += '<br>'
    content_message += '<p>Com ele você terá acesso aos seguintes serviços:</p>'
    content_message += '<ul>'

    for item in item_list:
        content_message += '<li>'+item+'</li>'

    content_message += '</ul>'
    content_message += '<br>'
    content_message += '<span>Atenciosamente,</span>'
    content_message += '<br>'
    content_message += '<br>'
    content_message += '<p>-----------------------------------------------------------------<br>AVEC DATA - Plataforma de Dados Setoriais</p>'
    content_message += '</font>'

    return content_message

def get_content_recovery_password(name, url):

    content_message = '<font face="Helvetica, Arial, sans-serif" size="2" color="#000000">'
    content_message += '<img src="http://www.avecdata.com/static/avecv2.0-template/img/avec-nova-logo.png"><br>'
    content_message += '<hr height="1" style="height:1px; border:0 none; color: #76899a; background-color: #76899a; margin-top: 0.5em; margin-bottom:1.5em;">'
    content_message += '<br>'
    content_message += '<span>Olá '+name+',</span><br>'
    content_message += '<br>'
    content_message += '<p>Você solicitou o cadastramento de Nova Senha através da nossa plataforma.</p>'
    content_message += '<br>'
    content_message += '<p>Por favor, clique no link abaixo para realizar o cadastramento de sua Senha.</p>'
    content_message += '<br>'
    content_message += '<a href="'+url+'">Link para Recuperação de Senha AVEC</a>'
    content_message += '<br>'
    content_message += '<br>'
    content_message += '<span>Atenciosamente,</span>'
    content_message += '<br>'
    content_message += '<br>'
    content_message += '<p>-----------------------------------------------------------------<br>AVEC DATA - Plataforma de Dados Setoriais</p>'
    content_message += '</font>'

    return content_message

def dashboard_permission(group_user_id, dashboard):

#     print('teste: '+str(group_dash.id))

    groups_dash = dashboard.group.all()
    group_dash = get_greater_group(groups_dash)

    if dashboard.open == True or group_user_id == 3 or group_dash.id == 1:
        return True
    elif group_dash.id == 2 and (group_user_id == 2 or group_user_id == 3):
        return True
    elif group_dash.id == 5 and (group_user_id == 2 or group_user_id == 3 or group_user_id == 5):
        return True
    else:
        False

def post_permission(group_user_id, avec_post):

#     print('teste: '+str(group_dash.id))

    groups_post = avec_post.group.all()
    group_post = get_greater_group(groups_post)
    #if avec_post.open == True or group_user_id == 3 or group_post.id == 1:
    if avec_post.open == True or group_user_id == 3:
        return True
    elif group_post.id == 2 and (group_user_id == 2 or group_user_id == 3):
        return True
    elif group_post.id == 5 and (group_user_id == 2 or group_user_id == 3 or group_user_id == 5):
        return True
    elif group_user_id == 1 or group_user_id == 2  or group_user_id == 5:
        return True
    else:
        False

def simpledashboard_permission(group_user_id, avec_simpledashboard):

    #print('teste: '+str(group_user_id))

    groups_simple = avec_simpledashboard.group.all()
    group_simple = get_greater_group(groups_simple)
    #if avec_post.open == True or group_user_id == 3 or group_post.id == 1:
    if avec_simpledashboard.open == True or group_user_id == 3:
        return True
    elif group_simple.id == 2 and (group_user_id == 2 or group_user_id == 3):
        return True
    elif group_simple.id == 5 and (group_user_id == 2 or group_user_id == 3 or group_user_id == 5):
        return True
    elif group_user_id == 1 or group_user_id == 2  or group_user_id == 5:
        return True
    else:
        False

def get_greater_group(groups):

    for group in groups:
        if group.id == 3:
            return group

    for group in groups:
        if group.id == 5:
            return group

    for group in groups:
        if group.id == 2:
            return group

    basic_group = Group.objects.get(id=1)

    return basic_group

class AccountActivationTokenGenerator(PasswordResetTokenGenerator):

    def _make_hash_value(self, user, timestamp):
        return (
            six.text_type(user.pk) + six.text_type(timestamp) +
            six.text_type(user.is_active)
        )

account_activation_token = AccountActivationTokenGenerator()
