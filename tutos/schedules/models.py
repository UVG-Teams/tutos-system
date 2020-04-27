from django.db import models

# Create your models here.


class Schedule(models.Model):
    day = models.CharField(max_length = 20, null = False)
    start_time = models.TimeField(auto_now = False, auto_now_add = False)
    end_time = models.TimeField(auto_now=False, auto_now_add=False)
    tutor = models.ForeignKey(
        "tutorias.Tutor", 
        null= False, 
        on_delete=models.SET_NULL)
