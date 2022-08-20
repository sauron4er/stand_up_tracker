from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required(login_url='login')
def profile(request):
    if request.method == 'GET':
        return render(request, 'profile/index.html')
