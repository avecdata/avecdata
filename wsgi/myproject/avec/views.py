# -*- coding: utf-8 -*-

from django.shortcuts import render, render_to_response, get_object_or_404
from django.utils import timezone
from .models import Post, Subject, Themes, Keywords, Subject_detail, Reports, Price, Order
from accounts.models import User
from django.template import RequestContext
from django.http import HttpResponse, JsonResponse
from django.http import HttpResponseRedirect # Funcao para redirecionar o usuario
from django.contrib.auth.forms import UserCreationForm # Formulario de criacao de usuarios
from django.contrib.auth.forms import AuthenticationForm # Formulario de autenticacao de usuarios
from django.contrib.auth import authenticate, login # funcao que salva o usuario na sessao
from django.views.generic import View, TemplateView, CreateView
from django.core.urlresolvers import reverse_lazy, reverse
from django.conf import settings
import requests, json
from django.db.models import Q
from django.contrib.auth.mixins import LoginRequiredMixin

# adicionados para o formulario de contato c/ envio de email
from .forms import ContactForm
from django.core.mail import EmailMessage
from django.shortcuts import redirect
from django.template import Context
from django.template.loader import get_template
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages


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
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    subject = Subject.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    subject_detail = Subject_detail.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'avec/index.html', {'subject': subject, 'themes': themes, 'subject_detail' : subject_detail, 'posts' : posts})

def ciencia_tecnologia(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'avec/ciencia_tecnologia.html', {'posts': posts})

def registro_civil(request):
    return render(request, 'avec/registro_civil.html')

def retratos_municipais(request):
    return render(request, 'avec/dashboards/retratosmunicipais.html')

def educacao(request):
    return render(request, 'avec/dashboards/educacao.html')

def inovacao(request):
    if request.user.is_authenticated():
        return render(request, 'avec/dashboards/inovacao.html')
    else:
        return render(request,'avec/permissao.html')

def nascidosvivos(request):
    # if request.user.is_authenticated():
        return render(request, 'avec/dashboards/nascidosvivos.html')
    # else:
    #     return render(request,'avec/permissao.html')

def post_detail(request, pk):
    post = Post.objects.get(pk=pk)
    mykeywords = post.keywords.all()
    myparent = post.subject.all()
    related = Subject_detail.objects.filter(subject=myparent)
    return render(request, 'avec/post_detail.html', {'post': post, 'mykeywords' : mykeywords, 'myparent' : myparent, 'related' : related})

def reports_detail(request, pk):
    report = Reports.objects.get(pk=pk)
    myparent = report.subject.subject_detail_set.all()
    return render(request, 'avec/reports_detail.html', {'report': report})

def subject_detail(request, pk):
    mysubject = Subject.objects.get(pk=pk)
    mykeywords = mysubject.keywords.all()
    mysubdetail = mysubject.subject_detail_set.all()
    posts = Post.objects.filter(published_date__lte=timezone.now()).filter(subject=mysubject).order_by('published_date')
    reports  = Reports.objects.filter(published_date__lte=timezone.now()).filter(subject=mysubject).order_by('published_date')
    return render(request, 'avec/subjects_detail.html', {'posts': posts, 'mysubject': mysubject, 'mykeywords': mykeywords, 'mysubdetail': mysubdetail, 'reports': reports})

def subsubject_detail(request, pk):
    mysubject = Subject_detail.objects.get(pk=pk)
    posts = Post.objects.filter(published_date__lte=timezone.now()).filter(subject_detail=mysubject).order_by('published_date')
    myparent = mysubject.subject.subject_detail_set.all()
    return render(request, 'avec/subsubjects_detail.html', {'mysubject': mysubject, 'posts': posts , 'myparent': myparent})

def keywords_detail(request, pk):
    mykeywords = Keywords.objects.get(pk=pk)
    posts = Post.objects.filter(published_date__lte=timezone.now()).filter(keywords=mykeywords).order_by('published_date')
    return render(request, 'avec/keywords.html', {'mykeywords': mykeywords, 'posts': posts})

# pagina de cadastro de cliente
def registrar(request):

    # Se dados forem passados via POST
    if request.method == 'POST':
        form = UserCreationForm(request.POST)

        if form.is_valid(): # se o formulario for valido
            form.save() # cria um novo usuario a partir dos dados enviados
            return render(request, "avec/logar.html", {"form": form})
        else:
            # mostra novamente o formulario de cadastro com os erros do formulario atual
            return render(request, "registrar.html", {"form": form})

    # se nenhuma informacao for passada, exibe a pagina de cadastro com o formulario
    return render(request, "avec/registrar.html", {"form": UserCreationForm() })


# pagina de login do jogador
def logar(request):
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
    return render(request, "avec/logar.html", {"form": AuthenticationForm()})

def logout(request):
    request.session.items = []
    request.session.modified = True
    logout(request)

def assuntos(request):
    
    themes = Themes.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    subject = Subject.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'avec/assuntos.html', {'subject': subject, 'themes': themes})

def servicos(request):
    return render(request, 'avec/servicos.html')

def quemsomos(request):
    return render(request, 'avec/quemsomos.html')	

def dashboard(request):
    return render(request, 'avec/dashboards.html')		

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
        
        posts_data = []
        
        for post in posts:
            posts_data.append({ "value": post.title, "id" : post.id , "type": "post"})
            
        subjects_data = []
        
        for subject in subjects:
            subjects_data.append({ "value": subject.title, "id" : subject.id , "type": "subject"})

        result = posts_data+subjects_data
        response = {"query": "Unit", "suggestions": result}
        resultado_json = json.loads(json.dumps(response))    
    
    #print(json.dumps(resultado_json, indent=4, sort_keys=True))
    
    return JsonResponse(resultado_json, safe=False)

def contact(request):
    
    form = ContactForm(request.POST or None)

    success = False

    if form.is_valid():
        form.send_mail()
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

def padrao1(request):
        return render(request, 'avec/dashboards/padrao1.html')

def padrao2(request):
        return render(request, 'avec/dashboards/padrao2.html')

def padrao3(request):
        return render(request, 'avec/dashboards/padrao3.html')    