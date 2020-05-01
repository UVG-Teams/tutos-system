from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Location(models.Model):

    class LocationType(models.TextChoices):
        continent     = 'Continent',    _('Continent')  
        country       = 'Country',      _('Country') 
        state         = 'State',        _('State') 
        departament   = 'Departament',  _('Departament') 
        municipality  = 'Municipality', _('Municipality') 
        city          = 'City',         _('City') 
        town          = 'Town',         _('Town') 
        zone          = 'Zone',         _('Zone')  

    name = models.CharField(
        max_length = 30,
        null = False,
        blank = False,
    )
    shortname = models.CharField(
        max_length = 10,
        null = False,
        blank = False,
    )
    postcode = models.CharField(
        max_length = 10,
        null = False,
        blank = False,
    )
    code = models.CharField(
        max_length = 10,
        null = False,
        blank = False,
    )
    location_type = models.CharField(
        choices = LocationType.choices,
        max_length = 50,
        editable = False,
        null = False,
    )
    parent = models.ForeignKey(
        'locations.Location',
        null = True,
        on_delete = models.SET_NULL
    )    
    latitude = models.FloatField(
        max_length = 20,
        null = True,
    )
    longitude = models.FloatField(
        max_length = 20,
        null = True,
    )
    language = models.ForeignKey(
        'locations.Language',
        null = True,
        on_delete = models.SET_NULL,
    )

    def __str__(self):
        return self.name


class Language(models.Model):
    name = models.CharField(
        max_length = 50,
        null = False,
        blank = False,
    )

    def __str__(self):
        return self.name
        