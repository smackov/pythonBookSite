from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('article/<int:pk>/', views.index),
    path('chapters/', views.index),
]
