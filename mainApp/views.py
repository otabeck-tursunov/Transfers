from django.shortcuts import render

from mainApp.models import Club


def index(request):
    return render(request, 'index.html')


def clubs(request):
    context = {
        'clubs': Club.objects.all()
    }
    return render(request, 'clubs.html', context)