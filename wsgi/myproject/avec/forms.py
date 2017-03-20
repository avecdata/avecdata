# coding=utf-8

from django import forms
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage

class ProjectForm(forms.ModelForm):
     champion_display = forms.CharField(max_length=100, help_text='type name or username or email')

class ContactForm(forms.Form):
    Nome  = forms.CharField(required=True)
    Email  = forms.EmailField(required=True)
    Texto = forms.CharField(
        required=True,
        widget=forms.Textarea
    )     