from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import FilteredRelation, Q, Prefetch
from core.api.try_except import try_except
from library.models import Streaming, Comedian, Special


@try_except
def get_comedians_list(search_filter='', page=0):
    # TODO рейтинги

    specials_queryset = Special.objects.filter(is_active=True)
    comedians = Comedian.objects \
        .prefetch_related(Prefetch('specials', queryset=specials_queryset, to_attr='active_specials'))\
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
        'rating_user': '',
        'picture': comedian.picture.name,
        # 'wiki': '',
        'specials': [{
            'id': special.id,
            'name': special.name,
            'rating_global': str(special.rating),
            'rating_user': '',
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
def get_streaming_services(search_filter):
    streamings = Streaming.objects.filter(is_active=True)
    if search_filter != '':
        streamings = streamings.filter(name__icontains=search_filter)

    streamings_list = [{
        'id': streaming.id,
        'name': streaming.name
    } for streaming in streamings]

    return streamings_list
