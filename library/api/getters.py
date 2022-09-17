from library.models import Streaming


def get_streaming_services(filter):
    return [{
        'id': streaming.id,
        'name': streaming.name
    } for streaming in Streaming.objects
        .filter(name__icontains=filter)
        .filter(is_active=True)
    ]
