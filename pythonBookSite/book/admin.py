from django.contrib import admin

from .models import Chapter, Section, Article


class SectionInline(admin.TabularInline):
    model = Section
    
    
@admin.register(Chapter)
class ChapterAdmin(admin.ModelAdmin):
    list_display = ('name', 'serial_number')
    inlines = [SectionInline]


class ArticleInline(admin.TabularInline):
    model = Article
    
    
@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    list_display = ('name', 'serial_number', 'parent_chapter')
    inlines = [ArticleInline]
    list_filter = ('parent_chapter',)    
    
    
@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'serial_number', 'parent_section')
    list_filter = ('parent_section',)
    