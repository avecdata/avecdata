# -*- coding: utf-8 -*-
from django.http import HttpResponsePermanentRedirect
from django.shortcuts import render, render_to_response, get_object_or_404
from django.utils import timezone
from .models import Post, Subject, Themes, Keywords, Subject_detail, Reports, Price, Order, Dashboard, SimpleDashboard, tabSimple, Paineis, tabPaineis, View_Client, View_Themes, View_Subject, View_Subject_detail, v_emendas_autor, v_emendas_emendas, v_emendas_orgao, v_emendas_emenda_proposta, v_emendas_proposta, v_emendas_parlamentar_por_orgao, pgf_municipio, pgf_entidade, pgf_acao, pgf_acao_detalhe, pgf_acao_faec, pgf_acao_detalhe_faec, View_tabSimple, pgf_municipio_gis, pgf_acao_datasus, pgf_acao_datasus_detalhe, pgf_acao_datasus_grupo, v_pgf_municipio_saude, v_pgf_ambulatorial, v_pgf_hospitalar, v_pgf_total, v_pgf_repasse_teto, v_pgf_repasse_faec, v_pgf_analise_faec, v_pgf_analise_teto
from django.contrib.auth.models import Group
from accounts.models import User
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
from .decorators import add_source_code_and_doc
from django.shortcuts import render_to_response

# adicionados para o formulario de contato c/ envio de email
from .forms import ContactForm
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

from .filters import AcaoFilter, AcaoFilterFaec, AcaoFilterDatasus

from django.db.models import Sum
import django.db.models.functions
from django.db.models import FloatField
import re

# Create your views here.
def page_not_found(request):
    # Dict to pass to template, data could come from DB query
    values_for_template = {}
    return render(request,'avec/404.html',values_for_template,status=404)

def server_error(request):
    # Dict to pass to template, data could come from DB query
    values_for_template = {}
    return render(request,'avec/404.html',values_for_template,status=500)

def bad_request(request):
    # Dict to pass to template, data could come from DB query
    values_for_template = {}
    return render(request,'avec/400.html',values_for_template,status=400)

def permission_denied(request):
    # Dict to pass to template, data could come from DB query
    values_for_template = {}
    return render(request,'avec/403.html',values_for_template,status=403)

def index(request):
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    subject = Subject.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    subject_detail = Subject_detail.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    view_client = View_Client.objects.all()
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')[:3]
    simpledashs = SimpleDashboard.objects.filter().order_by('-published_date')[:3]
    panels = Paineis.objects.filter().order_by('-published_date')[:3]
    return render(request, 'avec/index.html', {'subject': subject, 'themes': themes, 'subject_detail' : subject_detail, 'posts' : posts, 'simpledashs': simpledashs, 'panels': panels, 'view_client' : view_client})

def ciencia_tecnologia(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'avec/ciencia_tecnologia.html', {'posts': posts})

def registro_civil(request):
    return render(request, 'avec/registro_civil.html')

def retratos_municipais(request):
    return render(request, 'avec/dashboards/retratosmunicipais.html')

def educacao(request):
    return render(request, 'avec/dashboards/educacao.html')

def permssao(request):
    return render(request,'avec/permissao.html')

def simpleDash_detail(request, pk):
    groups = request.user.groups.all()
    group_user = utils.get_greater_group(groups)

    dash = SimpleDashboard.objects.get(pk=pk)
    request.session['next'] = '/simpleDash_detail/'+pk

    if groups:
        simpledashboard_permission = utils.simpledashboard_permission(group_user.id, dash)
    else:
        simpledashboard_permission = False

    if simpledashboard_permission:
        dash = SimpleDashboard.objects.get(pk=pk)
        mykeywords = dash.keywords.all()
        myparent = dash.subject.all()
        related = Subject_detail.objects.filter(subject=myparent)
        related_dashs = SimpleDashboard.objects.filter(subject=myparent)
        related_info = Post.objects.filter(subject=myparent)
        mytabs = dash.tabsimple_set.all().order_by('id')
        themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
        return render(request, 'avec/simpleDash_detail.html', {'groups' : groups ,'dash': dash, 'mykeywords' : mykeywords, 'mytabs' : mytabs, 'myparent' : myparent, 'related' : related, 'related_dashs' : related_dashs, 'related_info': related_info, 'themes' : themes})
    else:
        return HttpResponseRedirect('/logar/')

def paineis_detail(request, pk):
    dash = Paineis.objects.get(pk=pk)
    mykeywords = dash.keywords.all()
    myparent = dash.subject.all()
    related = Subject_detail.objects.filter(subject=myparent)
    related_dashs = SimpleDashboard.objects.filter(subject=myparent)
    related_info = Post.objects.filter(subject=myparent)
    mytabs = dash.tabpaineis_set.all().order_by('id')
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    return render(request, 'avec/paineis_detail.html', {'dash': dash, 'mykeywords' : mykeywords, 'mytabs' : mytabs, 'myparent' : myparent, 'related' : related, 'related_dashs' : related_dashs, 'related_info': related_info, 'themes' : themes})


def post_detail(request, pk):

    groups = request.user.groups.all()
    group_user = utils.get_greater_group(groups)

    post = Post.objects.get(pk=pk)
    request.session['next'] = '/post/'+pk

    if groups:
        post_permission = utils.post_permission(group_user.id, post)
    else:
        post_permission = False


    if post_permission:
        mykeywords = post.keywords.all()
        myparent = post.subject.all()
        related = Subject_detail.objects.filter(subject=myparent)
        related_dashs = SimpleDashboard.objects.filter(subject=myparent)
        related_info = Post.objects.filter(subject=myparent)
        themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
        return render(request, 'avec/post_detail.html', {'post': post, 'mykeywords' : mykeywords, 'myparent' : myparent, 'related' : related , 'related_dashs' : related_dashs, 'related_info': related_info, 'themes' : themes})
    else:
        #return HttpResponsePermanentRedirect("/permissao/")
        return HttpResponseRedirect('/logar/')

def reports_detail(request, pk):
    report = Reports.objects.get(pk=pk)
    myparent = report.subject.all()
    return render(request, 'avec/reports_detail.html', {'report': report, 'myparent': myparent})


