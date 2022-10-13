from datetime import datetime
import json
from core.api.try_except import try_except
from library.api.getters import get_or_create_comedian_instance
from library.models import User_Comedian_Rating, User_Special_Rating


@try_except
def handle_comedian(request):
    comedian = json.loads(request.POST['comedian'])
    comedian_instance = add_or_edit_comedian(request, comedian)
    return comedian_instance


@try_except
def add_or_edit_comedian(request, comedian):
    comedian_instance = get_or_create_comedian_instance(comedian['id'])

    comedian_instance.name = comedian['name']
    comedian_instance.country_id = comedian['country']
    comedian_instance.picture = request.FILES['picture']

    # TODO Переробити на використання get_or_create,
    #  для цього треба спочатку опрацювати всі поля а потім викликати get_or_create
    # TODO прибрати if __ != '':, для того, щоб могти видалити born, died чи wiki, якщо вони неправильно заповнені

    if comedian['born'] != '':
        comedian_instance.born = datetime.strptime(comedian['born'], '%Y-%m-%d')
    if comedian['died'] != '':
        comedian_instance.died = datetime.strptime(comedian['died'], '%Y-%m-%d')
    if comedian['wiki'] != '':
        comedian_instance.wiki = comedian['wiki']
    if comedian['id'] == 0:
        comedian_instance.added_by = request.user.account

    comedian_instance.save()
    return comedian_instance


@try_except
def edit_comedian_rating(request):
    rating, created = User_Comedian_Rating.objects\
        .get_or_create(comedian_id=request.POST['comedian_id'],
                       user=request.user.account,
                       defaults={'rating': request.POST['rating']})
    rating.rating = request.POST['rating']
    rating.save()
    # TODO edit_comedian_global_rating()




