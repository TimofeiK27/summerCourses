from django.urls import path
from . import views
urlpatterns = [
	path("", views.index),
	path("about-us", views.aboutus),
	path("classes", views.classes),
	path("sign-up", views.signup),
	# API Routes
    #path("images", views.images, name="image"),
]