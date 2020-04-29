from django.db import models

# Create your models here.
class Location(models.Model):
    name = models.CharField(max_length=30, null=False, blank=False)
    shortname = models.CharField(max_length=10, null=False, blank=False)
    postcode = models.IntegerField(max_length=10, null=False, blank=False)
    code = models.IntegerField(max_length=10, null=False, blank=False)
    location_type = models.CharField(max_length=20, null=False, blank=False)
    parent = models.ForeignKey('locations.Location', on_delete=models.SET_NULL)
    latitude = models.FloatField(max_length=20, null=False, blank=False)
    longitude = models.BigIntegerField(max_length=20, null=False, blank=False)


class Language(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)

    def __str__(self):
        return self.name
        