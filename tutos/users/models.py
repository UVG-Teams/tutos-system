from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _


class UserDetail(models.Model):

    class Gender(models.TextChoices):
        male 	= 'M', _('Male')
        female 	= 'F', _('Female') 

    user = models.ForeignKey(
        User,
        null = False,
        on_delete = models.CASCADE,
    )
    language = models.ForeignKey(
        'locations.Language',
        null = True,
        on_delete = models.SET_NULL,
    )
    phone = models.PositiveIntegerField()
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

    def __str__(self):
        return User.objects.get( pk = self.user ).first_name