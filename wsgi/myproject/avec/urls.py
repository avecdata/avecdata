from django.conf.urls import patterns, include, url
from . import views
from accounts import views as ac_views
from . import validators
from django.contrib.auth.views import login, logout

urlpatterns = [
    url(r'^$', views.index, name='index'),
	#url(r'^accounts/', include('allauth.urls')),
    url(r'^ciencia_tecnologia/', views.ciencia_tecnologia, name='ciencia_tecnologia'),
    url(r'^post/(?P<pk>[0-9]+)/$', views.post_detail, name='post_detail'),
    url(r'^subject/(?P<pk>[0-9]+)/$', views.subject_detail, name='subject_detail'),
    url(r'^subsubject/(?P<pk>[0-9]+)/$', views.subsubject_detail, name='subsubject_detail'),
    url(r'^keyword/(?P<pk>[0-9]+)/$', views.keywords_detail, name='keywords_detail'),
    url(r'^report/(?P<pk>[0-9]+)/$', views.reports_detail, name='reports_detail'),
    url(r'^inovacao/$', views.inovacao, name='inovacao'),
    url(r'^permissao/$', views.permissao, name='permissao'),
    url(r'^nascidosvivos/$', views.nascidosvivos, name='nascidosvivos'),
    url(r'^retratosmunicipais/$', views.retratos_municipais, name='retratos_municipais'),	
    url(r'^educacao/$', views.educacao, name='educacao'),
    url(r'^registrar/$', views.registrar, {} ,name='registrar'), # pagina de cadastro
    url(r'^logar/$', views.logar, name='logar'), # login antigo
#     url(r'^entrar/$', login, {'template_name' : 'avec/login.html'} , name='logar'), # novo - manter somente esse quando tiver ok a autenticacao e registro
    url(r'^logout/$', logout, name='logout', kwargs={'next_page': '/'}),	 # novo - manter somente esse quando tiver ok a autenticacao e registro
    url(r'^assuntos/', views.assuntos, name='assuntos'),
    url(r'^servicos/', views.servicos, name='servicos'),
    url(r'^quemsomos/', views.quemsomos, name='quemsomos'),	
    url(r'^themes_list/$', views.lista),	
    url(r'^autocomplete/$', views.autocomplete, name='autocomplete'),		
    url(r'^dashboard/', views.dashboard, name='dashboard'),	
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^conta/', include('accounts.urls', namespace='accounts')),
    url(r'^termos-condicoes-gerais/', views.terms_conditions, name='terms_conditions'),
    url(r'^politica-privacidade/', views.privacy_statement, name='privacy_statement'),
    url(r'^check_email/$', validators.check_email),
    url(r'^check_username/$', validators.check_username),
	url(r'^padrao1/$', views.padrao1, name='padrao1'),
    url(r'^padrao2/$', views.padrao2, name='padrao2'),
    url(r'^padrao3/$', views.padrao3, name='padrao3'),
    url(r'^aids/$', views.aids, name='aids'),
    url(r'^sangue/(?P<dashboard_id>[0-9]+)/$', views.sangue, name='sangue'),
]