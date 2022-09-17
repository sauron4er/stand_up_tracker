from profile.models import Country


def get_countries_list(request):
    countries = [{
        'id': country.id,
        'name': country.name
    } for country in Country.objects
        .filter(name__icontains=request.POST['filter'])
        .filter(is_active=True)]
    return countries
