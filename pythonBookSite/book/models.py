from django.db import models


class Chapter(models.Model):
    "Part contains several sections"
    name = models.CharField(max_length=100)


class Section(models.Model):
    "Section contains several articles"
    name = models.CharField(max_length=100)
    chapter = models.ForeignKey(Chapter, related_name='section1', blank=True, 
                                null=True, on_delete=models.CASCADE)
    

class Article(models.Model):
    "Article is a topic text"
    name = models.CharField(max_length=100)
    section = models.ForeignKey(Section, related_name='article1', blank=True,
                                null=True, on_delete=models.CASCADE)
    text = models.TextField(blank=True, null=True)
