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

def students(request):
    return render(request, "students.html")

def student(request, stu):
    return render(request, "student-websites/" + stu + ".html")

# images(request):
#    return JsonResponse({"funtime"}, status=201)
