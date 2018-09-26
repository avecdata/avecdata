# coding=utf-8

from django.conf.urls import include, url

from . import views


urlpatterns = [
    url(r'^retrato/(?P<cd_municipio>.+)/$', views.retrato, name='retrato'),
    url(r'^candidato_doacao/(?P<cnpj>.+)/$', views.candidato_doacao, name='candidato_doacao'),
    url(r'^coleta/(?P<cnpj>.+)/$', views.coleta, name='coleta'),
    url(r'^laboratorio/(?P<cnpj>.+)/$', views.laboratorio, name='laboratorio'),
    url(r'^hemocomponentes/(?P<cnpj>.+)/$', views.hemocomponentes, name='hemocomponentes'),
    url(r'^metas/(?P<cnpj>.+)/$', views.metas, name='metas'),
    url(r'^gestao/(?P<cnpj>.+)/$', views.gestao, name='gestao'),
    url(r'^morbidade/(?P<cnpj>.+)/$', views.morbidade, name='morbidade'),
]