def subject_detail(request, pk):
    mysubject = Subject.objects.get(pk=pk)
    mykeywords = mysubject.keywords.all()
    mysubdetail = mysubject.subject_detail_set.all()
    posts = Post.objects.filter(published_date__lte=timezone.now()).filter(subject=mysubject).order_by('published_date').reverse()
    dashboards = Dashboard.objects.filter(published_date__lte=timezone.now()).filter(subject=mysubject).order_by('published_date').reverse()
    simpledash = SimpleDashboard.objects.filter(subject=mysubject).order_by('published_date').reverse()
    paineis = Paineis.objects.filter(subject=mysubject).order_by('published_date').reverse()
    reports  = Reports.objects.filter(published_date__lte=timezone.now()).filter(subject=mysubject).order_by('published_date').reverse()
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    return render(request, 'avec/subjects_detail.html', {'posts': posts, 'dashboards': dashboards, 'mysubject': mysubject, 'mykeywords': mykeywords, 'mysubdetail': mysubdetail, 'reports': reports, 'simpledash': simpledash, 'paineis': paineis, 'themes': themes})

def subsubject_detail(request, pk):
    mysubject = Subject_detail.objects.get(pk=pk)
    posts = Post.objects.filter(published_date__lte=timezone.now()).filter(subject_detail=mysubject).order_by('published_date').reverse()
    dashboards = Dashboard.objects.filter(published_date__lte=timezone.now()).filter(subject_detail=mysubject).order_by('published_date').reverse()
    myparent = mysubject.subject.subject_detail_set.all()
    simpledash = SimpleDashboard.objects.filter(subject_detail=mysubject).order_by('published_date').reverse()
    paineis = Paineis.objects.filter(subject_detail=mysubject).order_by('published_date').reverse()
    reports = Reports.objects.filter(subject_detail=mysubject).order_by('published_date').reverse()
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    return render(request, 'avec/subsubjects_detail.html', {'mysubject': mysubject, 'posts': posts, 'dashboards': dashboards , 'myparent': myparent, 'simpledash': simpledash, 'reports': reports, 'paineis': paineis, 'themes' : themes})

def keywords_detail(request, pk):
    mykeywords = Keywords.objects.get(pk=pk)
    posts = Post.objects.filter(published_date__lte=timezone.now()).filter(keywords=mykeywords).order_by('published_date')
    dashboards = Dashboard.objects.filter(published_date__lte=timezone.now()).filter(keywords=mykeywords).order_by('published_date')
    simpledash = SimpleDashboard.objects.filter(keywords=mykeywords).order_by('published_date').reverse()
    paineis = Paineis.objects.filter(keywords=mykeywords).order_by('published_date').reverse()
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    return render(request, 'avec/keywords.html', {'mykeywords': mykeywords, 'posts': posts, 'dashboards': dashboards, 'themes' : themes, 'simpledash' : simpledash, 'paineis' : paineis})

# pagina de cadastro de cliente
def registrar(request):

    # Se dados forem passados via POST
    if request.method == 'POST':
        form = UserCreationForm(request.POST)

        if form.is_valid(): # se o formulario for valido

            return render(request, "avec/logar.html", {"form": form})
        else:
            # mostra novamente o formulario de cadastro com os erros do formulario atual
            return render(request, "registrar.html", {"form": form})

    # se nenhuma informacao for passada, exibe a pagina de cadastro com o formulario
    return render(request, "avec/registrar.html", {"form": UserCreationForm() })


# pagina de login do jogador
def logar(request):
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()

    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST) # Veja a documentacao desta funcao

            #se o formulario for valido significa que o Django conseguiu encontrar o usuario no banco de dados
            #agora, basta logar o usuario e ser feliz.
        if form.is_valid():
            login(request, form.get_user())
            #next = request.session.get('next', None)
            #if next:
                # See caution note below!
            #    return redirect(next)
            #else:
            return redirect('/')
        else:
            return render(request, "avec/logar.html", {"form": form})

    #se nenhuma informacao for passada, exibe a pagina de login com o formulario
    return render(request, "avec/logar.html", {"form": AuthenticationForm(), 'themes': themes})

def logout(request):
    request.session.items = []
    request.session.modified = True
    logout(request)

def assuntos(request):

    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('title')
    subject = Subject.objects.filter(published_date__lte=timezone.now()).order_by('title')
    return render(request, 'avec/assuntos.html', {'subject': subject, 'themes': themes})

def servicos(request):
    return render(request, 'avec/servicos.html')

def produtos(request):
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    return render(request, 'avec/produtos.html', {'themes': themes})

def quemsomos(request):
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    return render(request, 'avec/quemsomos.html', {'themes': themes})

def dashboard(request):
	dashboards = Dashboard.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
	return render(request, 'avec/dashboards.html', {'dashboards': dashboards})

def autocomplete(request):
    return render(request, 'avec/autocomplete.html')

@csrf_exempt
def lista(request):

    resultado_json = {}

    if request.method == 'POST':

        #print("accesskey "+str(request.POST.get('query')))
        #posts = Post.objects.filter(Q(title__icontains=str(request.POST.get('query')))|Q(text__icontains=str(request.POST.get('query')))).order_by('published_date')
        #subjects = Subject.objects.filter(Q(title__icontains=str(request.POST.get('query')))|Q(text__icontains=str(request.POST.get('query')))).order_by('published_date')
        posts = Post.objects.filter(title__unaccent__icontains=str(request.POST.get('query'))).order_by('published_date')
        subjects = Subject.objects.filter(title__unaccent__icontains=str(request.POST.get('query'))).order_by('published_date')
        reports = Reports.objects.filter(title__unaccent__icontains=str(request.POST.get('query'))).order_by('published_date')
        simpledashboards = SimpleDashboard.objects.filter(title__unaccent__icontains=str(request.POST.get('query'))).order_by('published_date')
        paineis = Paineis.objects.filter(title__unaccent__icontains=str(request.POST.get('query'))).order_by('published_date')
        dashboards = Dashboard.objects.filter(title__unaccent__icontains=str(request.POST.get('query'))).order_by('published_date')
        keywords = Keywords.objects.filter(title__unaccent__icontains=str(request.POST.get('query'))).order_by('title')

        posts_data = []

        for post in posts:
            posts_data.append({ "value": post.title, "id" : post.id , "type": "post"})

        dashboards_data = []

        for dashboard in dashboards:
            dashboards_data.append({ "value": dashboard.title, "id" : dashboard.url , "type": "dashboard"})

        simpledashboards_data = []

        for simpledashboard in simpledashboards:
            simpledashboards_data.append({ "value": simpledashboard.title, "id" : simpledashboard.id , "type": "simpledashboard"})

        paineis_data = []

        for painel in paineis:
            paineis_data.append({ "value": painel.title, "id" : painel.id , "type": "painel"})

        subjects_data = []

        for subject in subjects:
            subjects_data.append({ "value": subject.title, "id" : subject.id , "type": "subject"})

        reports_data = []

        for report in reports:
            reports_data.append({ "value": report.title, "id" : report.id , "type": "report"})

        keywords_data = []

        for keyword in keywords:
            keywords_data.append({ "value": keyword.title, "id" : keyword.id , "type": "keyword"})

        result = posts_data+dashboards_data+subjects_data+reports_data+simpledashboards_data+paineis_data+keywords_data
        response = {"query": "Unit", "suggestions": result}
        resultado_json = json.loads(json.dumps(response))

    #print(json.dumps(resultado_json, indent=4, sort_keys=True))

    return JsonResponse(resultado_json, safe=False)

