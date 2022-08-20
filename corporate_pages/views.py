from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required(login_url='login')
def subscribe(request):
    if request.method == 'GET':
        return render(request, 'corporate_pages/subscribe/index.html')


@login_required(login_url='login')
def contact_us(request):
    if request.method == 'GET':
        return render(request, 'corporate_pages/contact_us/index.html')
