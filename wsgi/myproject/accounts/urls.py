# coding=utf-8

from django.conf.urls import include, url

from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^alterar-dados/$', views.update_user, name='update_user'),
    url(r'^alterar-senha/$', views.update_password, name='update_password'),
    url(r'^registro/$', views.register, name='register'),
    url(r'^plano-profissional/$', views.register_professional_plan, name='register_professional_plan'),
    url(r'^pagamento/', views.payment, name='payment'),
    url(r'^finalizando/(?P<pk>\d+)/paypal/$', views.paypal_view, name='paypal_view'),
    url(r'^payment-failed/$', views.payment_failed, name='payment_failed'),
    url(r'^paypal/$', include('paypal.standard.ipn.urls')),
]
