from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import get_object_or_404
from django.db.models import Prefetch
from core.api.try_except import try_except
from library.models import Streaming, Comedian, Special, User_Comedian_Rating, User_Special_Rating


@try_except
def get_comedians_list(user, search_filter='', page=0):
    specials_queryset = Special.objects.filter(is_active=True)
    user_comedian_ratings_queryset = User_Comedian_Rating.objects.filter(user=user)
    user_special_ratings_queryset = User_Special_Rating.objects.filter(user=user)

    comedians = Comedian.objects \
        .prefetch_related(Prefetch('specials', queryset=specials_queryset, to_attr='active_specials'))\
        .prefetch_related(Prefetch('user_ratings', queryset=user_comedian_ratings_queryset, to_attr='user_comedian_rating'))\
        .prefetch_related(Prefetch('specials__user_ratings', queryset=user_special_ratings_queryset, to_attr='user_special_rating'))\
        .filter(is_active=True)

    if search_filter != '':
        comedians = comedians.filter(name__icontains=search_filter)

    comedians, pages_count, page = paginate(comedians, page)

    comedians_list = [{
        'id': comedian.id,
        'name': comedian.name,
        # 'born': '',
        # 'died': '',
        'rating_global': str(comedian.rating),
        'rating_user': get_user_comedian_rating(user, comedian),
        'picture': comedian.picture.name,
        # 'wiki': '',
        'specials': [{
            'id': special.id,
            'name': special.name,
            'rating_global': str(special.rating),
            'rating_user': get_user_streaming_rating(user, special)
            # 'poster': special.poster.name,
            # 'imdb': special.imdb_url,
            # 'duration': special.duration,
            # 'release_date': special.release_date,
        } for special in comedian.active_specials]
    } for comedian in comedians]

    return {'comedians': comedians_list, 'pagesCount': pages_count, 'page': page}


@try_except
def paginate(comedians, page):
    items_per_page = 20
    paginator = Paginator(comedians, items_per_page)

    try:
        comedians_page = paginator.page(int(page) + 1)
    except PageNotAnInteger:
        comedians_page = paginator.page(1)
    except EmptyPage:
        comedians_page = paginator.page(1)

    return comedians_page.object_list, paginator.num_pages, page


@try_except
def get_user_comedian_rating(user, comedian):
    try:
        rating_instance = User_Comedian_Rating.objects \
            .get(comedian=comedian, user=user)
        return str(rating_instance.rating)
    except User_Comedian_Rating.DoesNotExist:
        return ''


@try_except
def get_user_streaming_rating(user, special):
    try:
        rating_instance = User_Special_Rating.objects\
            .get(special=special, user=user)
        return str(rating_instance.rating)
    except User_Special_Rating.DoesNotExist:
        return ''


@try_except
def get_streaming_services(search_filter):
    streamings = Streaming.objects.filter(is_active=True)
    if search_filter != '':
        streamings = streamings.filter(name__icontains=search_filter)

    streamings_list = [{
        'id': streaming.id,
        'name': streaming.name
    } for streaming in streamings]

    return streamings_list


@try_except
def get_comedian_instance(pk):
    try:
        return Comedian.objects.get(pk=pk)
    except Comedian.DoesNotExist:
        return Comedian()


@try_except
def get_special_instance(pk):
    try:
        return Special.objects.get(pk=pk)
    except Special.DoesNotExist:
        return Special()
