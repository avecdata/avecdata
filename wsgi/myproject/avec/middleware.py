# coding=utf-8

'''
Created on 30 de mar de 2017

@author: theogenes
'''
import requests
from django.conf import settings
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from avec import utils

class AVECMiddleware(object):

    def process_request(self, request):
        #print('antes da resposta')
        try:
            if request.user.is_authenticated():
                user_session = request.user
#                 print("avec_middleware_session_login_"+str(user_session.id))
                utils.check_plan_validity(user_session)
        
#             return HttpResponseRedirect('/login/?next=/adm')
                
        except Exception:
            print("Session exception")
        
#         print('depois da resposta')

        return None