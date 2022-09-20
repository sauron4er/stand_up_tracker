from datetime import datetime
import json
from core.api.try_except import try_except
from library.models import Comedian


@try_except
def handle_comedian(request):
    comedian = json.loads(request.POST['comedian'])
    comedian_instance = add_or_edit_comedian(request, comedian)
    return comedian_instance


@try_except
def add_or_edit_comedian(request, comedian):
    try:
        comedian_instance = Comedian.objects.get(pk=comedian['id'])
    except Comedian.DoesNotExist:
        comedian_instance = Comedian()

    comedian_instance.name = comedian['name']
    comedian_instance.country_id = comedian['country']
    comedian_instance.picture = request.FILES['picture']

    if comedian['born'] != '':
        comedian_instance.born = datetime.strptime(comedian['born'], '%Y-%m-%d')
    if comedian['died'] != '':
        comedian_instance.born = datetime.strptime(comedian['died'], '%Y-%m-%d')
    if comedian['wiki'] != '':
        comedian_instance.wiki = comedian['wiki']
    if comedian['id'] == 0:
        comedian_instance.added_by = request.user.account

    comedian_instance.save()
    return comedian_instance
