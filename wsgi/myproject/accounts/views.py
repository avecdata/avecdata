# coding=utf-8
from paypal.standard.forms import PayPalPaymentsForm
from paypal.standard.models import ST_PP_COMPLETED
from paypal.standard.ipn.signals import valid_ipn_received

from django.shortcuts import render, render_to_response, get_object_or_404
from django.views.generic import (CreateView, TemplateView, UpdateView, FormView)
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse_lazy, reverse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import authenticate, login, tokens
from avec.models import Price, Order, Group
from django.contrib.auth import get_user_model
from django.utils import timezone

from .models import User
from .forms import UserAdminCreationForm
from avec import utils
from django.contrib.auth.decorators import user_passes_test, login_required
from django.http import HttpResponse, JsonResponse
import requests, json

from django.utils.encoding import force_text
from django.utils.http import urlsafe_base64_decode

from avec.utils import account_activation_token
from django.contrib.auth.tokens import PasswordResetTokenGenerator
import base64
from decimal import Decimal

from django.conf import settings
from django.db.models import Q

class IndexView(LoginRequiredMixin, TemplateView):

    template_name = 'accounts/index.html'
    
def register(request):

    success = False
    avec_message = 'Falha do cadastro. Por favor, tente novamente'
    # Se dados forem passados via POST
    if request.method == 'POST':
        form = UserAdminCreationForm(request.POST)

        if form.is_valid(): # se o formulario for valido
            
            user_id = request.POST.get('user_id')        
            form.save()
            username, password = form.cleaned_data.get('username'), form.cleaned_data.get('password1')
            user_logged = authenticate(username=username, password=password)
            
            try:
                #---assign user to basic group------- 
                group = Group.objects.get(id=1)
                group.user_set.add(user_logged)
                
                
                if user_id and user_id == '0':                    
                    #---sendmail to confirm subscription----------
                    title = 'AVEC DATA - Confirmação de Cadastro'
                    name = user_logged.name
                    plan_type = group.name
                    item_list = ['Estatísticas e infográficos básico']
                    to = [user_logged.email]
                    content_message = utils.get_content_subscription_email(name, plan_type, item_list)
                    utils.send_mail(title, content_message, to)
                
                login(request, user_logged)
                success = True
                avec_message = 'Cadastro Realizado com sucesso!'
            except Exception as e:
                print('Register Exception: on accounts.views '+str(e))
                
            context = {
                'form': form,
                'success': success,
                'avec_message': avec_message
            }
            
            return render(request, 'accounts/register.html', context)
    
    return render(request, 'accounts/register.html', {"form": UserAdminCreationForm() })

@login_required
def preferences_user(request, pk):

    success = False
    avec_message = 'Falha do cadastro. Por favor, tente novamente'
    
    form = UserAdminCreationForm()
    context = {
        'form': form,
        'success': success,
        'avec_message': avec_message
    }
    
    # Se dados forem passados via POST
    if request.method == 'POST':
        form = UserAdminCreationForm(request.POST)

#         if form.is_valid(): # se o formulario for valido
#             
#             form.save()
#             username, password = form.cleaned_data.get('username'), form.cleaned_data.get('password1')
#             user_logged = authenticate(username=username, password=password)
            
        username = request.POST.get('username').strip()
        phone = request.POST.get('phone')
        name = request.POST.get('name')
        email = request.POST.get('email').strip()
        current_password = request.POST.get('current_password').strip() if request.POST.get('current_password') else ''
        password1 = request.POST.get('password1').strip()
        password2 = request.POST.get('password2').strip()
        
        User = get_user_model()
        user_logged = request.user
        
#         print('Update data user Exception(1): on accounts.views '+request.method+ ' '+current_password+' '+password1+' '+password2)
        
        if username != '' and current_password != '' and password1 != '' and password2 != '' and password1 == password2:
            
            if user_logged.check_password(current_password):
                user_logged.set_password(request.POST.get('password1'))
                user_logged.name = name
                user_logged.phone = phone
                user_logged.save()
                success = True
                
                avec_message = 'Sua senha foi atualizada com sucesso!'
            else:
                
                success = True
                avec_message = 'A Senha Atual informada não confere. Por favor, tente novamente'
                
            print('Update data user Exception(1): on accounts.views ')
        elif(current_password == '' or password1 == '' or password2 == ''):
            
            user_logged.name = name
            user_logged.phone = phone
            user_logged.save()
            success = True
            
            avec_message = 'Seus dados foram atualizados com sucesso!'
