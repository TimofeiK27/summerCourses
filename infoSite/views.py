from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import reverse
from . import templates
from django.http import JsonResponse

# Create your views here.

def index(request):
    return render(request, "index.html", {

    })


def aboutus(request):
    return render(request, "about-us.html")


def classes(request):
    return render(request, "classes.html")


def signup(request):
    return render(request, "sign-up.html")

def translate(request):
    return JsonResponse([1, 2, 3, 4], status=201, safe=False)
