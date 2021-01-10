from rest_framework import generics, permissions

from .models import Chapter, Section, Article
from .serializers import (
    ArticleSerializer, 
    ChapterSerializer,
)


class ArticleDetailView(generics.RetrieveAPIView):
    "Get the article by primary key"
    permission_classes = [permissions.AllowAny]
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    

class ChapterListView(generics.ListAPIView):
    "Get the list of chapters with nested index of sections and articles"
    permission_classes = [permissions.AllowAny]
    serializer_class = ChapterSerializer
    queryset = Chapter.objects.all()
    