from rest_framework import views, permissions
from rest_framework.response import Response

from .models import Article
from .serializers import ArticleSerializer


# Lead viewset
class ArticleViewSet(views.APIView):
    "Get the article by primary key"
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, pk):
        article = Article.objects.get(id=pk)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    