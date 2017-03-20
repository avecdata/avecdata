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
    cell_phone = forms.CharField(label='Celular')
    subject = forms.CharField(label='Assunto')
    message = forms.CharField(label='Mensagem', widget=forms.Textarea())
    
    def __init__(self, *args, **kwargs):
        super(ContactForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs['class'] = 'form-control'
        self.fields['email'].widget.attrs['class'] = 'form-control'
        self.fields['cell_phone'].widget.attrs['class'] = 'form-control'
        self.fields['subject'].widget.attrs['class'] = 'form-control'
        self.fields['message'].widget.attrs['class'] = 'form-control'
    
    def send_mail(self):
        name = self.cleaned_data['name']
        email = self.cleaned_data['email']
        cell_phone = self.cleaned_data['cell_phone']
        subject = self.cleaned_data['subject']
        message = self.cleaned_data['message']
        message = 'Nome: {0}\nE-mail:{1}\n{2}'.format(name, email, message)
#         send_mail(
#             subject, message, settings.EMAIL_HOST_USER, [email]
#         )
        print("teste.....")
        email_obj = EmailMessage(subject, message, to=[email])
        email_obj.send()