def contact(request):

    form = ContactForm(request.POST or None)

    success = False

    if form.is_valid():

        name = form.cleaned_data['name']
        email = form.cleaned_data['email']
        message = form.cleaned_data['message']
        phone = form.cleaned_data['phone']
        uf = form.cleaned_data['uf']

#         content_message = '<!-- [if gte mso 9]><style>.elemento_com_webfont { font-family: Arial, sans-serif !important; }</style><![endif]-->'
        content_message = '<font face="Helvetica, Arial, sans-serif" size="2" color="#000000"><div>################ <strong>AVECDATA - PLATAFORMA DE DADOS SETORIAIS</strong> ################ <br><br>'
        content_message += 'O Usuário abaixo: <br>Nome: {0}<br>E-mail: {1}<br>Telefone: {3}<br>UF: {4}<br>Nos enviou a seguinte mensagem de contato: <br>'.format(name, email, message, phone, uf)
        content_message += '-------------------------------------------------------------------------<br>'
        content_message += '{2}<br></div></font>'.format(name, email, message, phone, uf)

        form.send_mail(content_message)
        success = True
        messages.success(request, 'Mensagem enviada com sucesso!')
        return HttpResponseRedirect(reverse('contact', args=[]))
    elif request.method == 'POST':
        messages.error(request, 'Formulário inválido')

    context = {
        'form': form,
        'success': success
    }

    return render(request, 'avec/contact.html', context)

def terms_conditions(request):

    return render(request, 'avec/terms_conditions.html')

def privacy_statement(request):

    return render(request, 'avec/privacy_statement.html')

def nescon(request):
        return render(request, 'avec/dashboards/nescon.html')

#def client(request, client):
#    view_client = View_Client.objects.filter(nickname=client)
#    view_themes = View_Themes.objects.filter(published_date__lte=timezone.now()).filter(client=view_client).order_by('published_date')
#    view_subject = View_Subject.objects.filter(published_date__lte=timezone.now()).filter(theme__in=view_themes).order_by('title').reverse()
#    view_subject_detail = View_Subject_detail.objects.filter(published_date__lte=timezone.now()).filter(subject__in=view_subject).order_by('title')
#    mytabs = View_tabSimple.objects.filter(View_Subject_detail__in=view_subject_detail)
#    return render(request, 'avec/dashboards/padrao1.html', {'view_client' : view_client ,'view_subject': view_subject, 'view_subject_detail': view_subject_detail, 'view_themes': view_themes, 'mytabs' : mytabs})

def client2(request, client):
    view_client = View_Client.objects.filter(nickname=client)
    view_themes = View_Themes.objects.filter(published_date__lte=timezone.now()).filter(client=view_client).order_by('published_date')
    view_subject = View_Subject.objects.filter(published_date__lte=timezone.now()).filter(theme__in=view_themes).order_by('title').reverse()
    view_subject_detail = View_Subject_detail.objects.filter(published_date__lte=timezone.now()).filter(subject__in=view_subject).order_by('title')
    mytabs = View_tabSimple.objects.filter(View_Subject_detail__in=view_subject_detail)
    return render(request, 'avec/dashboards/hemocentro.html', {'view_client' : view_client ,'view_subject': view_subject, 'view_subject_detail': view_subject_detail, 'view_themes': view_themes, 'mytabs' : mytabs})

def client(request, client):
    view_client = View_Client.objects.filter(nickname=client)
    view_themes = View_Themes.objects.filter(published_date__lte=timezone.now()).filter(client=view_client).order_by('published_date')
    view_subject = View_Subject.objects.filter(published_date__lte=timezone.now()).filter(theme__in=view_themes).order_by('title').reverse()
    view_subject_detail = View_Subject_detail.objects.filter(published_date__lte=timezone.now()).filter(subject__in=view_subject).order_by('title')
    mytabs = View_tabSimple.objects.filter(View_Subject_detail__in=view_subject_detail)
    return render(request, 'avec/dashboards/client.html', {'view_client' : view_client ,'view_subject': view_subject, 'view_subject_detail': view_subject_detail, 'view_themes': view_themes, 'mytabs' : mytabs})

def padrao2(request):
    deputado = v_emendas_autor.objects.filter(nome_abrev=nome_abrev)
    return render(request, 'avec/dashboards/padrao2.html', {'deputado' : deputado})

