from django.shortcuts import render
from avec.models import Post, Subject, Themes, Keywords, Subject_detail, Reports, Price, Order, Dashboard, SimpleDashboard, tabSimple, Paineis, tabPaineis, View_Client, View_Themes, View_Subject, View_Subject_detail, v_emendas_autor, v_emendas_emendas, v_emendas_orgao, v_emendas_emenda_proposta, v_emendas_proposta, v_emendas_parlamentar_por_orgao, pgf_municipio, pgf_entidade, pgf_acao, pgf_acao_detalhe, pgf_acao_faec, pgf_acao_detalhe_faec, View_tabSimple, pgf_municipio_gis, pgf_acao_datasus, pgf_acao_datasus_detalhe, pgf_acao_datasus_grupo, v_pgf_municipio_saude, v_pgf_ambulatorial, v_pgf_hospitalar, v_pgf_total, v_pgf_repasse_teto, v_pgf_repasse_faec, v_pgf_analise_faec, v_pgf_analise_teto, v_pgf_aparecida
from .models import Hemocentro, v_hemocentro_teste, v_coleta_anual
from chartit import DataPool, Chart
from django.template import RequestContext
from django.http import HttpResponse, JsonResponse
from django.http import HttpResponseRedirect # Funcao para redirecionar o usuario
from django.contrib.auth.forms import UserCreationForm # Formulario de criacao de usuarios
from django.contrib.auth.forms import AuthenticationForm # Formulario de autenticacao de usuarios
from django.contrib.auth import authenticate, login # funcao que salva o usuario na sessao
from django.views.generic import View, TemplateView, CreateView
from django.core.urlresolvers import reverse_lazy, reverse
from allauth.exceptions import ImmediateHttpResponse
from django.conf import settings
import requests, json
from django.db.models import Q
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from avec import utils
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Max

from chartit import DataPool, Chart
from avec.decorators import add_source_code_and_doc
from django.shortcuts import render_to_response

# adicionados para o formulario de contato c/ envio de email
from avec.forms import ContactForm
from django.core.mail import EmailMessage
from django.shortcuts import redirect
from django.template import Context
from django.template.loader import get_template
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages

from django.dispatch import receiver
from allauth.account.signals import user_signed_up, user_logged_in
from allauth.socialaccount.signals import pre_social_login
from allauth.socialaccount.models import SocialAccount
from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter, get_adapter
from allauth.account.utils import perform_login, complete_signup
from pprint import pprint

from hemocentros.filters import AnoFilter

from django.db.models import Sum
import django.db.models.functions
from django.db.models import FloatField
import re

import urllib.request
import csv
# Create your views here.
def retrato(request, cd_municipio):
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=cd_municipio)
    entidade = pgf_entidade.objects.filter(cd_municipio=cd_municipio)
    hemocentro = Hemocentro.objects.values('nm_hemocentro')

    args = {}
    file_url_response =  open('/var/www/html/avecdata/wsgi/myproject/avec/static/data/cafe.csv')
    pre_reader = csv.reader(file_url_response)
    args['list'] = pre_reader

    #return render_to_response('hemocentros/index2.html', args)

    return render(request, 'hemocentros/index.html', {'cidade': cidade, 'entidade': entidade, 'hemocentro': hemocentro} )

def candidato_doacao(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(ano='2018').filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']
    acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).order_by('mes')
    acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)

    #simpledashs = SimpleDashboard.objects.filter(id__in=["37"]).order_by('-published_date')[:3]
    simpledashs = View_tabSimple.objects.filter()
    view_teste = v_coleta_anual.objects.values().order_by('ano')
    #acao_filter = AnoFilter(request.GET, queryset=view_teste)
    acao_filter = AnoFilter(request.GET, queryset=view_teste)

    return render(request, 'hemocentros/candidato_doacao.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'max_repasse' : max_repasse, 'max_producao' : max_producao, 'filter' : acao_filter, 'simpledashs' : simpledashs, 'view_teste' : view_teste})

def coleta(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(ano='2018').filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']
    acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).order_by('mes')
    acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)
    acao_filter = AcaoFilter(request.GET, queryset=acao)
    simpledashs = View_tabSimple.objects.filter()
    return render(request, 'hemocentros/coleta.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'max_repasse' : max_repasse, 'max_producao' : max_producao, 'filter' : acao_filter, 'simpledashs' : simpledashs})

def laboratorio(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(ano='2018').filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']
    acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).order_by('mes')
    acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)
    acao_filter = AcaoFilter(request.GET, queryset=acao)
    simpledashs = View_tabSimple.objects.filter()
    return render(request, 'hemocentros/laboratorio.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'max_repasse' : max_repasse, 'max_producao' : max_producao, 'filter' : acao_filter, 'simpledashs' : simpledashs})

def hemocomponentes(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(ano='2018').filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']
    acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).order_by('mes')
    acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)
    acao_filter = AcaoFilter(request.GET, queryset=acao)
    simpledashs = View_tabSimple.objects.filter()
    return render(request, 'hemocentros/hemocomponentes.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'max_repasse' : max_repasse, 'max_producao' : max_producao, 'filter' : acao_filter, 'simpledashs' : simpledashs})

def metas(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(ano='2018').filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']
    acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).order_by('mes')
    acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)
    acao_filter = AcaoFilter(request.GET, queryset=acao)
    simpledashs = View_tabSimple.objects.filter()
    return render(request, 'hemocentros/metas.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'max_repasse' : max_repasse, 'max_producao' : max_producao, 'filter' : acao_filter, 'simpledashs' : simpledashs})

def gestao(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(ano='2018').filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']
    acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).order_by('mes')
    acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)
    acao_filter = AcaoFilter(request.GET, queryset=acao)
    simpledashs = View_tabSimple.objects.filter()
    return render(request, 'hemocentros/gestao.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'max_repasse' : max_repasse, 'max_producao' : max_producao, 'filter' : acao_filter, 'simpledashs' : simpledashs})


def morbidade(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    acao = pgf_acao_datasus.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade').order_by('mes')
    grupo_hospitalar = pgf_acao_datasus.objects.filter(cd_acao__in=acao).filter(amb_hosp='Hospitalar').distinct('grupo')
    grupo_ambulatorial = pgf_acao_datasus.objects.filter(cd_acao__in=acao).filter(amb_hosp='Ambulatorial').distinct('grupo')
    acao_filter = AcaoFilterDatasus(request.GET, queryset=acao)
    view_aparecida = v_pgf_aparecida.objects.values()


    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']
    view_ambulatorial = v_pgf_ambulatorial.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade')
    view_hospitalar = v_pgf_hospitalar.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade')
    view_total = v_pgf_total.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade')
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)

    return render(request, 'hemocentros/morbidade.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'filter' : acao_filter, 'acao' : acao, 'grupo_hospitalar' : grupo_hospitalar, 'grupo_ambulatorial' : grupo_ambulatorial, 'max_repasse' : max_repasse, 'max_producao' : max_producao, 'view_aparecida' : view_aparecida })

def highchart(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    #acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num=30472).order_by('mes')
    #acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)
    acao_detalhe = pgf_acao_detalhe.objects.filter(cnpj=cnpj).filter(acao_num=30472).order_by('dt_ob_date')
    view_teste = v_hemocentro_teste.objects.values().order_by('periodo')

    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)

    return render(request, 'hemocentros/highchart.html', {'int_cnpj' : int_cnpj, 'acao_detalhe': acao_detalhe, 'cidade' : cidade, 'entidade' : entidade, 'view_teste' : view_teste})
