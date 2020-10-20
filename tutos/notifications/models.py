from django.db import models
from django.contrib.auth.models import User

class Notification(models.Model):
    title = models.CharField(
        max_length = 50,
        null = False,
    )
    description = models.CharField(
        max_length = 200,
        null = False,
    )
    date = models.DateTimeField(
        auto_now = False,
        auto_now_add = False,
        null = False,
    ) 
    user = models.ForeignKey(
        User,
        null = False,
        on_delete = models.CASCADE,
    )