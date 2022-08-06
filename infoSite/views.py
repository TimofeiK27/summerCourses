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


# def signup(request):
#     return render(request, "sign-up.html")

def calendar(request):
    return render(request, "calendar.html")

def student_websites(request):
    return render(request, "student-websites.html")

def student_website(request, stu):
    return render(request, "student-websites/" + stu + ".html")

def student_videos(request):
    return render(request, "student-videos.html")

# images(request):
#    return JsonResponse({"funtime"}, status=201)
