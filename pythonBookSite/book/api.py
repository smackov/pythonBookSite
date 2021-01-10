from rest_framework import views, permissions
from rest_framework.response import Response
from django.http import Http404

from .models import Article
from .serializers import ArticleSerializer


class ArticleDetailView(views.APIView):
    "Get the article by primary key"
    permission_classes = [permissions.AllowAny]
    
    def get_object(self, pk):
        try:
            return Article.objects.get(pk=pk)
        except Article.DoesNotExist:
            raise Http404
    
    def get(self, request, pk):
        article = self.get_object(pk=pk)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    