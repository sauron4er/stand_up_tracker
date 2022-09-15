from django.contrib.auth.decorators import login_required
from django.shortcuts import render, HttpResponse
import json
from library.api.edit_comedian import handle_comedian


@login_required(login_url='login')
def library(request):
    if request.method == 'GET':
        return render(request, 'library/index.html')


@login_required(login_url='login')
def search(request):
    if request.method == 'GET':
        return render(request, 'library/search/index.html')


@login_required(login_url='login')
def edit_comedian(request):
    if request.method == 'GET':
        return render(request, 'library/edit_comedian/index.html')


@login_required(login_url='login')
def post_comedian(request):
    if request.method == 'POST':
        comedian_id = 1
        # comedian_id = handle_comedian(request)
        return HttpResponse(comedian_id)
