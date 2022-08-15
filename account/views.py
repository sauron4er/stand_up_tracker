from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from datetime import datetime, date, timedelta
from django.utils.timezone import make_aware
from django.http import HttpResponse
from django.shortcuts import render
from django.utils import timezone
import json


@login_required(login_url='login')
def profile(request):
    if request.method == 'GET':
        return render(request, 'account/profile/index.html')