def chartit(_):
    city='Brasil'
    filtro=12
    ds = DataPool(
        series=[{
            'options': {
                'source': Price.objects.filter()
            },
            'terms': [
                'pvalue',
                'country_name',
                'country_slug'
            ]
        }]
    )

    def monthname(month_num):
        names = {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
                 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'}
        return names[month_num]

    chart_1 = Chart(
        datasource=ds,
        series_options=[{
            'options': {
                'type': 'line',
                'stacking': False,
            },
            'terms': {
                'country_name' : [
                    'pvalue'
                ]
            }
        }],
      chart_options =
        {'chart':{
            'backgroundColor': '#FFFFFF',
            'borderWidth': 0,
            'title': {
                'text': 'Actual versus Wx Adjusted Production Data'}},
         'subtitle': {
            'text': 'eport_range'},
         'credits': {
            'enabled': False},
         'xAxis': {
            'title': {
                'text': 'Group:Sites'}}
        },
        #x_sortf_mapf_mts=(None, country_name, False)
        )

    chart_2 = Chart(
        datasource=ds,
        series_options=[{
            'options': {
                'type': 'bar',
                'stacking': False,
            },
            'terms': {
                'country_name' : [
                    'pvalue'
                ]
            }
        }],
      chart_options =
        {'chart':{
            'backgroundColor': '#FFFFFF',
            'borderWidth': 0,
            'title': {
                'text': 'Actual versus Wx Adjusted Production Data'}},
         'subtitle': {
            'text': 'eport_range'},
         'credits': {
            'enabled': False},
         'xAxis': {
            'title': {
                'text': 'Group:Sites'}}
        },
        #x_sortf_mapf_mts=(None, country_name, False)
        )

    return render_to_response('avec/dashboards/chartit.html', {'chart_list': [chart_1, chart_2] })
    #return render(request, 'avec/dashboards/chartit.html',
#                 {
#                    'charts' : [chart_1, chart_2],
#                 }
#             )


def comparaestados(request):
        return render(request, 'avec/dashboards/comparaestados.html')

@login_required(login_url='/permissao/')
def leptospirose(request, dashboard_id):

    groups = request.user.groups.all()
    group_user = utils.get_greater_group(groups)

    dashboard = Dashboard.objects.get(id=dashboard_id)

    dsh_permission = utils.dashboard_permission(group_user.id, dashboard)

    if dsh_permission:

        return render(request, 'avec/dashboards/leptospirose.html')
    else:
        return render(request,'avec/permissao.html')

@login_required(login_url='/permissao/')
def aids(request, dashboard_id):

    groups = request.user.groups.all()
    group_user = utils.get_greater_group(groups)

    dashboard = Dashboard.objects.get(id=dashboard_id)

    dsh_permission = utils.dashboard_permission(group_user.id, dashboard)

    if dsh_permission:
        return render(request, 'avec/dashboards/aids.html')
    else:
        return render(request,'avec/permissao.html')

@login_required(login_url='/permissao/')
def sangue(request, dashboard_id):

    groups = request.user.groups.all()
    group_user = utils.get_greater_group(groups)

    dashboard = Dashboard.objects.get(id=dashboard_id)

    dsh_permission = utils.dashboard_permission(group_user.id, dashboard)

    if dsh_permission:
        return render(request, 'avec/dashboards/sangue.html')
    else:
        return render(request,'avec/permissao.html')

@login_required(login_url='/permissao/')
def brasilia2060(request, dashboard_id):

    groups = request.user.groups.all()
    group_user = utils.get_greater_group(groups)

    dashboard = Dashboard.objects.get(id=dashboard_id)

    dsh_permission = utils.dashboard_permission(group_user.id, dashboard)

    if dsh_permission:
        return render(request, 'avec/dashboards/brasilia2060.html')
    else:
        return render(request,'avec/permissao.html')


@login_required(login_url='/permissao/')
def inovacao(request, dashboard_id):

    groups = request.user.groups.all()
    group_user = utils.get_greater_group(groups)
    dashboard = Dashboard.objects.get(id=dashboard_id)

    dsh_permission = utils.dashboard_permission(group_user.id, dashboard)


    if dsh_permission:
        return render(request, 'avec/dashboards/inovacao.html')
    else:
        return render(request,'avec/permissao.html')

@login_required(login_url='/permissao/')
def nascidosvivos(request, dashboard_id):

    groups = request.user.groups.all()
    group_user = utils.get_greater_group(groups)

    dashboard = Dashboard.objects.get(id=dashboard_id)
    dsh_permission = utils.dashboard_permission(group_user.id, dashboard)

    if dsh_permission:
        return render(request, 'avec/dashboards/nascidosvivos.html')
    else:
        return render(request,'avec/permissao.html')

def permissao(request):
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()

    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST) # Veja a documentacao desta funcao

            #se o formulario for valido significa que o Django conseguiu encontrar o usuario no banco de dados
            #agora, basta logar o usuario e ser feliz.
        if form.is_valid():
            login(request, form.get_user())
            next = request.session.get('next', None)
            if next:
                # See caution note below!
                return redirect(next)
            else:
                return redirect('/')
        else:
            return render(request, "avec/permissao.html", {"form": form})

    #se nenhuma informacao for passada, exibe a pagina de login com o formulario
    return render(request, "avec/permissao.html", {"form": AuthenticationForm(), 'themes': themes})

# @receiver(user_logged_in, dispatch_uid = 'facebook.connect')
def social_login_avec_profile(sociallogin, user, **kwargs):

    preferred_avatar_size_pixels=256

#     picture_url = "http://www.gravatar.com/avatar/{0}?s={1}".format(
#         hashlib.md5(user.email.encode('UTF-8')).hexdigest(),
#         preferred_avatar_size_pixels
#     )

#     pprint (vars(sociallogin))

    if sociallogin:
        # Extract first / last names from social nets and store on User record
#         if sociallogin.account.provider == 'twitter':
#             name = sociallogin.account.extra_data['name']
#             user.first_name = name.split()[0]
#             user.last_name = name.split()[1]

        if sociallogin.account.provider == 'facebook':
            f_name = sociallogin.account.extra_data['first_name']
            l_name = sociallogin.account.extra_data['last_name']
            email = sociallogin.account.extra_data['email']
            if f_name:
                user.first_name = f_name
            if l_name:
                user.last_name = l_name

            #verified = sociallogin.account.extra_data['verified']
            picture_url = "http://graph.facebook.com/{0}/picture?width={1}&height={1}".format(
                sociallogin.account.uid, preferred_avatar_size_pixels)

        if sociallogin.account.provider == 'google':
            f_name = sociallogin.account.extra_data['given_name']
            l_name = sociallogin.account.extra_data['family_name']
            if f_name:
                user.first_name = f_name
            if l_name:
                user.last_name = l_name
            #verified = sociallogin.account.extra_data['verified_email']
            picture_url = sociallogin.account.extra_data['picture']

@login_required
def redirect_socialapp(request):

    User = get_user_model()

    user_logged = request.user
    user_social_logged = User.objects.get(id=user_logged.id)

    social_ac = SocialAccount.objects.get(user_id=user_logged.id)

    if(social_ac is not None):
        if((social_ac.provider == 'facebook') and (user_logged.is_from_socialnetwork == False)):

            img_size_pixels=256
            picture_url = "http://graph.facebook.com/{0}/picture?width={1}&height={1}".format(social_ac.extra_data['id'], img_size_pixels)

            user_social_logged.name = social_ac.extra_data['name']
            user_social_logged.is_from_socialnetwork = True
            user_social_logged.imgprofile = picture_url
            user_social_logged.gender = 'M' if social_ac.extra_data['gender'] == 'male' else 'F'

            user_social_logged.save()

        elif((social_ac.provider == 'google') and (user_logged.is_from_socialnetwork == False)):

            user_social_logged.name = social_ac.extra_data['name']
            user_social_logged.email = social_ac.extra_data['email']
            user_social_logged.is_from_socialnetwork = True
            user_social_logged.imgprofile = social_ac.extra_data['picture']

            user_social_logged.save()

