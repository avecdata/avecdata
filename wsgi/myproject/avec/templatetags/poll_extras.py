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
def running_estadual_plena_a(role_total, group):
     return sum( [d['estadual_plena'] for d in role_total if d['grupo'] == group and d['amb_hosp'] == 'Ambulatorial'] )

@register.filter
def running_pacto_gestao_a(role_total, group):
    soma = 0.0
    try:
        if sum( [d['pacto_gestao'] for d in role_total if d['grupo'] == group and d['amb_hosp'] == 'Ambulatorial'] ) > 0:
            soma = sum( [d['pacto_gestao'] for d in role_total if d['grupo'] == group and d['amb_hosp'] == 'Ambulatorial'] )
    except:
        pass
    return soma

@register.filter
def running_estadual_plena_h(role_total, group):
     return sum( [d['estadual_plena'] for d in role_total if d['grupo'] == group and d['amb_hosp'] == 'Hospitalar'])

@register.filter
def running_municipial_plena_h(role_total, group):
     return sum( [d['municipal_plena'] for d in role_total if d['grupo'] == group and d['amb_hosp'] == 'Hospitalar'])


@register.filter
def running_total_amb_hosp_pacto(role_total, amb_hosp):
     return sum( [d['pacto_gestao'] for d in role_total if d['amb_hosp'] == amb_hosp])

@register.filter
def running_total_amb_hosp_municipal(role_total, amb_hosp):
     return sum( [d['municipal_plena'] for d in role_total if d['amb_hosp'] == amb_hosp])

@register.filter
def running_total_amb_hosp(role_total):
     m = round(float(sum( [d['municipal_plena'] for d in role_total ] )),2)
     p = round(float(sum( [d['pacto_gestao'] for d in role_total ] )),2)
     return (m+p)

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
     datasus = running_total_amb_hosp(datasus)
     return round((fns-datasus),2)
