from django.urls import path
from . import views
urlpatterns = [
	path("", views.index),
	path("about-us", views.aboutus),
	path("classes", views.classes),
	path("contact-us", views.contactus),
	# API Routes
    #path("images", views.images, name="image"),
]