#             print('Update data user Exception(1): ********************************************* ')
        try:
            #---get user group------- 
            groups = request.user.groups.all()
            group_user = utils.get_greater_group(groups)
            group_name = group_user.name.encode('utf-8')
            
            #---sendmail to confirm subscription----------
            title = 'AVEC DATA - Atualização de Cadastro'
            name = user_logged.name
            plan_type = group_name
            to = [user_logged.email]
            content_message = utils.get_content_update_register(name, plan_type)
            utils.send_mail(title, content_message, to)
            
            success = True
        except Exception as e:
            print('Update data user Exception: on accounts.views '+str(e))
            
        context = {
            'form': form,
            'success': success,
            'avec_message': avec_message
        }
        
        return render(request, 'accounts/preferences_user.html', context)
    elif(request.user.id == int(pk)):
#         form.cleaned_data['name'] = request.user.name
#         print('teste................')

        groups = request.user.groups.all()
        group_user = utils.get_greater_group(groups)
        group_name = group_user.name.encode('utf-8')
        
        date_joined = request.user.date_joined.strftime('%d/%m/%Y')
        date_expiration = 'Não Expira' if group_user.id == 1 else request.user.date_expiration.strftime('%d/%m/%Y')
        
        form = UserAdminCreationForm(initial={
            'name': request.user.name,
            'username': request.user.username,
            'email': request.user.email,
            'phone': request.user.phone,
            })
        
#         token_generator = PasswordResetTokenGenerator()
#         token_generator = utils.account_activation_token._make_hash_value(request.user, request.user.date_expiration)
#         token = utils.account_activation_token.make_token(request.user)
#         uidb64 = base64.b64encode(bytes(str(request.user.id)+settings.SECRET_RECOVERY_EMAIL_KEY, encoding='ascii')).decode()

#         url = reverse("accounts:preferences_user", args={request.user.id})
#         url = reverse('accounts:activate_account', args={token, uidb64})
#         url = '/conta/esqueceu-senha'+'/'+uidb64+'/'+token+'/'
        
        context = {
            'form': form,
            'success': success,
            'group_name': group_name,
            'group_id': group_user.id,
#             'token': token,
#             'hash_id': uidb64,
#             'url': url,
            'date_joined': date_joined,
            'date_expiration': date_expiration,
            'class_expiration': 'text-danger' if timezone.now() >  request.user.date_expiration else '',
            'avec_message': avec_message
        }
        
        print('Update data user Exception: only get access ')
    
    return render(request, 'accounts/preferences_user.html', context)

def register_avec_plan(request, tipoconta):
    
#     print(tipoconta+'*********************')
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
            
            #---sendmail to confirm subscription----------
            title = 'AVEC DATA - Confirmação de Cadastro'
            plan_type = 'Básico'
            item_list = ['Estatísticas e infográficos básico']
            
            if group_id == '5':
                plan_type = 'Padrão'
                item_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos']
            elif group_id == '2':
                plan_type = 'Profissional'
                item_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos']
            elif group_id == '3':
                plan_type = 'Corporativo'
                item_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos', 'Painéis Interativos - Avançados', 'Retratos setoriais', 'Integração com bases próprias']
            
            to = [email]
            content_message = utils.get_content_subscription_email(name, plan_type, item_list)
            utils.send_mail(title, content_message, to)
        except Exception as e:
            print("Basic group definition register Exception:"+str(e))
        
        user_auth = authenticate(username=username, password=password)
        
        if user_auth is not None:
            login(request, user_auth)
            
        currency = 'R$ '
        service_list = []
        subscription_name = 'Plano Básico de Assinatura'
        
        if group_id == '5':
            plan_type = 'Plano Padrão de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos']
        elif group_id == '2':
            plan_type = 'Plano Profissional de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos']
        elif group_id == '3':
            subscription_name = 'Plano Corporativo de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos', 'Painéis Interativos - Avançados', 'Retratos setoriais', 'Integração com bases próprias']

            
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

        #return render(request, 'accounts/payment.html', context)
        return HttpResponseRedirect(reverse('accounts:paypal_view', kwargs={'pk': order.id if order is not None else 0, 'num': 0}))
    
    else:

        tipoplano_id = 5
        
        if(tipoconta == 'plano-profissional'):
            tipoplano_id = 2
        
        context = {
                'form': UserAdminCreationForm(),
                'tipoplano_id': tipoplano_id
            }
        
        return render(request, 'accounts/register_avec_plan.html', context)

