# coding=utf-8

from django.conf.urls import include, url

from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^alterar-dados/$', views.update_user, name='update_user'),
    url(r'^alterar-senha/$', views.update_password, name='update_password'),
    url(r'^registro/$', views.register, name='register'),
    url(r'^plano-padrao/$', views.register_standard_plan, name='register_standard_plan'),
    url(r'^plano-profissional/$', views.register_professional_plan, name='register_professional_plan'),
    url(r'^plano-corporativo/$', views.register_corporate_plan, name='register_corporate_plan'),
    url(r'^pagamento/', views.payment, name='payment'),
    url(r'^finalizando/(?P<pk>\d+)/paypal/(?P<num>\d+)$', views.paypal_view, name='paypal_view'),
    url(r'^payment-failed/$', views.payment_failed, name='payment_failed'),
    url(r'^paypal/', include('paypal.standard.ipn.urls')),
    url(r'^preferencias/(?P<pk>\d+)/$', views.preferences_user, name='preferences_user'),
    url(r'^atualizar-plano/$', views.update_subscription, name='update_subscription'),
    url(r'^update-password/$', views.update_password_ws),
    url(r'^reload-password/$', views.reload_password_ws),
    url(r'^ativar-conta/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', views.activate_account, name='activate_account'),
    url(r'^esqueceu-senha/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', views.recovery_password, name='recovery_password'),
]
