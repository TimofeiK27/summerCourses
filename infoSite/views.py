from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import reverse
from . import templates
from django.http import JsonResponse
import os

# Create your views here.

def index(request):
    path = 'infoSite/static/resources/'
    img_list = os.listdir(path + "/English")
    context = {"images": img_list}

    return render(request, "index.html", context)


def aboutus(request):
    return render(request, "about-us.html")


def classes(request):
    return render(request, "classes.html")


# def signup(request):
#     return render(request, "sign-up.html")

def calendar(request):
    return render(request, "calendar.html")

def student_projects(request):
    return render(request, "student-projects.html")

def student_website(request, stu):
    return render(request, "student-websites/" + stu + ".html")

def photos(request):
    path = 'infoSite/static/resources'
    img_list = os.listdir(path + "/photos")
    context = {"images": img_list}
    return render (request, 'photos.html', context)

# def student_videos(request):
#     return render(request, "student-videos.html")

# images(request):
#    return JsonResponse({"funtime"}, status=201)
