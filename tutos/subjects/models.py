from django.db import models


class Subject(models.Model):
    name = models.CharField(
        max_length = 30,
        null = False,
        blank = False,
    )

    def __str__(self):
        return self.name

class Topic(models.Model):
    name = models.CharField(
        max_length = 30,
        null = False,
        blank = False,
    )
    subject = models.ForeignKey(
        'subjects.Subject',
        null = False,
        on_delete = models.CASCADE,
    )

    def __str__(self):
        return self.name
