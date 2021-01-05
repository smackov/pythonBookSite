from django.urls import path
from . import api

urlpatterns = [
    path('api/article/<int:pk>/', api.ArticleViewSet.as_view()),
]