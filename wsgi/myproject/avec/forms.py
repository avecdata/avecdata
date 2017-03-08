from django import forms

class ProjectForm(forms.ModelForm):
     champion_display = forms.CharField(max_length=100, help_text='type name or username or email')
     