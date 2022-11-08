from django.contrib.auth.decorators import login_required
from django.shortcuts import render, HttpResponse
from django.db import transaction
import json
from core.api.try_except import try_except
from library.api.getters import get_streaming_services, get_comedians_list, get_comedian_for_editing
from library.api.edit_comedian import handle_comedian, edit_comedian_rating
from library.api.edit_specials import handle_specials, edit_special_rating


@login_required(login_url='login')
def library(request):
    if request.method == 'GET':
        return render(request, 'library/index.html')


@login_required(login_url='login')
def get_comedians(request, page):
    return HttpResponse(json.dumps(get_comedians_list(request.user.account, request.POST['filter'], page)))


@login_required(login_url='login')
def search(request):
    if request.method == 'GET':
        return render(request, 'library/search/index.html')


@transaction.atomic
@login_required(login_url='login')
@try_except
def post_comedian(request):
    if request.method == 'POST':
        comedian_instance = handle_comedian(request)
        handle_specials(request, comedian_instance)
        return HttpResponse(comedian_instance.id)


@login_required(login_url='login')
def edit_comedian(request, comedian_id):
    if request.method == 'GET':
        comedian = get_comedian_for_editing(comedian_id) if comedian_id != '0' else {}
        return render(request, 'library/edit_comedian/index.html',
                      {'comedian': json.dumps(comedian)})


@transaction.atomic
@login_required(login_url='login')
@try_except
def rate_comedian(request):
    if request.method == 'POST':
        edit_comedian_rating(request)
        return HttpResponse('ok')


@transaction.atomic
@login_required(login_url='login')
@try_except
def rate_special(request):
    if request.method == 'POST':
        edit_special_rating(request)
        return HttpResponse('ok')


@login_required(login_url='login')
def get_streamings(request):
    return HttpResponse(json.dumps(get_streaming_services(request.POST['filter'])))
