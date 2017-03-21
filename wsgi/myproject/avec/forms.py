# coding=utf-8

from django import forms
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage

class ProjectForm(forms.ModelForm):
    champion_display = forms.CharField(max_length=100, help_text='type name or username or email')

class ContactForm(forms.Form):
    
    name = forms.CharField(label='Nome')
    email = forms.EmailField(label='E-mail')
    message = forms.CharField(label='Mensagem', widget=forms.Textarea())
    phone = forms.CharField(label='Telefone')
    uf = forms.CharField(label='UF')
    
#     name = forms.CharField(label='Nome', initial='Theogenes')
#     email = forms.EmailField(label='E-mail', initial="teocomp@gmail.com")
#     message = forms.CharField(label='Mensagem', widget=forms.Textarea(), initial="teste2 descrição")
#     phone = forms.CharField(label='Telefone')
#     uf = forms.CharField(label='UF')
    
    def __init__(self, *args, **kwargs):
        super(ContactForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs['class'] = 'form-control'
        self.fields['email'].widget.attrs['class'] = 'form-control'
        self.fields['message'].widget.attrs['class'] = 'form-control'
    
    def send_mail(self):
        name = self.cleaned_data['name']
        email = self.cleaned_data['email']
        message = self.cleaned_data['message']
        phone = self.cleaned_data['phone']
        uf = self.cleaned_data['uf']
        content_message = '################ AVECDATA - PLATAFORMA DE DADOS SETORIAIS ################ \n\n'
        content_message += 'O Usuário abaixo: \n Nome: {0}\nE-mail: {1}\nTelefone: {3}\nUF: {4}\nNos enviou a seguinte mensagem de contato: \n'.format(name, email, message, phone, uf)
        content_message += '-------------------------------------------------------------------------\n'
        content_message += '{2}\n'.format(name, email, message, phone, uf)

        #print("teste.....")
        email_obj = EmailMessage("[AVEC] Contato do Cliente", content_message, to=[settings.EMAIL_HOST_USER])
        email_obj.send()