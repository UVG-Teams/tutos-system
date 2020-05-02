from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _


class Schedule(models.Model):
    user = models.ForeignKey(
        User, 
        null = False,
        on_delete = models.CASCADE,
    )

    def __str__(self):
        return "Schedule of: {}".format(self.user)


class Period(models.Model):

    class Day(models.TextChoices):
        monday    = 'MON',  _('Monday')
        tuesday   = 'TUE',  _('Tuesday')
        wednesday = 'WED',  _('Wednesday')
        thursday  = 'THU',  _('Thursday')
        friday    = 'FRI',  _('Friday')
        saturday  = 'SAT',  _('Saturday')
        sunday    = 'SUN',  _('Sunday')

    day = models.CharField(
        choices = Day.choices,
        max_length = 25,
        # default = Day.Monday,
        editable = False,
        null = False,
    )
    start_time = models.TimeField(
        auto_now = False,
        auto_now_add = False,
        null = False,
    )
    end_time = models.TimeField(
        auto_now = False,
        auto_now_add = False,
        null = False,
    )
    schedule = models.ForeignKey(
        "schedules.Schedule",
        null = False,
        on_delete = models.CASCADE,
    )

    def __str__(self):
        return self