def activate_account(request, uidb64, token):
    
#     print(uidb64+'*********************'+token)
    try:
#             uid = force_text(urlsafe_base64_decode(uidb64))
        hash_id = base64.b64decode(str.encode(uidb64)).decode()
        uid = hash_id.replace(settings.SECRET_RECOVERY_EMAIL_KEY, '')
    #     print('teste: '+uid)
    
        User = get_user_model()
        user_update = User.objects.get(id=uid)
    except Exception as e:
            print("Update password Exception:"+str(e))

    if user_update is not None and account_activation_token.check_token(user_update, token):
        user_update.is_active = True
        user_update.save()
#         login(request, user)
        
        context = {
            'user_id': user_update.id
        }
        
        return render(request, 'avec/index.html')
    else:
        # invalid link
        return render(request, 'accounts/payment_failed.html')
    
    return render(request, 'accounts/activate_account.html')

def recovery_password(request, uidb64, token):
    
    
    username = ''
    password1 = ''
    password2 = ''
    resultado_json = False
    avec_message = ''
    
    if request.method == 'POST':
        
        username = request.POST.get('username').strip()
        avec_token = request.POST.get('avec_token').strip()
        password1 = request.POST.get('password1').strip()
        password2 = request.POST.get('password2').strip()
        
        if username and avec_token and password1 and password2 and password1 == password2:
            
            avec_token_tmp = request.POST.get('avec_token').split('/')
            uidb64 = avec_token_tmp[0]
            token = avec_token_tmp[1]
            
            hash_id = base64.b64decode(uidb64.encode('ascii')).decode()
#             hash_id = base64.b64decode(str.encode(uidb64)).decode()
            uid = hash_id.replace(settings.SECRET_RECOVERY_EMAIL_KEY, '')
            
            User = get_user_model()
            user_logged = User.objects.get(id=uid)
            
            if user_logged is not None and account_activation_token.check_token(user_logged, token):
                user_logged.set_password(request.POST.get('password1'))
                user_logged.save()
                resultado_json = True
                avec_message = 'Sua nova Senha foi Cadastrada com Sucesso!'
            
            context = {
                'success': resultado_json,
                'avec_message': avec_message
            }
            
            return render(request, 'avec/index.html', context)
    else:
        
        try:
            hash_id = base64.b64decode(uidb64.encode('ascii')).decode()
#             hash_id = base64.b64decode(str.encode(uidb64)).decode()
            uid = hash_id.replace(settings.SECRET_RECOVERY_EMAIL_KEY, '')
        #     print('teste: '+uid)
        
            User = get_user_model()
            user_update = User.objects.get(id=uid)
        except Exception as e:
                print("Update password Exception:"+str(e))
    
        if user_update is not None and account_activation_token.check_token(user_update, token):
#             user_update.is_active = True
#             user_update.save()
    #         login(request, user)
            
            context = {
                'username': user_update.username,
                'avec_token': uidb64+'/'+token,
            }
            
            return render(request, 'accounts/recovery_password.html', context)
    
    return render(request, 'accounts/index.html')

# class RegisterView(CreateView):
# 
#     model = User
#     template_name = 'accounts/register.html'
#     form_class = UserAdminCreationForm
#     success_url = reverse_lazy('index')
#     success = False
#     
#     def form_valid(self, form):
#         valid = super(RegisterView, self).form_valid(form)
#         username, password = form.cleaned_data.get('username'), form.cleaned_data.get('password1')
#         user_logged = authenticate(username=username, password=password)
#         
#         try:
#             #---assign user to basic group------- 
#             group = Group.objects.get(id=1)
#             group.user_set.add(user_logged)
#             
#             #---sendmail to confirm subscription----------
#             title = 'AVEC DATA - Confirmação de Cadastro'
#             name = user_logged.name
#             plan_type = group.name
#             item_list = ['Estatísticas e infográficos básico']
#             to = [user_logged.email]
#             content_message = utils.get_content_subscription_email(name, plan_type, item_list)
#             utils.send_mail(title, content_message, to)
#             self.success = True
#         except:
#             print('Register Exception: on accounts.views')
#         
#         login(self.request, user_logged)
#         valid['success'] = self.success
#         
#         return valid

