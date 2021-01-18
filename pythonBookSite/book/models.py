from django.db import models


class Chapter(models.Model):
    "Chapter contains several sections"
    name = models.CharField(max_length=100)
    serial_number = models.CharField(max_length=2, blank=True, null=True)


class Section(models.Model):
    "Section contains several articles"
    name = models.CharField(max_length=100)
    parent_chapter = models.ForeignKey(Chapter, related_name='child_sections', blank=True,
                                null=True, on_delete=models.CASCADE)
    serial_number = models.CharField(max_length=2, blank=True, null=True)


class Article(models.Model):
    "Article is a topic text"
    name = models.CharField(max_length=100)
    parent_section = models.ForeignKey(Section, related_name='child_articles', blank=True,
                                null=True, on_delete=models.CASCADE)
    text = models.TextField(blank=True, null=True)
    content_index = models.TextField(blank=True, null=True)
    serial_number = models.CharField(max_length=5, blank=True, null=True)
