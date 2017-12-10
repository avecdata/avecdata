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

@register.filter
def running_total(role_total):
     return sum( [d['vl_total'] for d in role_total] )

@register.filter
def running_estadual_plena(role_total, group):
     return sum( [d['estadual_plena'] for d in role_total if d['grupo'] == group] )

@register.filter
def running_municipial_plena(role_total, group):
     return sum( [d['municipal_plena'] for d in role_total if d['grupo'] == group] )

@register.filter
def running_pacto_gestao(role_total, group):
    soma = 0.0
    try:
        if sum( [d['pacto_gestao'] for d in role_total if d['grupo'] == group ] ) > 0:
            soma = sum( [d['pacto_gestao'] for d in role_total if d['grupo'] == group ] )
    except:
        pass
    return soma

@register.filter
def running_total_amb_hosp(role_total, amb_hosp):
     return sum( [d['total'] for d in role_total if d['amb_hosp'] == amb_hosp] )

#datatus
@register.filter
def running_total(role_total):
     return round(float(sum( [d['total'] for d in role_total ] )),2)

#fns
@register.filter
def running_total_repasse(role_total):
    soma = 0.0
    try:
        if sum( [d['vl_total'] for d in role_total ] ) > 0:
            soma = sum( [d['vl_total'] for d in role_total ] )
    except:
        pass
    return round(float(soma),2)



#fns-datasus
@register.filter
def running_total_diff(fns, datasus):
     fns = running_total_repasse(fns)
     datasus = running_total(datasus)
     return round((fns-datasus),2)
