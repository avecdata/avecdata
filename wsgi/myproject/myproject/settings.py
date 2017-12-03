"""
Django settings for myproject project.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
DJ_PROJECT_DIR = os.path.dirname(__file__)
BASE_DIR = os.path.dirname(DJ_PROJECT_DIR)
WSGI_DIR = os.path.dirname(BASE_DIR)
REPO_DIR = os.path.dirname(WSGI_DIR)
DATA_DIR = os.environ.get('OPENSHIFT_DATA_DIR', BASE_DIR)

import sys
sys.path.append(os.path.join(REPO_DIR, 'libs'))
import secrets
SECRETS = secrets.getter(os.path.join(DATA_DIR, 'secrets.json'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = SECRETS['secret_key']
SECRET_RECOVERY_EMAIL_KEY = 'avecdatapl@taformadedadossetoriais'

# SECURITY WARNING: don't run with debug turned on in production!
#DEBUG = os.environ.get('DEBUG') == 'True'
DEBUG = True

from socket import gethostname
ALLOWED_HOSTS = [
    gethostname(), # For internal OpenShift load balancer security purposes.
    os.environ.get('OPENSHIFT_APP_DNS'), # Dynamically map to the OpenShift gear name.
    #'example.com', # First DNS alias (set up in the app)
    #'www.example.com', # Second DNS alias (set up in the app)
]


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.postgres',
    'avec',
    'chartit',
	'accounts',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.google',
	'widget_tweaks',
	'django.contrib.sites',
    'paypal.standard.ipn',
)

SITE_ID = 4

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'avec.middleware.AVECMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

X_FRAME_OPTIONS = 'ALLOW'

# GETTING-STARTED: change 'myproject' to your project name:
ROOT_URLCONF = 'myproject.urls'

# Ensure the SITE_ID is defined
SITE_ID = 2

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'myproject.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    'default': {
        #'ENGINE': 'django.db.backends.sqlite3',
        #'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'avecdatadb',
        'USER': 'postgres',
        'PASSWORD': '@prev',
        'HOST': 'localhost',
        'PORT': '',
    }
}

SOCIALACCOUNT_PROVIDERS = {
    'facebook': {
        'METHOD': 'oauth2',
        'SCOPE': ['email', 'public_profile', 'user_friends'],
#         'AUTH_PARAMS': {'auth_type': 'reauthenticate'},
        'AUTH_PARAMS': {},
        'FIELDS': [
            'id',
            'email',
            'name',
            'first_name',
            'last_name',
            'verified',
            'locale',
            'timezone',
            'link',
            'gender',
            'updated_time',
        ],
        'LOCALE_FUNC': lambda request: 'pt_BR',
        'EXCHANGE_TOKEN': True,
        'LOCALE_FUNC': 'path.to.callable',
        'VERIFIED_EMAIL': False,
        'VERSION': 'v2.8',
    },
    'google': {
        'METHOD': 'oauth2',
        'SCOPE': [
            'profile',
            'email',
        ],
        'AUTH_PARAMS': {
            'access_type': 'online',
        }
    }
}

ACCOUNT_ADAPTER = 'avec.views.AccountAdapter'
SOCIALACCOUNT_ADAPTER = 'avec.views.SocialAccountAdapter'

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

#LANGUAGE_CODE = 'en-us'
LANGUAGE_CODE = 'pt-br'

TIME_ZONE = 'America/Sao_Paulo'

USE_I18N = True

USE_L10N = True

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATIC_URL = '/static/'
ADMIN_MEDIA_PREFIX = '/static/admin/'
STATIC_ROOT = os.path.join(WSGI_DIR, 'static')
MEDIA_ROOT = os.path.join(STATIC_ROOT, 'img')
LOGIN_URL = 'login'
LOGIN_REDIRECT_URL='/'
AUTH_USER_MODEL = 'accounts.User'

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'accounts.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
)

#-----e-mail configuration--------------
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'mail.avecdata.com'
EMAIL_HOST_USER = 'contato@avecdata.com'
EMAIL_HOST_PASSWORD = 'Lulurap10!'
EMAIL_PORT = 465
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = 'contato@avecdata.com'
SERVER_EMAIL = 'contato@avecdata.com'

#-----paypal configuration--------------
PAYPAL_TEST = False
PAYPAL_EMAIL = 'daniel.porangaba@avecdata.com'
# PAYPAL_SUBSCRIPTION_IMAGE = 'https://www.paypalobjects.com/webstatic/en_US/i/btn/png/blue-pill-paypalcheckout-34px.png'
# PAYPAL_SUBSCRIPTION_IMAGE = 'https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_subscribeCC_LG.gif'
PAYPAL_SUBSCRIPTION_IMAGE = STATIC_URL+'img/btn_paypal/'+LANGUAGE_CODE+'.png'

try:
    from .local_settings import *
except ImportError:
    pass

# number formats
DECIMAL_SEPARATOR = ','
THOUSAND_SEPARATOR = '.'
USE_THOUSAND_SEPARATOR = True
NUMBER_GROUPING = 3
