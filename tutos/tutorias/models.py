from django.db import models
from django.contrib.auth.models import User


class Tutoria(models.Model):
    tutor = models.ForeignKey(
        User,
        null = False,
        on_delete = models.CASCADE,
    )
    tutorado = models.ForeignKey(
        User,
        null = False,
        on_delete = models.CASCADE,
        related_name = 'tutorado'
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
    datetime = models.DateTimeField(
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
            tutor = User.objects.get(pk = self.tutor.id).first_name,
            tutorado = User.objects.get(pk = self.tutorado.id).first_name,
            datetime = self.datetime,
        )


class Tutor(User):
    score = models.DecimalField(
        max_digits = 5,
        decimal_places = 2,
        default = 5.0,
        null = False,
    )
    description = models.CharField(
        max_length = 200, 
        null = True,
    )
    hours_done = models.PositiveIntegerField(
        default = 0,
        null = False,
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