#     print('teste---------------------0'+social_ac.extra_data['email'])
#     print(social_ac)
    next = request.session.get('next', None)
    if next:
        # See caution note below!
        return HttpResponseRedirect(next)
    else:
        return HttpResponseRedirect('/')

    #return HttpResponseRedirect("/")

class AccountAdapter(DefaultAccountAdapter):

    def get_login_redirect_url(self, request):
        return '/redirect-socialapp/'

class SocialAccountAdapter(DefaultSocialAccountAdapter):

    def pre_social_login(self, request, sociallogin):
        email_address = sociallogin.account.extra_data['email']
        User = get_user_model()
        user_logged = []

        try:
            user_logged = User.objects.get(email=email_address)
        except Exception as e:
            print('Social Login Exception: on avec.views '+str(e))

#         print(user_logged)
#
        if user_logged:
            perform_login(request, user_logged, email_verification='optional')
        else:
            get_adapter(request).save_user(request, sociallogin, form=None)
            return complete_signup(request, sociallogin.user, 'optional', sociallogin.get_redirect_url(request), signal_kwargs={'sociallogin': sociallogin})

#         print('teste---------------------------')
        raise ImmediateHttpResponse(redirect(settings.LOGIN_REDIRECT_URL.format(id=request.user.id)))

def deputado(request, nome_abrev):
    deputado = v_emendas_autor.objects.filter(nome_abrev=nome_abrev)
    emendas = v_emendas_emendas.objects.filter(cod_autor=deputado).order_by('cod_emenda')[:5]
    v_emendas_parlamentar_por_orgao
    city='Brasil'
    filtro=12
    ds = DataPool(
        series=[{
            'options': {
                'source': v_emendas_emendas.objects.filter(cod_autor=deputado).filter(cod_orgao=22000)
            },
            'terms': [
                'cod_autor',
                'nom_orgao',
                'val_acrec'
            ]
        }]
    )
    ds2 = DataPool(
        series=[{
            'options': {
                'source': v_emendas_parlamentar_por_orgao.objects.filter(cod_autor=deputado)
            },
            'terms': [
                'cod_autor',
                'nom_orgao',
                'num_emendas'
            ]
        }]
    )


    def monthname(month_num):
        names = {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
                 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'}
        return names[month_num]

    chart_1 = Chart(
        datasource=ds,
        series_options=[{
            'options': {
                'type': 'line',
                'stacking': False,
                'color' : '#3dc1d0',
            },
            'terms': {
                'nom_orgao' : [
                    'val_acrec'
                ]
            }
        }],
      chart_options =
        {'chart':{
            #'backgroundColor': '#FFFFFF',
        'borderWidth': 0,
        },
        'title': {
            'text': 'Valor das emendas do Min. da Agricultura'},
         'subtitle': {
            'text': 'valor por emenda ao longo do tempo'},
         'credits': {
            'enabled': False},
         'xAxis': {
            'title': {
                'text': 'Período'}},
        'yAxis': {
           'title': {
               'text': 'Valor Acrescido'}}
        },
        #x_sortf_mapf_mts=(None, country_name, False)
        )

    chart_2 = Chart(
        datasource=ds2,
        series_options=[{
            'options': {
                'type': 'bar',
                'stacking': False,
                'color' : '#3dc1d0',
            },
            'terms': {
                'nom_orgao' : [
                    'num_emendas'
                ]
            }
        }],
      chart_options =
        {'chart':{
        'backgroundColor': '#FFFFFF',
        'borderWidth': 0,
            },
        'title': {
            'text': 'Número de emendas por Orgão'
        },
         'subtitle': {
            'text': 'emendas do parlamentar no período'},
        'xAxis': {
            'title': {
                'text': 'Orgão'
            },
            'tickInterval': 1
        },
        'yAxis': {
            'title': {
                'text': 'N. de emendas'
            },
            'tickInterval': 1
        },
         'credits': {
            'enabled': False},

        },
        x_sortf_mapf_mts=(None, None, False)
        )

    return render(request, 'avec/deputado.html', {'deputado': deputado, 'emendas' : emendas, 'chart_list': [chart_1, chart_2]})

def emenda(request, cod_emenda):
    emendas = v_emendas_emendas.objects.filter(cod_emenda=cod_emenda)
    emenda_proposta = v_emendas_emenda_proposta.objects.values_list('id_proposta_id', flat=True).filter(cod_emenda=cod_emenda)
    proposta = v_emendas_proposta.objects.filter(id_proposta__in=emenda_proposta)

    page = request.GET.get('page', 1)

    paginator = Paginator(proposta, 3)
    try:
        users = paginator.page(page)
    except PageNotAnInteger:
        users = paginator.page(1)
    except EmptyPage:

        users = paginator.page(paginator.num_pages)
    return render(request, 'avec/emenda.html', {'emendas' : emendas, 'proposta' : proposta})

def lista_deputados(request):
    deputado = v_emendas_autor.objects.all().order_by('nome_parlamentar')
    partido = v_emendas_autor.objects.values('partido').distinct().order_by('partido')

    return render(request, 'avec/lista_deputado.html', {'deputado' : deputado, 'partido': partido})

def cidade(request, cd_municipio):
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=cd_municipio)
    entidade = pgf_entidade.objects.filter(cd_municipio=cd_municipio)

    return render(request, 'avec/fns/index.html', {'cidade': cidade, 'entidade': entidade})

#def teto(request):
    #int_cnpj = s = str(int(cnpj))
    #entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    #list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    #cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
#    return render(request, 'avec/fns/teto-financeiro.html')

def pgf(request, cd_municipio):
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=cd_municipio)
    entidade = pgf_entidade.objects.filter(cd_municipio=cd_municipio)
    gis = pgf_municipio_gis.objects.filter(cd_municipio__startswith=cd_municipio)
    v_pgf_municipio_saude.objects.filter(cd_municipio=cd_municipio)
    city='Brasil'
    filtro=12
    ds = DataPool(
            series=[{
                'options': {
                    'source': v_pgf_municipio_saude.objects.filter(cd_municipio=cd_municipio)
                },
                'terms': [
                    'ano',
                    'numero'
                ]
            }]
    )

    chart_1 = Chart(
            datasource=ds,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'ano': [
                        {'numero': {
                            'color' : '#2D8D98',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }}
                    ]
                }
            }],
            chart_options={
                'title': {
                    'text': '1994 À 2015',
                    'style': {
                        'fontSize': '14px',
                    }
                },

                'xAxis': {
                    'title': {
                        'text': 'Ano'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'Nascidos Vivos'
                    }
                }
            }
    )

    return render(request, 'avec/fns/index.html', {'cidade': cidade, 'entidade': entidade, 'gis' : gis, 'chart_list': [chart_1] })

