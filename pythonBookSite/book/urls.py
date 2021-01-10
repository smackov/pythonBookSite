from django.urls import path
from . import api

urlpatterns = [
    path('api/article/<int:pk>/', api.ArticleDetailView.as_view()),
    path('api/chapters/', api.ChapterListView.as_view()),
]