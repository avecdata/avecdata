import django_filters
from avec.models import pgf_municipio, pgf_entidade, pgf_acao, pgf_acao_detalhe, pgf_acao_faec, pgf_acao_detalhe_faec


class AcaoFilter(django_filters.FilterSet):

    mes = django_filters.CharFilter(name='mes', lookup_expr='iexact')

    class Meta:
        model = pgf_acao
        fields = ['mes']

class AcaoFilterFaec(django_filters.FilterSet):

    mes = django_filters.NumberFilter(name='mes', lookup_expr='month__gte')

    class Meta:
        model = pgf_acao_faec
        fields = ['mes']
