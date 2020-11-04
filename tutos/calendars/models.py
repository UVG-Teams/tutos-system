from django.db import models

from users.models import User


class Calendar(models.Model):
    user = models.OneToOneField(
        User,
        on_delete = models.CASCADE,
    )


class Event(models.Model):
    calendar = models.ForeignKey(
        Calendar,
        blank = False,
        on_delete = models.CASCADE,
    )
    title = models.CharField(
        max_length = 150,
        null = False,
        blank = False
    )
    description = models.CharField(
        max_length = 250,
        null = True,
    )
    date = models.DateField(
        null = False,
    )
    typeEvent = models.CharField(
        max_length = 20,
        null = False,
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )

