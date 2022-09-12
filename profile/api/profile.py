from profile.models import Country


def get_countries_list():
    countries = [{
        'id': country.id,
        'name': country.name
    } for country in Country.objects.filter(is_active=True)]
    return countries
