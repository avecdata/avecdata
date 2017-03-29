# -*- coding: utf-8 -*-
'''
Created on 28 de mar de 2017

@author: theogenes
'''
from django.utils import timezone
import datetime
import calendar

def add_months(input_date, months):
    
    month = input_date.month-1 + months
    year = int(input_date.year + month/12)
    month = month%12 + 1
    day = min(input_date.day,calendar.monthrange(year, month)[1])
    
    return datetime.datetime(year, month, day, input_date.hour, input_date.minute, input_date.second, input_date.microsecond, tzinfo=input_date.tzinfo)