def teto(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(ano='2018').filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']
    return render(request, 'avec/fns/teto-financeiro.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'max_repasse' : max_repasse, 'max_producao' : max_producao})

def teto_producao_procedimento(request, cd_acao):
    acao = pgf_acao_datasus_detalhe.objects.filter(cd_acao=cd_acao)
    acao_first = pgf_acao_datasus_detalhe.objects.values('cd_acao').filter(cd_acao=cd_acao).first()
    acao_first = re.sub('[^0-9]+', '', str(acao_first))
    parent = pgf_acao_datasus.objects.filter(cd_acao=acao_first)
    cnpj = pgf_acao_datasus_detalhe.objects.values('cnpj').filter(cd_acao=cd_acao).first()
    cnpj = cnpj.__str__()
    cnpj = re.sub('[^0-9a]+', '', str(cnpj))
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    cod_subgrupo = pgf_acao_datasus_detalhe.objects.values('subgrupo').filter(cd_acao=cd_acao).first()
    cod_subgrupo = re.sub('[^0-9a]+', '', str(cod_subgrupo))
    subgrupo = pgf_acao_datasus.objects.values('desc_subgrupo').filter(subgrupo=cod_subgrupo).first()

    return render(request, 'avec/fns/teto_producao_procedimento.html', {'acao' : acao, 'cidade' : cidade, 'entidade' : entidade, 'subgrupo' : subgrupo, 'parent' : parent})

def teto_producao(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    acao = pgf_acao_datasus.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade').order_by('mes')
    grupo_hospitalar = pgf_acao_datasus.objects.filter(cd_acao__in=acao).filter(amb_hosp='Hospitalar').distinct('grupo')
    grupo_ambulatorial = pgf_acao_datasus.objects.filter(cd_acao__in=acao).filter(amb_hosp='Ambulatorial').distinct('grupo')
    acao_filter = AcaoFilterDatasus(request.GET, queryset=acao)

    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']
    view_ambulatorial = v_pgf_ambulatorial.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade')
    view_hospitalar = v_pgf_hospitalar.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade')
    view_total = v_pgf_total.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade')
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)

    ds_ambulatorial = DataPool(
            series=[{
                'options': {
                    'source': view_ambulatorial
                },
                'terms': [
                    'mes',
                    'estadual_plena',
                    'pacto_gestao'
                ]
            }]
    )

    ambulatorial = Chart(
            datasource=ds_ambulatorial,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'estadual_plena': {

                            'color' : '#A5E2E9',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }},
                        {'pacto_gestao': {
                            'color' : '#3DC1D0',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }}
                    ]
                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    ds_hospitalar = DataPool(
            series=[{
                'options': {
                    'source': view_hospitalar
                },
                'terms': [
                    'mes',
                    'estadual_plena',
                    'municipal_plena'
                ]
            }]
    )

    hospitalar = Chart(
            datasource=ds_hospitalar,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'estadual_plena': {

                            'color' : '#A5E2E9',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }},
                        {'municipal_plena': {
                            'color' : '#3DC1D0',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }}
                    ]
                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    ds_total = DataPool(
            series=[{
                'options': {
                    'source': view_total
                },
                'terms': [
                    'mes',
                    'total'
                ]
            }]
    )

    total = Chart(
            datasource=ds_total,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'total': {
                            'color' : '#2D8D98',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }}
                    ]

                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    return render(request, 'avec/fns/teto_producao.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'filter' : acao_filter, 'acao' : acao, 'grupo_hospitalar' : grupo_hospitalar, 'grupo_ambulatorial' : grupo_ambulatorial, 'chart_list': [ambulatorial, hospitalar, total], 'max_repasse' : max_repasse, 'max_producao' : max_producao })

def teto_pagamento(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).order_by('mes')
    acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)
    acao_filter = AcaoFilter(request.GET, queryset=acao)

    view_total = v_pgf_repasse_teto.objects.filter(cnpj=cnpj)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(ano='2018').filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']


    ds_total = DataPool(
            series=[{
                'options': {
                    'source': view_total
                },
                'terms': [
                    'mes',
                    'total'
                ]
            }]
    )

    total = Chart(
            datasource=ds_total,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'total': {

                            'color' : '#2D8D98',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }}
                    ]
                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    return render(request, 'avec/fns/teto_pagamento.html', {'int_cnpj' : int_cnpj,'acao': acao, 'acao_detalhe': acao_detalhe, 'cidade' : cidade, 'filter' : acao_filter,'entidade' : entidade, 'chart_list': [total], 'max_repasse' : max_repasse, 'max_producao' : max_producao } )

