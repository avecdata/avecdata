# -*- coding: utf-8 -*-

from django.shortcuts import render, render_to_response, get_object_or_404
from django.utils import timezone
from .models import Post, Subject, Themes, Keywords, Subject_detail, Reports, Price, Order, Dashboard, SimpleDashboard, tabSimple, Paineis, tabPaineis
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

    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date').reverse()[:3]
    simpledashs = SimpleDashboard.objects.filter().order_by('-published_date').reverse()[:3]
    panels = Paineis.objects.filter().order_by('-published_date').reverse()[:3]
    return render(request, 'avec/index.html', {'subject': subject, 'themes': themes, 'subject_detail' : subject_detail, 'posts' : posts, 'simpledashs': simpledashs, 'panels': panels})

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
    dash = SimpleDashboard.objects.get(pk=pk)
    mykeywords = dash.keywords.all()
    myparent = dash.subject.all()
    related = Subject_detail.objects.filter(subject=myparent)
    related_dashs = SimpleDashboard.objects.filter(subject=myparent)
    related_info = Post.objects.filter(subject=myparent)
    mytabs = dash.tabsimple_set.all().order_by('id')
    return render(request, 'avec/simpleDash_detail.html', {'dash': dash, 'mykeywords' : mykeywords, 'mytabs' : mytabs, 'myparent' : myparent, 'related' : related, 'related_dashs' : related_dashs, 'related_info': related_info})


def paineis_detail(request, pk):
    dash = Paineis.objects.get(pk=pk)
    mykeywords = dash.keywords.all()
    mytabs = dash.tabpaineis_set.all().order_by('id')
    return render(request, 'avec/paineis_detail.html', {'dash': dash, 'mykeywords' : mykeywords, 'mytabs' : mytabs})

def post_detail(request, pk):

    groups = request.user.groups.all()
    group_user = utils.get_greater_group(groups)

    post = Post.objects.get(pk=pk)

    post_permission = utils.post_permission(group_user.id, post)

    if post_permission:
        mykeywords = post.keywords.all()
        myparent = post.subject.all()
        related = Subject_detail.objects.filter(subject=myparent)
        related_dashs = SimpleDashboard.objects.filter(subject=myparent)
        related_info = Post.objects.filter(subject=myparent)
        return render(request, 'avec/post_detail.html', {'post': post, 'mykeywords' : mykeywords, 'myparent' : myparent, 'related' : related , 'related_dashs' : related_dashs, 'related_info': related_info})
    else:
        return render(request,'avec/permissao.html')

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
    return render(request, 'avec/subjects_detail.html', {'posts': posts, 'dashboards': dashboards, 'mysubject': mysubject, 'mykeywords': mykeywords, 'mysubdetail': mysubdetail, 'reports': reports, 'simpledash': simpledash, 'paineis': paineis})

def subsubject_detail(request, pk):
    mysubject = Subject_detail.objects.get(pk=pk)
    posts = Post.objects.filter(published_date__lte=timezone.now()).filter(subject_detail=mysubject).order_by('published_date').reverse()
    dashboards = Dashboard.objects.filter(published_date__lte=timezone.now()).filter(subject_detail=mysubject).order_by('published_date').reverse()
    myparent = mysubject.subject.subject_detail_set.all()
    simpledash = SimpleDashboard.objects.filter(subject_detail=mysubject).order_by('published_date').reverse()
    paineis = Paineis.objects.filter(subject_detail=mysubject).order_by('published_date').reverse()
    reports = Reports.objects.filter(subject_detail=mysubject).order_by('published_date').reverse()
    return render(request, 'avec/subsubjects_detail.html', {'mysubject': mysubject, 'posts': posts, 'dashboards': dashboards , 'myparent': myparent, 'simpledash': simpledash, 'reports': reports, 'paineis': paineis})

def keywords_detail(request, pk):
    mykeywords = Keywords.objects.get(pk=pk)
    posts = Post.objects.filter(published_date__lte=timezone.now()).filter(keywords=mykeywords).order_by('published_date')
    dashboards = Dashboard.objects.filter(published_date__lte=timezone.now()).filter(keywords=mykeywords).order_by('published_date')
    return render(request, 'avec/keywords.html', {'mykeywords': mykeywords, 'posts': posts, 'dashboards': dashboards})

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

        if form.is_valid():
            #se o formulario for valido significa que o Django conseguiu encontrar o usuario no banco de dados
            #agora, basta logar o usuario e ser feliz.

            login(request, form.get_user())
            return HttpResponseRedirect("/") # redireciona o usuario logado para a pagina inicial
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

        result = posts_data+dashboards_data+subjects_data+reports_data+simpledashboards_data+paineis_data
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

def padrao1(request):
        return render(request, 'avec/dashboards/padrao1.html')

def padrao2(request):
        return render(request, 'avec/dashboards/padrao2.html')

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
    return render(request,'avec/permissao.html')

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

    return HttpResponseRedirect("/")

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
