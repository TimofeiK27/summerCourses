from django.urls import path
from . import views
urlpatterns = [
	path("", views.index),
	path("about-us", views.aboutus),
	path("classes", views.classes),
	path("calendar", views.calendar),
	path("student-projects", views.student_projects),
	path("student-projects/<str:stu>", views.student_website),
	# path("student-videos", views.student_videos)
	# API Routes
#    path("translations", views.translate, name="translate"),
]