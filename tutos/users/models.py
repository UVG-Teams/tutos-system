from django.db import models

# Create your models here.

class UserDetail(models.Model):
	user = models.ForeignKey(
        'django.contrib.auth.user',
        null = False,
        on_delete=models.CASCADE
    )
    language = models.ForeignKey(
    	'locations.Language',
    	null = False,
    	on_delete=models.CASCADE
    )
    phone = models.PositiveIntegerField()
    genre = models.CharField(max_length=30)
    is_tutor=models.BooleanField()
    institution=models.ForeignKey(
    	'institutions.Institution',
    	null = False,
    	on_delete= models.CASCADE)
    career = models.ForeignKey(
    	'institutions.Career',
    	null = False,
    	on_delete= models.CASCADE)
    location = models.ForeignKey(
    	'locations.Location',
    	null = False,
    	on_delete=models.CASCADE)