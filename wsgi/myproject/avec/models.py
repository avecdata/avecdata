# -*- coding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import Group
from django.conf import settings
from django.db.models import Q

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
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)

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
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
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
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
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
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    subject = models.ManyToManyField(Subject , related_name='subparent')            
    subject_detail = models.ManyToManyField(Subject_detail , related_name='subchild')
    keywords = models.ManyToManyField(Keywords, blank=True)
    group = models.ManyToManyField(Group)
    open = models.BooleanField(default=False)
    
    def publish_post(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Reports(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    pdf = models.FileField(upload_to='pdf')
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
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
    pvalue = models.DecimalField(default=0.0, max_digits=5, decimal_places=2, verbose_name='Valor do Plano')
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

    created = models.DateTimeField('Criado em', auto_now_add=True)
    modified = models.DateTimeField('Modificado em', auto_now=True)

#    objects = OrderManager()

    class Meta:
        verbose_name = 'Pedido'
        verbose_name_plural = 'Pedidos'

    def __str__(self):
        return 'Pedido #{}'.format(self.pk)

    def total(self):
    
#         country_slug = settings.LANGUAGE_CODE.split("-")[1]
#         group_id = self.group.id
#         
#         price = Price.objects.filter(Q(country_slug=country_slug) & Q(group_id=group_id))
#         result = price[0].pvalue if price.count() > 1 else 0
        result = self.price.pvalue
        
        return result

    def complete(self):
        self.status = 1
        self.save()

    def paypal(self):
        self.payment_option = 'paypal'
        self.save()
        paypal_dict = {
            'upload': '1',
            'business': settings.PAYPAL_EMAIL,
            'invoice': self.pk,
            'cmd': '_cart',
            'currency_code': 'BRL',
            'charset': 'utf-8',
        }
        index = 1
#         for item in self.items.all():
#             paypal_dict['amount_{}'.format(index)] = '%.2f' % item.price
#             paypal_dict['item_name_{}'.format(index)] = item.product.name
#             paypal_dict['quantity_{}'.format(index)] = item.quantity
#             index = index + 1
        country_slug = settings.LANGUAGE_CODE.split("-")[1]
        
        paypal_dict['amount_{}'.format(index)] = '%.2f' % self.total()
        paypal_dict['item_name_{}'.format(index)] = self.price.group.name+' '+str(country_slug)
        paypal_dict['quantity_{}'.format(index)] = 1
            
        return paypal_dict


# class OrderItem(models.Model):
# 
#     order = models.ForeignKey(Order, verbose_name='Pedido', related_name='items')
#     product = models.ForeignKey('catalog.Product', verbose_name='Produto')
#     quantity = models.PositiveIntegerField('Quantidade', default=1)
#     price = models.DecimalField('Preço', decimal_places=2, max_digits=8)
# 
#     class Meta:
#         verbose_name = 'Item do pedido'
#         verbose_name_plural = 'Itens dos pedidos'
# 
#     def __str__(self):
#         return '[{}] {}'.format(self.order, self.product)


# def post_save_order(instance, **kwargs):
#     if instance.quantity < 1:
#         instance.delete()
# 
# 
# models.signals.post_save.connect(
#      post_save_order, sender=CartItem, dispatch_uid='post_save_order'
# )