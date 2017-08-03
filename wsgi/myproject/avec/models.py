# -*- coding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import Group, User
from django.contrib.auth import get_user_model
from django.conf import settings
from avec import utils
from django.db.models import Q
from django.utils.translation import ugettext_lazy as _

class Keywords(models.Model):
    title = models.CharField(max_length=200)

    def publish_keyword(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Themes(models.Model):
    #author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    image = models.ImageField( blank=True)
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish_theme(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Subject(models.Model):
    #author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    text = models.TextField()
    image = models.ImageField( blank=True)
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    keywords = models.ManyToManyField(Keywords, blank=True)
    theme = models.ForeignKey(Themes)

    def publish_subject(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Subject_detail(models.Model):
    #author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    keywords = models.ManyToManyField(Keywords, blank=True)
    subject = models.ForeignKey(Subject)

    def publish_subject_detail(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Post(models.Model):
    #author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    text = models.TextField()
    html = models.TextField(blank=True)
    image = models.ImageField( blank=True)
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    subject = models.ManyToManyField(Subject , related_name='subparent')
    subject_detail = models.ManyToManyField(Subject_detail , related_name='subchild')
    keywords = models.ManyToManyField(Keywords, blank=True)
    group = models.ManyToManyField(Group)
    open = models.BooleanField()

    def publish_post(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Dashboard(models.Model):
    title = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    subject = models.ManyToManyField(Subject , related_name='subparent_dash')
    subject_detail = models.ManyToManyField(Subject_detail , related_name='subchild_dash')
    keywords = models.ManyToManyField(Keywords, blank=True, related_name='keywords_dash')
    group = models.ManyToManyField(Group)
    open = models.BooleanField()

    class Meta:
        managed = False

    def publish_dashboard(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class SimpleDashboard(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    subject = models.ManyToManyField(Subject , related_name='subparent_simple')
    subject_detail = models.ManyToManyField(Subject_detail , related_name='subchild_simple')
    keywords = models.ManyToManyField(Keywords, blank=True)
    group = models.ManyToManyField(Group)
    open = models.BooleanField()
    external_files = models.TextField(blank=True)

    def publish_simpleDashboard(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class tabSimple(models.Model):
    simpleDashboard = models.ForeignKey(SimpleDashboard, verbose_name=("SimpleDashboard"), on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    footer = models.TextField(blank=True)
    html = models.TextField(blank=True)
    titulo = models.TextField(blank=True)
    indicador = models.TextField(blank=True)
    descricao = models.TextField(blank=True)
    fonte = models.TextField(blank=True)
    metodo_calculo = models.TextField(blank=True)
    categorizacao = models.TextField(blank=True)
    periodicidade = models.TextField(blank=True)
    periodos_disponiveis = models.TextField(blank=True)
    notas = models.TextField(blank=True)
    elaboracao = models.TextField(blank=True)
    origem = models.TextField(blank=True)
    class Meta:
        verbose_name = _("tabSimple")
        verbose_name_plural = _("tabSimples")

    def __str__(self):
        return self.title

class Paineis(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    subject = models.ManyToManyField(Subject , related_name='subparent_painel')
    subject_detail = models.ManyToManyField(Subject_detail , related_name='subchild_painel')
    keywords = models.ManyToManyField(Keywords, blank=True)
    group = models.ManyToManyField(Group)
    open = models.BooleanField()
    external_files = models.TextField(blank=True)

    def publish_Paineis(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class tabPaineis(models.Model):
    painel = models.ForeignKey(Paineis, verbose_name=("Paineis"), on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    footer = models.TextField(blank=True)
    html = models.TextField(blank=True)
    titulo = models.TextField(blank=True)
    indicador = models.TextField(blank=True)
    descricao = models.TextField(blank=True)
    fonte = models.TextField(blank=True)
    metodo_calculo = models.TextField(blank=True)
    categorizacao = models.TextField(blank=True)
    periodicidade = models.TextField(blank=True)
    periodos_disponiveis = models.TextField(blank=True)
    notas = models.TextField(blank=True)
    elaboracao = models.TextField(blank=True)
    origem = models.TextField(blank=True)

    class Meta:
        verbose_name = _("tabPainel")
        verbose_name_plural = _("tabPaineis")

    def __str__(self):
        return self.title


class Reports(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    pdf = models.FileField(upload_to='pdf')
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    subject = models.ManyToManyField(Subject , related_name='subparent1')
    subject_detail = models.ManyToManyField(Subject_detail , related_name='subchild1')
    keywords = models.ManyToManyField(Keywords, blank=True)


    def publish_report(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Price(models.Model):

    country_code = models.IntegerField(default=0, verbose_name='Cód. do país')
    country_name = models.CharField(max_length=150, verbose_name='Nome do país', null=False)
    country_slug = models.CharField(max_length=160, verbose_name='Abreviação', null=False)
    pvalue = models.DecimalField(default=0.0, max_digits=10, decimal_places=2, verbose_name='Valor do Plano')
    created_date = models.DateTimeField(default=timezone.now, verbose_name='Data de criação')
    published_date = models.DateTimeField(blank=True, null=True, verbose_name='Data de modificação')

    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='group_price', verbose_name='Plano de assinatura')

    def publish_price(self):
        self.published_date = timezone.now()
        self.save()

    class Meta:
        verbose_name = 'Preço'
        verbose_name_plural = 'Preços dos Planos'

    def __str__(self):
        return self.group.name

#     def __str__(self):
#         return '{} [{}] {} {}'.format(self.country_code, self.country_name, self.pvalue, self.group.name)

class Order(models.Model):

    STATUS_CHOICES = (
        (0, 'Pending payment'),
        (1, 'Concluded'),
        (2, 'Canceled'),
    )

    PAYMENT_OPTION_CHOICES = (
        ('deposit', 'Depósito'),
        ('pagseguro', 'PagSeguro'),
        ('paypal', 'Paypal'),
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name='Usuário', default=1)
    price = models.ForeignKey(Price, related_name='product', verbose_name='Plano de assinatura', default=1)
    status = models.IntegerField('Situação', choices=STATUS_CHOICES, default=0, blank=True)
    payment_option = models.CharField('Opção de Pagamento', choices=PAYMENT_OPTION_CHOICES, max_length=20, default='paypal')
    order_key = models.CharField('Chave da compra', max_length=40, db_index=True)
    amount = models.DecimalField(default=0.0, max_digits=10, decimal_places=2, verbose_name='Valor do Pedido')

    created = models.DateTimeField('Criado em', auto_now_add=True)
    modified = models.DateTimeField('Modificado em', auto_now=True)

#    objects = OrderManager()

    class Meta:
        verbose_name = 'Pedido'
        verbose_name_plural = 'Pedidos'

    def __str__(self):
        return 'Pedido #{}'.format(self.pk)

    def total(self):

        #--this will be used when the system is multi-language----------------
#         country_slug = settings.LANGUAGE_CODE.split("-")[1]
#         group_id = self.group.id
#
#         price = Price.objects.filter(Q(country_slug=country_slug) & Q(group_id=group_id))
#         result = price[0].pvalue if price.count() > 1 else 0

#         result = self.price.pvalue
        result = self.amount

        return result

    def complete(self):

        try:
            User = get_user_model()
            user_payment = User.objects.get(id=self.user_id)
            now = timezone.now()
#             user_payment.date_expiration = now
            user_payment.date_expiration = utils.add_months(now, 1)
#             user_payment.name = 'Theogenes F Duarte'
            user_payment.save()

            #--adding user to group--------
            group_id = self.price.group_id
            group = Group.objects.get(id=group_id)
            group.user_set.add(user_payment)
        except:
            pass

        self.status = 1
        self.save()

        return self.status

    def paypal(self):
        self.payment_option = 'paypal'
        self.save()
        subscription_name = ""

        try:
            subscription_name = str(self.price)
        except:
            pass

        paypal_dict = {
            'upload': '1',
            'business': settings.PAYPAL_EMAIL,
            'cmd': '_xclick-subscriptions',
            'invoice': self.pk,
            "a3": self.total(),                         # monthly price
            "p3": 1,                                    # duration of each unit (depends on unit)
            "t3": "M",                                  # duration unit ("M for Month")
            "src": "1",                                 # make payments recur
            "sra": "1",                                 # reattempt payment on payment error
            "no_note": "1",                             # remove extra notes (optional)
            "item_name": "AVEC - Plano de Assinatura: "+subscription_name,
            'currency_code': 'BRL',
            'charset': 'utf-8',
        }

        return paypal_dict

# def post_save_order(instance, **kwargs):
#     if instance.quantity < 1:
#         instance.delete()
#
#
# models.signals.post_save.connect(
#      post_save_order, sender=CartItem, dispatch_uid='post_save_order'
# )

class View_Client(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField( blank=True)
    nickname = models.CharField(max_length=200, blank=True)
    script  = models.CharField(max_length=200, blank=True)
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    search_field = models.BooleanField()
    open = models.BooleanField(blank=True)

    def publish_viewclient(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class View_Themes(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    client = models.ForeignKey(View_Client)

    def publish_viewthemes(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class View_Subject(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    theme = models.ForeignKey(View_Themes)
    search_field = models.BooleanField()

    def publish_viewsubject(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class View_Subject(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    theme = models.ForeignKey(View_Themes)

    def publish_viewsubject(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class View_Subject_detail(models.Model):
    title = models.CharField(max_length=200)
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    subject = models.ForeignKey(View_Subject)

    def publish_view_subject_detail(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title


class v_emendas_autor(models.Model):
    idecadastro  = models.IntegerField(blank=True, null=True)
    cod_autor = models.IntegerField(primary_key=True, blank=True)
    condicao = models.CharField(max_length=200 , null=True)
    nome = models.CharField(max_length=200 , null=True)
    nome_parlamentar = models.CharField(max_length=200 , null=True)
    nome_abrev = models.CharField(max_length=100 , null=True)
    url_foto = models.CharField(max_length=300 , null=True)
    sexo = models.CharField(max_length=200 , null=True)
    uf = models.CharField(max_length=200 , null=True)
    partido = models.CharField(max_length=200 , null=True)
    gabinete = models.CharField(max_length=200 , null=True)
    anexo = models.CharField(max_length=200, null=True)
    fone = models.CharField(max_length=40 , null=True)
    email = models.CharField(max_length=100 , null=True)

    def publish_v_emendas_autor(self):
        self.save()

    def __str__(self):
        return self.nome

class v_emendas_orgao(models.Model):
    cod_orgao = models.IntegerField(primary_key=True, blank=True)
    nom_orgao = models.CharField(max_length=150 , null=True)
    nom_abrev_orgao = models.CharField(max_length=150 , null=True)
    sgl_orgao = models.CharField(max_length=50 , null=True)
    cod_poder = models.CharField(max_length=30 , null=True)

    def publish_v_emendas_orgao(self):
        self.save()

    def __str__(self):
        return self.nom_orgao

class v_emendas_programa(models.Model):
    cod_programa = models.IntegerField(primary_key=True, blank=True)
    des_programa = models.CharField(max_length=400 , null=True)
    txt_objetivo_programa = models.CharField(max_length=3500 , null=True)

    def publish_v_emendas_programa(self):
        self.save()

    def __str__(self):
        return self.des_programa


class v_emendas_emendas(models.Model):
    cod_autor = models.ForeignKey(v_emendas_autor)
    num_emenda = models.CharField(max_length=8 , null=True)
    cod_emenda = models.IntegerField(primary_key=True, blank=True)
    cod_orgao = models.ForeignKey(v_emendas_orgao, db_column='cod_orgao', null=True)
    nom_orgao = models.CharField(max_length=400 , null=True)
    funcional = models.CharField(max_length=300 , null=True)
    cod_programa = models.ForeignKey(v_emendas_programa, db_column='cod_programa')
    cod_acao = models.CharField(max_length=10 , null=True)
    cod_subtitulo = models.CharField(max_length=10 , null=True)
    val_acrec = models.DecimalField(default=0.0, max_digits=15, decimal_places=2 , null=True)
    val_canc = models.CharField(max_length=20, null=True)
    saldo = models.CharField(max_length=20 , null=True)

    def publish_v_emendas_emendas(self):
        self.save()

    def __str__(self):
        return self.num_emenda


class v_emendas_proposta(models.Model):
    id_proposta = models.IntegerField(primary_key=True)
    uf_proponente = models.CharField(max_length=2, blank=True)
    munic_proponente = models.CharField(max_length=200, blank=True)
    cod_munic_ibge = models.IntegerField(null=True)
    cod_orgao_sup = models.IntegerField(null=True)
    desc_orgao_sup = models.CharField(max_length=500, null=True)
    natureza_juridica = models.CharField(max_length=200, null=True)
    nr_proposta = models.CharField(max_length=20, null=True)
    dia_prop = models.CharField(max_length=6, null=True)
    mes_prop = models.CharField(max_length=6, null=True)
    ano_prop = models.CharField(max_length=6, null=True)
    dia_proposta = models.DateTimeField(null=True)
    cod_orgao = models.CharField(max_length=200, null=True)
    desc_orgao = models.CharField(max_length=200, null=True)
    modalidade = models.CharField(max_length=200, null=True)
    identif_proponente = models.CharField(max_length=25, null=True)
    nm_proponente = models.CharField(max_length=200, null=True)
    cep_proponente = models.CharField(max_length=15, null=True)
    endereco_proponente = models.CharField(max_length=500, null=True)
    bairro_proponente = models.CharField(max_length=200, null=True)
    nm_banco = models.CharField(max_length=100, null=True)
    situacao_conta = models.CharField(max_length=100, null=True)
    situacao_projeto_basico = models.CharField(max_length=250, null=True)
    sit_proposta = models.CharField(max_length=150, null=True)
    dia_inic_vigencia_proposta = models.DateTimeField(null=True)
    dia_fim_vigencia_proposta = models.DateTimeField(null=True)
    objeto_proposta =  models.CharField(max_length=8000, null=True)
    vl_global_prop = models.CharField(max_length=30, null=True)
    vl_repasse_prop = models.CharField(max_length=30, null=True)
    vl_contrapartida_prop = models.CharField(max_length=30, null=True)

    #subject = models.ForeignKey(View_Subject)

    def publish_v_emendas_proposta(self):
        self.save()

    def __str__(self):
        return self.nr_proposta

class v_emendas_emenda_proposta(models.Model):
    id_proposta = models.ForeignKey(v_emendas_proposta, db_column='id_proposta', null=False)
    cod_emenda =   models.CharField(max_length=15 , null=True)

    def publish_v_emendas_emenda_proposta(self):
        self.save()

    def __str__(self):
        return self.cod_emenda

class v_emendas_convenio(models.Model):
    id_proposta = models.ForeignKey(v_emendas_proposta, db_column='id_proposta')
    nr_convenio = models.CharField(primary_key=True, max_length=10)

    def publish_v_emendas_convenio(self):
        self.save()

    def __str__(self):
        return self.nr_convenio

class v_emendas_dados_cadastrais(models.Model):
    ano_selecao = models.CharField(max_length=20, null=True)
    ano_contratacao = models.CharField(max_length=20, null=True)
    exercicio_orcamentario = models.CharField(max_length=20, null=True)
    data_assinatura = models.CharField(max_length=40, null=True)
    data_vigencia = models.CharField(max_length=40, null=True)
    n_convenio_siconv = models.CharField(max_length=40, null=True)
    n_convenio_siafi = models.ForeignKey(v_emendas_convenio, db_column='n_convenio_siafi', null=True)
    uf = models.CharField(max_length=5, null=True)
    gidur = models.CharField(max_length=200, null=True)
    redur = models.CharField(max_length=200, null=True)
    operacao = models.CharField(max_length=200, null=True)
    dv = models.CharField(max_length=200, null=True)
    valor_contrapartida = models.CharField(max_length=20, null=True)
    valor_repasse = models.CharField(max_length=20, null=True)
    total_investimento = models.CharField(max_length=20, null=True)
    valor_desembolsado = models.CharField(max_length=20, null=True)
    prazo_execucao = models.CharField(max_length=200, null=True)
    populacao_beneficiada = models.CharField(max_length=200, null=True)
    gestor = models.CharField(max_length=200, null=True)
    programa = models.CharField(max_length=200, null=True)
    cod_modalidade = models.CharField(max_length=200, null=True)
    modalidade = models.CharField(max_length=200, null=True)
    cod_objetivo = models.CharField(max_length=200, null=True)
    objetivo = models.CharField(max_length=8000, null=True)
    objeto = models.CharField(max_length=8000, null=True)
    convenente = models.CharField(max_length=200, null=True)
    cnpj_convenente = models.CharField(max_length=200, null=True)
    cod_municipio = models.CharField(max_length=200, null=True)
    tomador = models.CharField(max_length=200, null=True)
    municipio_beneficiado = models.CharField(max_length=200, null=True)
    emenda_parlamentar = models.CharField(max_length=200, null=True)
    comunidade_solidaria = models.CharField(max_length=200, null=True)
    calamidade_publica = models.CharField(max_length=200, null=True)
    cod_cosif = models.CharField(max_length=200, null=True)
    cod_programa = models.CharField(max_length=200, null=True)
    cod_situacao_contrato = models.CharField(max_length=200, null=True)
    situacao_contrato = models.CharField(max_length=500, null=True)
    cod_situacao_obra = models.CharField(max_length=200, null=True)
    situacao_obra = models.CharField(max_length=800, null=True)
    contador = models.CharField(max_length=200, null=True)

    def publish_v_emendas_dados_cadastrais(self):
        self.save()

    def __str__(self):
        return self.n_convenio_siconv

class v_emendas_parlamentar_por_orgao(models.Model):
    cod_autor = models.ForeignKey(v_emendas_autor, db_column='cod_autor', null=False)
    nom_orgao =  models.CharField(max_length = 200 ,null=True)
    num_emendas =  models.IntegerField(null=True)

    def publish_v_emendas_parlamentar_por_orgao(self):
        self.save()

    def __str__(self):
        return self.nom_orgao
