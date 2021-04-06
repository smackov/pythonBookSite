from rest_framework import serializers

from .models import Chapter, Section, Article
  
    
class ArticleSerializer(serializers.ModelSerializer):
    """The serializer for Article model."""

    class Meta:
        model = Article
        fields = '__all__'
        
    
class ArticleShortSerializer(serializers.Serializer):
    """
    The serializer for Article model.
    
    This is a short form for displaying the Article model as a 
    nested field.
    """
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    serial_number = serializers.CharField(max_length=8)
    

class SectionSerializer(serializers.Serializer):
    """The serializer for Section model."""
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    serial_number = serializers.CharField(max_length=5)
    child_articles = ArticleShortSerializer(many=True)
    

class ChapterSerializer(serializers.Serializer):
    """The serializer for Chapter model."""
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    serial_number = serializers.CharField(max_length=2)
    child_sections = SectionSerializer(many=True)
    