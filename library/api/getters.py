from library.models import Streaming, Comedian


def get_comedians_list(search_filter='', page=1):
    comedians = Comedian.objects.filter(is_active=True)
    if search_filter != '':
        comedians = comedians.filter(name__icontains=search_filter)

    comedians_list = [{
        'id': comedian.id,
        'name': comedian.name,
        'born': '',
        'died': '',
        'rating_global': '',
        'rating_user': '',
        'picture': '',
        'wiki': '',
        'specials': []
    } for comedian in comedians]


    # born: 'April 29, 1954',
    # rating_global: '4.7',
    # rating_user: '5',
    # died: '',
    # picture: 'Jerry_Seinfeld.jpg',
    # wiki_url: 'https://en.wikipedia.org/wiki/Jerry_Seinfeld',

    return comedians_list


def get_streaming_services(search_filter):
    streamings = Streaming.objects.filter(is_active=True)
    if search_filter != '':
        streamings = streamings.filter(name__icontains=search_filter)

    streamings_list = [{
        'id': streaming.id,
        'name': streaming.name
    } for streaming in streamings]

    return streamings_list
