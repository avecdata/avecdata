# coding=utf-8
from paypal.standard.forms import PayPalPaymentsForm
from paypal.standard.models import ST_PP_COMPLETED
from paypal.standard.ipn.signals import valid_ipn_received

from django.shortcuts import render, render_to_response, get_object_or_404
from django.views.generic import (CreateView, TemplateView, UpdateView, FormView)
from django.core.urlresolvers import reverse_lazy, reverse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import authenticate, login
from avec.models import Price, Order, Group
from django.utils import timezone

from .models import User
from .forms import UserAdminCreationForm

from django.conf import settings
from django.db.models import Q

class IndexView(LoginRequiredMixin, TemplateView):

    template_name = 'accounts/index.html'
    
# class PaymentView(LoginRequiredMixin, TemplateView):
# 
#     template_name = 'accounts/payment.html'

class RegisterView(CreateView):

    model = User
    template_name = 'accounts/register.html'
    form_class = UserAdminCreationForm
    success_url = reverse_lazy('index')
    
class RegisterProfessionalPlanView(CreateView):

    model = User
    template_name = 'accounts/professional.html'
    form_class = UserAdminCreationForm
    success_url = reverse_lazy('accounts:payment')
    
class RegisterCorporatePlanView(CreateView):

    model = User
    template_name = 'accounts/corporate.html'
    form_class = UserAdminCreationForm
    success_url = reverse_lazy('accounts:payment')
    
class PaymentFailedView(TemplateView):

    template_name = 'accounts/payment_failed.html'


class UpdateUserView(LoginRequiredMixin, UpdateView):

    model = User
    template_name = 'accounts/update_user.html'
    fields = ['name', 'email']
    success_url = reverse_lazy('accounts:index')

    def get_object(self):
        return self.request.user


class UpdatePasswordView(LoginRequiredMixin, FormView):

    template_name = 'accounts/update_password.html'
    success_url = reverse_lazy('accounts:index')
    form_class = PasswordChangeForm

    def get_form_kwargs(self):
        kwargs = super(UpdatePasswordView, self).get_form_kwargs()
        kwargs['user'] = self.request.user
        return kwargs

def payment(request):
    
    context = {}
    
    if request.method == 'POST':
        name = request.POST.get('name')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password1')
        phone = request.POST.get('phone')
        group_id = request.POST.get('plan_type')
        
        user = User.objects.create_user(name, email, password)
        user.name = name
        user.username = username
        user.phone = phone
        user.is_active = True
        user.is_staff = False
        now = timezone.now()
        user.date_expiration = now
        
        user.save()
        
        #---assign user to basic group-------
        try:
            basic_group = Group.objects.get(id=1)
            basic_group.user_set.add(user)
        except Exception:
            print("Basic group definition register Exception")
        
        user_auth = authenticate(username=username, password=password)
        
        if user_auth is not None:
            login(request, user_auth)
            
        currency = 'R$ '
        service_list = []
        subscription_name = 'Plano Básico de Assinatura'
        
        if group_id == '2':
            subscription_name = 'Plano Profissional de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos']
        elif group_id == '3':
            subscription_name = 'Plano Corporativo de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos', 'Montagem de retratos setoriais', 'Integração com bases próprias']

            
        country_slug = settings.LANGUAGE_CODE.split("-")[1]  
        price = Price.objects.get(Q(country_slug=country_slug) & Q(group_id=group_id))
        pvalue = price.pvalue if price is not None else 0
        
        if request.session.session_key is None:
            request.session.save()
        
        order = Order.objects.create(user=user, price=price, status=0, payment_option='paypal', order_key=request.session.session_key, amount=price.pvalue)
        order.save()
        
        context = {
            'username': username,
            'name': name,
            'email': email,
            'phone': phone,
            'plano': subscription_name,
            'annual_cost': currency+str((pvalue*12)),
            'pvalue': pvalue,
            'pvalue_text': currency+str(pvalue),
            'service_list': service_list,
            'order': order.id if order is not None else 0
        }
        
#         context = {
#             'username': 'theo.duarte',
#             'name': 'Theogenes',
#             'email': 'teocomp@gmail.com',
#             'phone': '(61) 98188-7403',
#             'plano': 'Plano Profissional de Assinatura',
#             'annual_cost': currency+str((pvalue*12)),
#             'pvalue': pvalue,
#             'pvalue_text': currency+str(pvalue),
#             'service_list': service_list,
#             'order': 2
#         }

    return render(request, 'accounts/payment.html', context)

class PaypalView(LoginRequiredMixin, TemplateView):

    template_name = 'accounts/paypal.html'

    def get_context_data(self, **kwargs):
        context = super(PaypalView, self).get_context_data(**kwargs)
        order_pk = self.kwargs.get('pk')
        order = get_object_or_404(
            Order.objects.filter(user=self.request.user), pk=order_pk
        )
        paypal_dict = order.paypal()
        paypal_dict['return_url'] = self.request.build_absolute_uri(
            reverse('index')
        )
        paypal_dict['cancel_return'] = self.request.build_absolute_uri(
            reverse('accounts:payment_failed')
        )
        paypal_dict['notify_url'] = self.request.build_absolute_uri(
            reverse('accounts:paypal-ipn')
        )
        context['form'] = PayPalPaymentsForm(initial=paypal_dict, button_type="subscribe")
        return context


def paypal_notification(sender, **kwargs):
    ipn_obj = sender
    
    if ipn_obj.payment_status == ST_PP_COMPLETED and \
        ipn_obj.receiver_email == settings.PAYPAL_EMAIL:
        
        try:
            order = Order.objects.get(pk=ipn_obj.invoice)
            order.complete()
        except Order.DoesNotExist:
            pass

valid_ipn_received.connect(paypal_notification)

index = IndexView.as_view()
register = RegisterView.as_view()
update_user = UpdateUserView.as_view()
update_password = UpdatePasswordView.as_view()
payment_failed = PaymentFailedView.as_view()
paypal_view = PaypalView.as_view()
register_professional_plan = RegisterProfessionalPlanView.as_view()
register_corporate_plan = RegisterCorporatePlanView.as_view()