from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required(login_url='login')
def library(request):
    if request.method == 'GET':
        return render(request, 'library/index.html')


@login_required(login_url='login')
def search(request):
    if request.method == 'GET':
        return render(request, 'library/search/index.html')


@login_required(login_url='login')
def comedians(request):
    if request.method == 'GET':
        return render(request, 'library/comedians/index.html')


@login_required(login_url='login')
def specials(request):
    if request.method == 'GET':
        return render(request, 'library/specials/index.html')