class RegisterStandardPlanView(CreateView):

    model = User
    template_name = 'accounts/standard.html'
    form_class = UserAdminCreationForm
    success_url = reverse_lazy('accounts:payment')
    
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
            
            #---sendmail to confirm subscription----------
            title = 'AVEC DATA - Confirmação de Cadastro'
            plan_type = 'Básico'
            item_list = ['Estatísticas e infográficos básico']
            
            if group_id == '5':
                plan_type = 'Padrão'
                item_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos']
            elif group_id == '2':
                plan_type = 'Profissional'
                item_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos']
            elif group_id == '3':
                plan_type = 'Corporativo'
                item_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos', 'Painéis Interativos - Avançados', 'Retratos setoriais', 'Integração com bases próprias']
            
            to = [email]
            content_message = utils.get_content_subscription_email(name, plan_type, item_list)
            utils.send_mail(title, content_message, to)
        except Exception as e:
            print("Basic group definition register Exception:"+str(e))
        
        user_auth = authenticate(username=username, password=password)
        
        if user_auth is not None:
            login(request, user_auth)
            
        currency = 'R$ '
        service_list = []
        subscription_name = 'Plano Básico de Assinatura'
        
        if group_id == '5':
            plan_type = 'Plano Padrão de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos']
        elif group_id == '2':
            plan_type = 'Plano Profissional de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos']
        elif group_id == '3':
            subscription_name = 'Plano Corporativo de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos', 'Painéis Interativos - Avançados', 'Retratos setoriais', 'Integração com bases próprias']

            
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

@login_required
def update_subscription(request):
    
    context = {}
    
    if request.method == 'POST':
        user_id = request.POST.get('user_id')
        group_id = request.POST.get('plan_id')
        
        User = get_user_model()
        user_update = User.objects.get(id=user_id)
        
        name = user_update.name
        username = user_update.username
        email = user_update.email
        phone = user_update.phone
        
        now = timezone.now()
#         user_update.date_expiration = now
        
#         user.save()
        
        currency = 'R$ '
        service_list = []
        subscription_name = 'Plano Básico de Assinatura'
        
        country_slug = settings.LANGUAGE_CODE.split("-")[1]  
        price = Price.objects.get(Q(country_slug=country_slug) & Q(group_id=group_id))
        pvalue = price.pvalue if price is not None else 0
        
        if group_id == '5':
            subscription_name = 'Plano Padrão de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos']
        if group_id == '2':
            subscription_name = 'Plano Profissional de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos']
        elif group_id == '3':
            subscription_name = 'Plano Corporativo de Assinatura'
            service_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos', 'Painéis Interativos - Avançados', 'Retratos setoriais', 'Integração com bases próprias']
            pvalue = pvalue*10
        
        if request.session.session_key is None:
            request.session.save()
        
        order = Order.objects.create(user=user_update, price=price, status=0, payment_option='paypal', order_key=request.session.session_key, amount=price.pvalue)
        order.save()
        
        context = {
            'username': username,
            'name': name,
            'email': email,
            'phone': phone,
            'group_id': group_id,
            'plano': subscription_name,
            'annual_cost': currency+str((pvalue*12)),
            'pvalue': pvalue,
            'pvalue_text': currency+str(pvalue),
            'service_list': service_list,
            'order': order.id if order is not None else 0
        }
        
        return HttpResponseRedirect(reverse('accounts:paypal_view', kwargs={'pk': order.id if order is not None else 0, 'num': 0}))

    return render(request, 'accounts/payment.html', context)

@login_required
def update_password_ws(request):
    
    username = ''
    current_password = ''
    password1 = ''
    password2 = ''
    resultado_json = False
    
    if request.method == 'POST':
        
        username = request.POST.get('username').strip()
        current_password = request.POST.get('current_password').strip()
        password1 = request.POST.get('password1').strip()
        password2 = request.POST.get('password2').strip()
        
        if username and current_password and password1 and password2 and password1 == password2:
            User = get_user_model()
            user_logged = User.objects.get(username=request.POST.get('username'))
            
            if user_logged.check_password(current_password):
                user_logged.set_password(request.POST.get('password1'))
                user_logged.save()
                resultado_json = True
                
    else:
        return render(request, 'avec/index.html')
    
    return JsonResponse(resultado_json, safe=False)

def reload_password_ws(request):
    
    email = ''
    resultado_json = False
    
    if request.method == 'POST':
        
        email = request.POST.get('email').strip()
        
        if email != '':
            User = get_user_model()
            user_logged = User.objects.get(email=request.POST.get('email'))
            
            if user_logged is not None:
                
                token = utils.account_activation_token.make_token(user_logged)
                uidb64 = base64.b64encode(bytes(str(user_logged.id)+settings.SECRET_RECOVERY_EMAIL_KEY, encoding='ascii')).decode()
