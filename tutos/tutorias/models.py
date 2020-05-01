from django.db import models
from django.contrib.auth.models import User


class Tutoria(models.Model):
    tutor = models.ForeignKey(
        'tutorias.Tutor',
        null = False,
        on_delete = models.CASCADE,
    )
    tutorado = models.ForeignKey(
        'django.contrib.auth.models.User',
        null = False,
        on_delete = models.CASCADE,
    )
    location = models.ForeignKey(
        'locations.Location',
        null = True,
        on_delete = models.SET_NULL,
    )
    status = models.ForeignKey(
        'workflows.Status',
        null = False,
        on_delete = models.SET_DEFAULT,
        default = 1, # TODO
    )
    topic = models.ForeignKey(
        'subjects.Topic',
        null = True,
        on_delete = models.SET_NULL,
    )
    course = models.ForeignKey(
        'institutions.Course',
        null = True,
        on_delete = models.SET_NULL,
    )
    datetime = models.TimeField(
        auto_now = False,
        auto_now_add = False,
        null = False,
    )
    hours = models.PositiveIntegerField(
        default = 1,
        null = False,
    )
    total_price = models.DecimalField(
        max_digits = 6,
        decimal_places = 2,
        null = False,
    )

    def __str__(self):
        return "Tutoria: {tutor} > {tutorado} a las {datetime}".format(
            tutor = User.objects.get(pk = self.tutor).user.first_name,
            tutorado = User.objects.get(pk = self.tutorado).first_name,
            datetime = self.datetime,
        )


class Tutor(models.Model):
    score = models.DecimalField(
        max_digits = 5,
        decimal_places = 2,
        default = 5.0,
    )
    description = models.CharField(
        max_length = 200, 
        null = True,
    )
    hours_done = models.PositiveIntegerField(
        default = 0,
    )
    individual_price = models.DecimalField(
        max_digits = 6, 
        decimal_places = 2,
        default = 80.0,
        null = False,
    )
    grupal_price = models.DecimalField(
        max_digits = 6,
        decimal_places = 2,
        default = 40.0,
        null = False,
    )
    user = models.ForeignKey(
        'django.contrib.auth.models.User',
        null = False,
        on_delete = models.CASCADE,
    )

    def __str__(self):
        return User.objects.get(pk = self.user).first_name
