from django.db import models
from django.utils.translation import gettext_lazy as _


class Institution(models.Model):

    class InstitutionType(models.TextChoices):
        school  = 'School',  _('School')
        college = 'College', _('College')
        other   = 'Other',   _('Other')

    name = models.CharField(
        max_length = 50,
        null = False,
        blank = False,
    )
    institution_type = models.CharField(
        choices = InstitutionType.choices,
        max_length = 50, 
        editable = False,
        null = False,
    )
    location = models.ForeignKey(
        'locations.Location',
        null = False,
        on_delete = models.CASCADE,
    )

    def __str__(self):
        return self.name


class Career(models.Model):
    name = models.CharField(
        max_length = 100,
        null = False,
        blank = False,
    )
    institution = models.ForeignKey(
        'institutions.Institution',
        null = False,
        on_delete = models.CASCADE
    )

    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(
        max_length = 100,
        null = False,
        blank = False
    )
    institution = models.ForeignKey(
        'institutions.Institution',
        null = False,
        on_delete = models.CASCADE
    )

    def __str__(self):
        return self.name