def teto_analise(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    acao_datasus = pgf_acao_datasus.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade').order_by('mes')
    acao_pagamento = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).order_by('mes')
    datasus_filter = AcaoFilterDatasus(request.GET, queryset=acao_datasus)
    pagamento_filter = AcaoFilter(request.GET, queryset=acao_pagamento)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["33403","33406","33375","33376","33405","33399","33386","33391","33371","50699","33394","33393","61659"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(tipo__startswith='Média e Alta Complexidade').aggregate(Max('mes'))['mes__max']

    view_total = v_pgf_analise_teto.objects.filter(cd_municipio=cd_municipio)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)

    ds_total = DataPool(
            series=[{
                'options': {
                    'source': view_total
                },
                'terms': [
                    'mes',
                    'total_repasse',
                    'total_producao',
                    'analise'
                ]
            }]
    )

    total = Chart(
            datasource=ds_total,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                      'states': {
                          'hover': {
                              'lineWidth': 4
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'total_producao': {

                            'color' : '#A5E2E9',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }},
                        {'total_repasse': {
                            'color' : '#3DC1D0',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }},
                        {'analise': {
                            'color' : '#2D8D98',
                            'lineWidth' : 3,
                            'marker': {
                                'symbol': 'square'
                            }

                                }}
                    ]
                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    return render(request, 'avec/fns/teto_analise.html', {'int_cnpj' : int_cnpj,'acao_datasus': acao_datasus, 'acao_pagamento': acao_pagamento, 'cidade' : cidade, 'entidade' : entidade, 'pagamento_filter' : pagamento_filter, 'datasus_filter' : datasus_filter,'entidade' : entidade, 'chart_list': [total] , 'max_repasse' : max_repasse, 'max_producao' : max_producao } )

def faec(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["44558","39898","31478","20527","28650","16530","14334","14331","14322","28649","14316","37943","15505","14345","14333","14329","14330","14321","31515","31514","156","37941","62087","62104","62085","62089","62010","14508","29491","62083","57298","28609","62678","62081","62085","14310","14508","57298","44597","62010","27547","262","62089","28609","29491","62083"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(ano='2018').filter(tipo__startswith='Fundo de Ações Estratégicas e Compensações (FAEC)').aggregate(Max('mes'))['mes__max']

    return render(request, 'avec/fns/faec.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'max_repasse' : max_repasse, 'max_producao' : max_producao})

def faec_producao_procedimento(request, cd_acao):
    acao = pgf_acao_datasus_detalhe.objects.filter(cd_acao=cd_acao)
    acao_first = pgf_acao_datasus_detalhe.objects.values('cd_acao').filter(cd_acao=cd_acao).first()
    acao_first = re.sub('[^0-9]+', '', str(acao_first))
    parent = pgf_acao_datasus.objects.filter(cd_acao=acao_first)
    cnpj = pgf_acao_datasus_detalhe.objects.values('cnpj').filter(cd_acao=cd_acao).first()
    cnpj = cnpj.__str__()
    cnpj = re.sub('[^0-9a]+', '', str(cnpj))
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    cod_subgrupo = pgf_acao_datasus_detalhe.objects.values('subgrupo').filter(cd_acao=cd_acao).first()
    cod_subgrupo = re.sub('[^0-9a]+', '', str(cod_subgrupo))
    subgrupo = pgf_acao_datasus.objects.values('desc_subgrupo').filter(subgrupo=cod_subgrupo).first()

    return render(request, 'avec/fns/faec_producao_procedimento.html', {'acao' : acao, 'cidade' : cidade, 'entidade' : entidade, 'subgrupo' : subgrupo, 'parent' : parent})

def faec_producao(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    acao = pgf_acao_datasus.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Fundo de Ações Estratégicas e Compensações (FAEC)').order_by('mes')
    grupo_hospitalar = pgf_acao_datasus.objects.filter(cd_acao__in=acao).filter(amb_hosp='Hospitalar').distinct('grupo')
    grupo_ambulatorial = pgf_acao_datasus.objects.filter(cd_acao__in=acao).filter(amb_hosp='Ambulatorial').distinct('grupo')
    acao_filter = AcaoFilterDatasus(request.GET, queryset=acao)

    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["44558","39898","31478","20527","28650","16530","14334","14331","14322","28649","14316","37943","15505","14345","14333","14329","14330","14321","31515","31514","156","37941","62087","62104","62085","62089","62010","14508","29491","62083","57298","28609","62678","62081","62085","14310","14508","57298","44597","62010","27547","262","62089","28609","29491","62083"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(tipo__startswith='Fundo de Ações Estratégicas e Compensações (FAEC)').aggregate(Max('mes'))['mes__max']

    view_ambulatorial = v_pgf_ambulatorial.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Fundo de Ações Estratégicas e Compensações (FAEC)')
    view_hospitalar = v_pgf_hospitalar.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Fundo de Ações Estratégicas e Compensações (FAEC)')
    view_total = v_pgf_total.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Fundo de Ações Estratégicas e Compensações (FAEC)')
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)

    ds_ambulatorial = DataPool(
            series=[{
                'options': {
                    'source': view_ambulatorial
                },
                'terms': [
                    'mes',
                    'estadual_plena',
                    'pacto_gestao'
                ]
            }]
    )

    ambulatorial = Chart(
            datasource=ds_ambulatorial,
            series_options=[{

                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'estadual_plena': {

                            'color' : '#A5E2E9',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }},
                        {'pacto_gestao': {
                            'color' : '#3DC1D0',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }}
                    ]
                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    ds_hospitalar = DataPool(
            series=[{
                'options': {
                    'source': view_hospitalar
                },
                'terms': [
                    'mes',
                    'estadual_plena',
                    'municipal_plena'
                ]
            }]
    )

    hospitalar = Chart(
            datasource=ds_hospitalar,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'estadual_plena': {

                            'color' : '#A5E2E9',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }},
                        {'municipal_plena': {
                            'color' : '#3DC1D0',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }}
                    ]

                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    ds_total = DataPool(
            series=[{
                'options': {
                    'source': view_total
                },
                'terms': [
                    'mes',
                    'total'
                ]
            }]
    )

    total = Chart(
            datasource=ds_total,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'total': {
                            'color' : '#2D8D98',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }}
                    ]
                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    return render(request, 'avec/fns/faec_producao.html', {'int_cnpj' : int_cnpj, 'cidade' : cidade, 'entidade' : entidade, 'filter' : acao_filter, 'acao' : acao, 'grupo_hospitalar' : grupo_hospitalar, 'grupo_ambulatorial' : grupo_ambulatorial, 'chart_list': [ambulatorial, hospitalar, total], 'max_repasse' : max_repasse, 'max_producao' : max_producao })

def faec_pagamento(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["44558","39898","31478","20527","28650","16530","14334","14331","14322","28649","14316","37943","15505","14345","14333","14329","14330","14321","31515","31514","156","37941","62087","62104","62085","62089","62010","14508","29491","62083","57298","28609","62678","62081","62085","14310","14508","57298","44597","62010","27547","262","62089","28609","29491","62083"]).order_by('mes')
    acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)
    acao_filter  = AcaoFilter(request.GET, queryset=acao)

    view_total = v_pgf_repasse_faec.objects.filter(cnpj=cnpj)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["44558","39898","31478","20527","28650","16530","14334","14331","14322","28649","14316","37943","15505","14345","14333","14329","14330","14321","31515","31514","156","37941","62087","62104","62085","62089","62010","14508","29491","62083","57298","28609","62678","62081","62085","14310","14508","57298","44597","62010","27547","262","62089","28609","29491","62083"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(tipo__startswith='Fundo de Ações Estratégicas e Compensações (FAEC)').aggregate(Max('mes'))['mes__max']

    ds_total = DataPool(
            series=[{
                'options': {
                    'source': view_total
                },
                'terms': [
                    'mes',
                    'total'
                ]
            }]
    )

    total = Chart(
            datasource=ds_total,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'total': {
                            'color' : '#2D8D98',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }}
                    ]
                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    return render(request, 'avec/fns/faec_pagamento.html', {'int_cnpj' : int_cnpj,'acao': acao, 'acao_detalhe': acao_detalhe, 'cidade' : cidade, 'filter' : acao_filter,'entidade' : entidade, sum : 'sum', 'chart_list': [total], 'max_repasse' : max_repasse, 'max_producao' : max_producao } )

def faec_analise(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    cd_municipio = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    acao_datasus = pgf_acao_datasus.objects.filter(cd_municipio=cd_municipio).filter(tipo__startswith='Fundo de Ações Estratégicas e Compensações (FAEC)').order_by('mes')
    acao_pagamento = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num__in=["44558","39898","31478","20527","28650","16530","14334","14331","14322","28649","14316","37943","15505","14345","14333","14329","14330","14321","31515","31514","156","37941","62087","62104","62085","62089","62010","14508","29491","62083","57298","28609","62678","62081","62085","14310","14508","57298","44597","62010","27547","262","62089","28609","29491","62083"]).order_by('mes')
    datasus_filter = AcaoFilterDatasus(request.GET, queryset=acao_datasus)
    pagamento_filter = AcaoFilter(request.GET, queryset=acao_pagamento)

    max_repasse = pgf_acao.objects.all().filter(cnpj=cnpj).filter(ano='2018').filter(acao_num__in=["44558","39898","31478","20527","28650","16530","14334","14331","14322","28649","14316","37943","15505","14345","14333","14329","14330","14321","31515","31514","156","37941","62087","62104","62085","62089","62010","14508","29491","62083","57298","28609","62678","62081","62085","14310","14508","57298","44597","62010","27547","262","62089","28609","29491","62083"]).aggregate(Max('mes'))['mes__max']
    max_producao = pgf_acao_datasus.objects.all().filter(cd_municipio=cd_municipio).filter(tipo__startswith='Fundo de Ações Estratégicas e Compensações (FAEC)').aggregate(Max('mes'))['mes__max']

    view_total = v_pgf_analise_faec.objects.filter(cd_municipio=cd_municipio)
    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)

    ds_total = DataPool(
            series=[{
                'options': {
                    'source': view_total
                },
                'terms': [
                    'mes',
                    'total_repasse',
                    'total_producao',
                    'analise'
                ]
            }]
    )

    total = Chart(
            datasource=ds_total,
            series_options=[{
                'options': {
                    'type': 'line',
                    'zoomType': 'x',
                    'stacking': False,
                    'fillColor': {
                        'linearGradient': { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 1},
                        'stops': [
                            [0, 'red'],
                            [1, '#3DC1D0']
                        ]
                    },
                     'color': '#3DC1D0',
                      'marker': {
                        'color': '#3DC1D0',
                          'radius': 1

                      },
                      'lineWidth': 1,
                      'states': {
                          'hover': {
                              'lineWidth': 1
                          }
                      }
                },
                'terms': {
                    'mes': [
                        {'total_producao': {

                            'color' : '#A5E2E9',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }},
                        {'total_repasse': {
                            'color' : '#3DC1D0',
                            'lineWidth': 1,
                            'marker': {
                                'symbol': 'circle'
                            }
                                }},
                        {'analise': {
                            'color' : '#2D8D98',
                            'lineWidth' : 3,
                            'marker': {
                                'symbol': 'square'
                            }

                                }}
                    ]
                }
            }],
            chart_options={
                'title': {
                    'text': 'Últimos meses',
                    'style': {
                        'fontSize': '14px',
                    }
                },
                'tooltip': {
                    'valuePrefix' : 'R$ '
                },
                'xAxis': {
                    'title': {
                        'text': 'mes'
                    }
                },
                'yAxis': {
                    'title': {
                        'text': 'valor'
                    }
                }
            }
    )

    return render(request, 'avec/fns/faec_analise.html', {'int_cnpj' : int_cnpj,'acao_datasus': acao_datasus, 'acao_pagamento': acao_pagamento, 'cidade' : cidade, 'entidade' : entidade, 'pagamento_filter' : pagamento_filter, 'datasus_filter' : datasus_filter,'entidade' : entidade, 'chart_list': [total], 'max_repasse' : max_repasse, 'max_producao' : max_producao  })

def ceo(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    #acao = pgf_acao.objects.filter(cnpj=cnpj).filter(acao_num=30472).order_by('mes')
    #acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)
    acao_detalhe = pgf_acao_detalhe.objects.filter(cnpj=cnpj).filter(acao_num=30472).order_by('dt_ob_date')

    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)

    return render(request, 'avec/fns/ceo.html', {'int_cnpj' : int_cnpj, 'acao_detalhe': acao_detalhe, 'cidade' : cidade, 'entidade' : entidade})

def samu(request, cnpj):
    int_cnpj = s = str(int(cnpj))
    acao_detalhe = pgf_acao_detalhe.objects.filter(cnpj=cnpj).filter(acao_num__in=["30483","62079"])  | pgf_acao_detalhe.objects.filter(cnpj=cnpj).filter(acao_num=30475).order_by('dt_ob_date')
    #acao_detalhe = pgf_acao_detalhe.objects.filter(cd_acao__in=acao)

    entidade = pgf_entidade.objects.filter(cpf_cnpj=cnpj)
    list_entidade = pgf_entidade.objects.values('cd_municipio').filter(cpf_cnpj=cnpj)
    cidade = pgf_municipio.objects.filter(cd_municipio_semdigito=list_entidade)

    return render(request, 'avec/fns/samu.html', {'int_cnpj' : int_cnpj, 'acao_detalhe': acao_detalhe, 'cidade' : cidade, 'entidade' : entidade})

def lista_cidades(request):
    return render(request, 'avec/fns/lista_cidades.html')

@csrf_exempt
def cidades_list(request):

    resultado_json = {}

    if request.method == 'POST':
        entidade = pgf_entidade.objects.values('cd_municipio').filter(sg_uf='BA') | pgf_entidade.objects.values('cd_municipio').filter(sg_uf='RJ') | pgf_entidade.objects.values('cd_municipio').filter(sg_uf='MG') | pgf_entidade.objects.values('cd_municipio').filter(sg_uf='GO')
        municipios = pgf_municipio.objects.filter(nm_municipio__unaccent__icontains=str(request.POST.get('query'))).filter(cd_municipio_semdigito__in=entidade).order_by('nm_municipio')

        municipios_data = []

        for municipio in municipios:
            municipios_data.append({ "value": municipio.nm_municipio, "id" : municipio.cd_municipio_semdigito })


        result = municipios_data
        response = {"query": "Unit", "suggestions": result}
        resultado_json = json.loads(json.dumps(response))

    #print(json.dumps(resultado_json, indent=4, sort_keys=True))

    return JsonResponse(resultado_json, safe=False)

#padrao2
#mapa
def mapa(request):
    return render(request, 'avec/dashboards/padrao2.html')
