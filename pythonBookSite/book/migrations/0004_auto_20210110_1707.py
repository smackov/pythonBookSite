# Generated by Django 3.1.5 on 2021-01-10 17:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0003_auto_20210110_1659'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='parent_section',
            new_name='section',
        ),
        migrations.RenameField(
            model_name='section',
            old_name='parent_chapter',
            new_name='chapter',
        ),
    ]
