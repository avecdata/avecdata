# -*- coding: utf-8 -*-
'''
Created on 28 de mar de 2017

@author: theogenes
'''
from django.utils import timezone
import datetime
import calendar
from avec.models import Group

def add_time(input_date, time_unit, quantity):
    
    time_dict = {'year': add_year, 'month': add_months, 'days': add_days, 'hour': add_hours, 'minute': add_minutes, 'seconds': add_seconds}
    
    date_time_added = time_dict[time_unit](input_date, quantity)
    
    year = date_time_added.year
    month = date_time_added.month
    day = date_time_added.day
    
    hour = date_time_added.hour
    minute = date_time_added.minute
    second = date_time_added.second
    msec = date_time_added.microsecond
    tzinfo = date_time_added.tzinfo
    
    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_seconds(input_date, seconds):
    
    second = input_date.second
    
    minutes = int((seconds+second)/60)
    date_seconds_added = add_minutes(input_date, minutes)
    seconds_added = seconds+second
    
    if(seconds_added >= 60):
        seconds_added = seconds_added%60
    
    year = date_seconds_added.year
    month = date_seconds_added.month
    day = date_seconds_added.day
    
    hour = date_seconds_added.hour
    minute = date_seconds_added.minute
    second = seconds_added
    msec = date_seconds_added.microsecond
    tzinfo = date_seconds_added.tzinfo
    
    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_minutes(input_date, minutes):
    
    minute = input_date.minute
    
    hours = int((minutes+minute)/60)
    date_minutes_added = add_hours(input_date, hours)
    minutes_added = minutes+minute
    
    if((minutes+minute) >= 60):
        minutes_added = (minutes+minute)%60
    
    year = date_minutes_added.year
    month = date_minutes_added.month
    day = date_minutes_added.day
    
    hour = date_minutes_added.hour
    minute = minutes_added
    second = date_minutes_added.second
    msec = date_minutes_added.microsecond
    tzinfo = date_minutes_added.tzinfo
    
    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_hours(input_date, hours):
    
    hour = input_date.hour
    
    days = int((hours+hour)/24)
    
    date_days_added = add_days(input_date, days)
    hours_added = hours+hour
    
    if((hours+hour) >= 24):
        hours_added = (hours+hour)%24
    
    year = date_days_added.year
    month = date_days_added.month
    day = date_days_added.day
    
    hour = hours_added
    minute = date_days_added.minute
    second = date_days_added.second
    msec = date_days_added.microsecond
    tzinfo = date_days_added.tzinfo
    
    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_days(input_date, days):
    
    days_per_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    year = input_date.year
    month = input_date.month
    day = input_date.day
    
    hour = input_date.hour
    minute = input_date.minute
    second = input_date.second
    msec = input_date.microsecond
    tzinfo = input_date.tzinfo
    
    for x in range(0, days):
        day = day +1
        if (day > days_per_month[month-1]) or (month==2 and day==29 and not calendar.isleap(year)):
            day = 1
            month = month + 1
            
            if(month == 13):
                month = 1
                year = year + 1
    
    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def add_months(input_date, months):
    
    month = input_date.month-1 + months
    year = int(input_date.year + month/12)
    month = month%12 + 1
    day = min(input_date.day,calendar.monthrange(year, month)[1])
    
    return datetime.datetime(year, month, day, input_date.hour, input_date.minute, input_date.second, input_date.microsecond, tzinfo=input_date.tzinfo)

def add_year(input_date, num_years):
    
    year = input_date.year
    month = input_date.month
    day = input_date.day
    
    hour = input_date.hour
    minute = input_date.minute
    second = input_date.second
    msec = input_date.microsecond
    tzinfo = input_date.tzinfo
    
    year = year + num_years
    
    return datetime.datetime(year, month, day, hour, minute, second, msec, tzinfo=tzinfo)

def check_plan_validity(user_session):
    
    now = timezone.now()
    
    if user_session is not None:
        #print(user_session)
        basic_group = Group.objects.get(id=1)
        
        if(now > user_session.date_expiration and len(user_session.groups.filter(name=basic_group.name)) < 1 and len(user_session.groups.filter(id=4)) < 1):
            
            pro_group = Group.objects.get(id=2)
            corp_group = Group.objects.get(id=3)
#             adm_group = Group.objects.get(id=4)
            
            basic_group.user_set.remove(user_session)
            pro_group.user_set.remove(user_session)
            corp_group.user_set.remove(user_session)
#             adm_group.user_set.remove(user_session)
            
            basic_group.user_set.add(user_session)
            
            return False
    else:
        return False
    
    return True