# -*- coding: utf-8 -*-
from django.contrib import admin
from .models import Post, Subject, Themes, Keywords, Subject_detail, Reports, Price, Order, Dashboard, Dashsource

class PriceAdmin(admin.ModelAdmin):
    list_display = ['country_code', 'country_name', 'pvalue', 'group']
    
class OrderAdmin(admin.ModelAdmin):
    list_display = ['status', 'payment_option', 'order_key', 'price', 'user', 'amount']
  
admin.site.register(Post)
admin.site.register(Dashboard)
admin.site.register(Reports)
admin.site.register(Subject)
admin.site.register(Subject_detail)
admin.site.register(Themes)
admin.site.register(Keywords)
admin.site.register(Price, PriceAdmin)
admin.site.register(Order, OrderAdmin)