from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import reverse
from . import templates
# Create your views here.

def index(request):
	return render(request,"infoSite/index.html")
	#return HttpResponse('test')
