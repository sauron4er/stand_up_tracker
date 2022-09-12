from django.contrib.auth.decorators import login_required
from django.shortcuts import render, HttpResponse
import json
from profile.api.profile import get_countries_list


@login_required(login_url='login')
def profile(request):
    if request.method == 'GET':
        return render(request, 'profile/index.html')


@login_required(login_url='login')
def get_countries(request):
    return HttpResponse(json.dumps(get_countries_list()))
