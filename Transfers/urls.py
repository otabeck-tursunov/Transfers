from django.contrib import admin
from django.urls import path

from mainApp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
    path('clubs/', clubs, name='clubs'),
]
