import django_filters
from hemocentros.models import Hemocentro, v_hemocentro_teste, v_coleta_anual
from avec.models import pgf_municipio, pgf_entidade, pgf_acao, pgf_acao_detalhe, pgf_acao_faec, pgf_acao_detalhe_faec, pgf_acao_datasus, pgf_acao_datasus_grupo


class AcaoFilter(django_filters.FilterSet):

    mes_repasse = django_filters.CharFilter(name='mes', lookup_expr='iexact')

    class Meta:
        model = pgf_acao
        fields = ['mes_repasse']


class AnoFilter(django_filters.FilterSet):

    #anoinicio = django_filters.CharFilter(field_name='ano', lookup_expr='iexact')
    ano = django_filters.DateFromToRangeFilter()

    class Meta:
        model = v_coleta_anual
        fields = ['ano']
