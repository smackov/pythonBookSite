from django.shortcuts import render


def index(request, *args, **kwargs):
    "Start endpoint containing general JS script."
    return render(request, 'frontend/index.html')
