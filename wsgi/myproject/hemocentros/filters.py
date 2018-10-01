import django_filters
from hemocentros.models import Hemocentro, v_hemocentro_teste, v_coleta_anual


class AnoFilter(django_filters.FilterSet):

    anoinicio = django_filters.CharFilter(field_name='ano', lookup_expr='iexact')
    

    class Meta:
        model = v_coleta_anual
        fields = ['ano']
