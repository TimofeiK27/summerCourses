from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import reverse
from . import templates
# Create your views here.

def index(request):
	return render(request,"infoSite/index.html",{

	})



def aboutus(request):
	return render(request,"infoSite/about-us.html")

def classes(request):
	return render(request,"infoSite/classes.html")

def contactus(request):
	return render(request,"infoSite/contact-us.html")