#                 uidb64 = base64.b64encode(str(str(user_logged.id)+settings.SECRET_RECOVERY_EMAIL_KEY)).decode()
                
                url = 'http://www.avecdata.com/conta/esqueceu-senha'+'/'+uidb64+'/'+token+'/'
#                 url = 'http://www.avecdata.com'+reverse('accounts:recovery_password', args={token, uidb64})
                
                title = 'AVEC DATA - Recuperação de Senha'
                name = user_logged.name
                to = [user_logged.email]
                content_message = utils.get_content_recovery_password(name, url)
                utils.send_mail(title, content_message, to)
                
                resultado_json = True
                
    else:
        return render(request, 'avec/index.html')
    
    return JsonResponse(resultado_json, safe=False)

class PaypalView(LoginRequiredMixin, TemplateView):

    template_name = 'accounts/paypal.html'

    def get_context_data(self, **kwargs):
        context = super(PaypalView, self).get_context_data(**kwargs)
        order_pk = self.kwargs.get('pk')
        num_subscrition = self.kwargs.get('num')
#         print('teste: '+str(num_subscrition))
        order = get_object_or_404(
            Order.objects.filter(user=self.request.user), pk=order_pk
        )
        customer_name = ''
        customer_username = ''
        customer_phone = ''
        plan_type = ''
        order_date = ''
        order_amount = ''
        order_contry = ''
        group_id = 1
        email = ''
        num_licenses = 0
        
        try:
            num_licenses = int(num_subscrition)
        except Exception as e:
            num_licenses = 10
            print('Number Subscription Exception: on accounts.views '+str(e)) 
            
        try:
            
            if num_licenses > 0:
#                 print('teste: '+str((num_licenses+10)*order.amount))
                amount = float(order.amount)
                num_licenses = float(num_licenses+10)
                
                amount_total = amount*num_licenses
                order.amount = Decimal(amount_total).quantize(Decimal(10) ** -2)
                order.save()
            
            customer_name = order.user.name
            customer_username = order.user.username
            email = order.user.email
            customer_phone = order.user.phone
            plan_type = order.price
            order_date = order.modified.strftime('%d/%m/%Y')
#             order_amount = 'R$ '+str(order.amount)
            order_amount = str(order.amount)
            order_contry = 'Brasil'
            order_flag = 'pt_br'
            group_id = order.price.group_id
        except Exception as e:
                print('Payment Exception: on accounts.views '+str(e))
                
        #---assign user to basic group-------
        try:
            
            #---sendmail to confirm subscription----------
            title = 'AVEC DATA - Dados do Pedido #'+str(order.id)
            plan_type = 'Básico'
            item_list = ['Estatísticas e infográficos básico']
            
            if group_id == 5:
                plan_type = 'Padrão'
                item_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos']
            elif group_id == 2:
                plan_type = 'Profissional'
                item_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos']
            elif group_id == 3:
                plan_type = 'Corporativo'
                item_list = ['Estatísticas e infográficos básico', 'Estatísticas e infográficos premium', 'Download de conteúdos', 'Painéis Interativos - Básicos', 'Painéis Interativos - Avançados', 'Retratos setoriais', 'Integração com bases próprias']
            
            to = [email]
            content_message = utils.get_content_update_subscription_email(customer_name, plan_type, item_list)
#             utils.send_mail(title, content_message, to)
        except Exception as e:
            print("Basic group definition register Exception:"+str(e))
            
        
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
        context['customer_username'] = customer_username
        context['customer_name'] = customer_name
        context['customer_email'] = email
        context['customer_phone'] = customer_phone
        context['plan_type'] = plan_type
        context['tipoplano_id'] = group_id
        context['order_date'] = order_date
        context['order_amount'] = order_amount
        context['order_contry'] = order_contry
        context['order_flag'] = order_flag
        
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
#register = RegisterView.as_view()
# activate_account = ActivateAccountView.as_view()
update_user = UpdateUserView.as_view()
update_password = UpdatePasswordView.as_view()
payment_failed = PaymentFailedView.as_view()
paypal_view = PaypalView.as_view()
register_standard_plan = RegisterStandardPlanView.as_view()
register_professional_plan = RegisterProfessionalPlanView.as_view()
register_corporate_plan = RegisterCorporatePlanView.as_view()