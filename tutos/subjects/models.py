from django.db import models

# Create your models here.
class Subject(models.Model):
    name = models.CharField(max_length=30, null=False, blank=False)

    def __str__(self):
        return self.name

class Topic(models.Model):
    name = models.CharField(max_length=30, null=False, blank=False)
    subject = models.ForeignKey('subjects.Subject', on_delete=models.SET_NULL)

    def __str__(self):
        return self.name