from django.contrib.auth.decorators import login_required
from django.shortcuts import render
import json
import re


@login_required(login_url='login')
def handle_comedian(request):
    comedian = json.loads(request.POST['comedian'])
    specials = comedian['specials']

    if comedian['id'] == 0:
        add_comedian(comedian, request.FILES['picture'])
    else:
        edit_comedian(comedian, request.FILES['picture'])

    for index, special in enumerate(specials):
        if special['status'] == 'new':
            add_special(special, request.FILES[index])
        elif special['status'] == 'changed':
            edit_special(special, request.FILES[index])

    return -1


@login_required(login_url='login')
def add_comedian(comedian, picture):
    a=1
    pass


@login_required(login_url='login')
def edit_comedian(comedian, picture):
    a = 1
    pass


@login_required(login_url='login')
def add_special(special, picture):
    a = 1
    pass


@login_required(login_url='login')
def edit_special(special, picture):
    a = 1
    pass
