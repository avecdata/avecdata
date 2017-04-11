from django import template
from django.contrib.auth.models import Group 

register = template.Library()

@register.filter(name='addcss')
def addcss(field, css):
    return field.as_widget(attrs={"class":css})

@register.filter(name='has_group') 
def has_group(user, group_id):
    group =  Group.objects.get(id=group_id) 
    return group in user.groups.all() 