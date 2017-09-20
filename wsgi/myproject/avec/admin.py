# -*- coding: utf-8 -*-
from django.contrib import admin
from .models import Post, Subject, Themes, Keywords, Subject_detail, Reports, Price, Order, Dashboard, SimpleDashboard, tabSimple, Paineis, tabPaineis, View_Client, View_Themes, View_Subject, View_Subject_detail, v_fns_cidade
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django.utils.text import force_text

class PriceAdmin(admin.ModelAdmin):
    list_display = ['country_code', 'country_name', 'pvalue', 'group']

class OrderAdmin(admin.ModelAdmin):
    list_display = ['status', 'payment_option', 'order_key', 'price', 'user', 'amount']

class tabSimpleInline(admin.StackedInline):
    model = tabSimple
    extra = 0
    fields = ["get_edit_link", "title", "subtitle", "footer", "html", "titulo", "indicador", "descricao", "fonte", "metodo_calculo", "categorizacao", "periodicidade", "periodos_disponiveis", "notas", "elaboracao", "origem"]
    readonly_fields = ["get_edit_link"]

    def get_edit_link(self, obj=None):
        if obj.pk:  # if object has already been saved and has a primary key, show link to it
            url = reverse('admin:%s_%s_change' % (obj._meta.app_label, obj._meta.model_name), args=[force_text(obj.pk)])
            return """<a href="{url}">{text}</a>""".format(
                url=url,
                text=_("Edit this %s separately") % obj._meta.verbose_name,
            )
        return _("(save and continue editing to create a link)")
    get_edit_link.short_description = _("Edit link")
    get_edit_link.allow_tags = True

@admin.register(SimpleDashboard)
class SimpleDashboardAdmin(admin.ModelAdmin):
    save_on_top = True
    fields = ["title", "text", "created_date", "published_date", "subject", "subject_detail", "keywords", "group", "open"]
    inlines = [tabSimpleInline]

@admin.register(tabSimple)
class tabSimpleAdmin(admin.ModelAdmin):
    save_on_top = True
    fields = ["title", "subtitle", "footer", "html", "titulo", "indicador", "descricao", "fonte", "metodo_calculo", "categorizacao", "periodicidade", "periodos_disponiveis", "notas", "elaboracao", "origem"]

class tabPaineisInline(admin.StackedInline):
    model = tabPaineis
    extra = 0
    fields = ["get_edit_link", "title", "subtitle", "footer", "html", "titulo", "indicador", "descricao", "fonte", "metodo_calculo", "categorizacao", "periodicidade", "periodos_disponiveis", "notas", "elaboracao", "origem"]
    readonly_fields = ["get_edit_link"]

    def get_edit_link(self, obj=None):
        if obj.pk:  # if object has already been saved and has a primary key, show link to it
            url = reverse('admin:%s_%s_change' % (obj._meta.app_label, obj._meta.model_name), args=[force_text(obj.pk)])
            return """<a href="{url}">{text}</a>""".format(
                url=url,
                text=_("Edit this %s separately") % obj._meta.verbose_name,
            )
        return _("(save and continue editing to create a link)")
    get_edit_link.short_description = _("Edit link")
    get_edit_link.allow_tags = True

@admin.register(Paineis)
class PaineisAdmin(admin.ModelAdmin):
    save_on_top = True
    fields = ["title", "text", "created_date", "published_date", "subject", "subject_detail", "keywords", "group", "open", "external_files"]
    inlines = [tabPaineisInline]

@admin.register(tabPaineis)
class tabPaineisAdmin(admin.ModelAdmin):
    save_on_top = True
    fields = ["title", "subtitle", "footer", "html", "titulo", "indicador", "descricao", "fonte", "metodo_calculo", "categorizacao", "periodicidade", "periodos_disponiveis", "notas", "elaboracao", "origem"]

admin.site.register(Post)
admin.site.register(Dashboard)
admin.site.register(Reports)
admin.site.register(Subject)
admin.site.register(Subject_detail)
admin.site.register(Themes)
admin.site.register(Keywords)
admin.site.register(Price, PriceAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(View_Client)
admin.site.register(View_Subject)
admin.site.register(View_Subject_detail)
admin.site.register(View_Themes)
admin.site.register(v_fns_cidade)
