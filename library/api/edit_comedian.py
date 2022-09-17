from django.contrib.auth.decorators import login_required
from datetime import datetime
import json
from library.models import Comedian


def handle_comedian(request):
    comedian = json.loads(request.POST['comedian'])
    specials = comedian['specials']

    comedian_instance = add_or_edit_comedian(comedian, request.FILES['picture'])

    for index, special in enumerate(specials):
        if special['status'] == 'new':
            add_special(special, request.FILES[index])
        elif special['status'] == 'changed':
            edit_special(special, request.FILES[index])

    return -1


def add_or_edit_comedian(comedian, picture):
    try:
        comedian_instance = Comedian.objects.get(pk=comedian['id'])
    except Comedian.DoesNotExist:
        comedian_instance = Comedian()

    comedian_instance.name = comedian['name']

    born = datetime.strptime(comedian['born'], '%Y-%m-%d')
    comedian_instance.born = comedian['born']

    # comedian.phone = request.POST['phone'] if request.POST['phone'] != '' else None
    # comedian.address = request.POST['address'] if request.POST['address'] != '' else None
    # comedian.note = request.POST['note'] if request.POST['note'] != '' else None
    # comedian.added_by_id = request.user.id

    comedian_instance.save()

    return comedian_instance

    # name
    # country
    # ?born
    # ?died
    # ?wiki
    # picture
    # added_by
    pass


@login_required(login_url='login')
def add_special(special, picture):
    a = 1
    # name
    # ?comedian
    # ?duration
    # ?release_date
    # ?poster
    # ?imdb
    # ?streaming
    # added_by

    pass


@login_required(login_url='login')
def edit_special(special, picture):
    a = 1
    pass
