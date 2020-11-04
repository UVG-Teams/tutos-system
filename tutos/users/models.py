from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
from calendars.models import Calendar


class UserDetail(User):
    class Gender(models.TextChoices):
        male 	= 'M', _('Male')
        female 	= 'F', _('Female') 

    language = models.ForeignKey(
        'locations.Language',
        null = True,
        on_delete = models.SET_NULL,
    )
    phone = models.CharField(
        null = True,
        max_length = 15, 
    )
    gender = models.CharField(
        choices = Gender.choices,
        max_length = 30,
        editable = False,
        null = False,
    )
    # TODO: https://pypi.org/project/Pillow/
    # photo = models.ImageField(
    #     null = True,
    # )
    birthdate = models.DateField(
        null = False,
    )
    location = models.ForeignKey(
        'locations.Location',
        null = True,
        on_delete = models.SET_NULL,
    )

    # Custom

    is_tutor = models.BooleanField(
        default = False,
        null = False,
    )
    institution = models.ForeignKey(
        'institutions.Institution',
        null = True,
        on_delete = models.SET_NULL,
    )
    career = models.ForeignKey(
        'institutions.Career',
        null = True,
        on_delete = models.SET_NULL,
    )

    # def save(self, *args, **kwargs):
    #     mainuser = super(UserDetail, self).save(*args, **kwargs)
    #     calendar = Calendar(user = mainuser)
    #     calendar.save()
    

