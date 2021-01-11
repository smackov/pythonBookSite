from rest_framework import serializers

from .models import Chapter, Section, Article
  
    
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        
    
class ArticleShortSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    serial_number = serializers.CharField(max_length=8)
    

class SectionSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    serial_number = serializers.CharField(max_length=5)
    child_articles = ArticleShortSerializer(many=True)
    

class ChapterSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    serial_number = serializers.CharField(max_length=2)
    child_sections = SectionSerializer(many=True)
    