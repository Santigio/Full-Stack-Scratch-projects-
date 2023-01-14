from django.db import models

# Create your models here.
from django.db import models

class Song(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    album = models.CharField(max_length=255, blank=True)
    release_date = models.DateField(null=True, blank=True)
    genre = models.CharField(max_length=255, blank=True)
    album_cover = models.ImageField(upload_to='song_covers/', blank=True, null=True)
    
    def __str__(self):
        return self.title()
