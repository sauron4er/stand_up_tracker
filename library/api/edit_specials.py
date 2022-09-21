from django.utils.dateparse import parse_duration
from datetime import datetime
import json
from core.api.try_except import try_except
from library.models import Comedian, Special


@try_except
def handle_specials(request, comedian_instance):
    comedian = json.loads(request.POST['comedian'])
    specials = comedian['specials']

    for index, special in enumerate(specials):
        if special['status'] in ['new', 'changed']:
            add_or_edit_special(request, special, index, comedian_instance)

    return comedian_instance


@try_except
def add_or_edit_special(request, special, index, comedian_instance=None):
    special_instance = get_special_instance(special['id'])

    special_instance.name = special['name']
    special_instance = edit_duration(special_instance, special['hours'], special['minutes'])

    if str(index) in request.FILES:
        special_instance.poster = request.FILES[str(index)]
    if comedian_instance:
        special_instance.comedian_id = comedian_instance.id
    if special['release_date'] != '':
        special_instance.release_date = datetime.strptime(special['release_date'], '%Y-%m-%d')
    if special['streaming'] != '':
        special_instance.streaming_id = special['streaming']
    if special['id'] == 0:
        special_instance.added_by = request.user.account

    special_instance.save()
    return special_instance.id


@try_except
def get_special_instance(pk):
    try:
        special_instance = Special.objects.get(pk=pk)
    except Special.DoesNotExist:
        special_instance = Special()
    return special_instance


@try_except
def edit_duration(special_instance, hours, minutes):
    duration = get_duration(hours, minutes)
    if duration:
        special_instance.duration = duration
    return special_instance


@try_except
def get_duration(hours, minutes):
    hours = hours if hours != '' else 0
    minutes = minutes if minutes != '' else 0

    if hours == minutes == 0:
        return None
    return parse_duration('0 ' + str(hours) + ':' + str(minutes) + ':0.000000')
