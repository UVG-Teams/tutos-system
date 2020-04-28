from django.db import models

# Create your models here.

class Tutor(models.Model):
    score = models.DecimalField(max_digits = 5, decimal_places = 2)
    description = models.CharField(max_length = 120, null = True)
    hours_done = models.PositiveIntegerField()
    individual_price = models.DecimalField(max_digits = 6, decimal_places = 2)
    grupal_price = models.DecimalField(max_digits=6, decimal_places=2)
    user = models.ForeignKey(
        'django.contrib.auth.user',
        null = False,
        on_delete=models.CASCADE
    )

class Tutoria(models.Model):
    tutor = models.ForeignKey(
        'tutorias.Tutor',
        null = False,
        on_delete = models.CASCADE
    )
    tutorado = models.ForeignKey(
        'django.contrib.auth.user',
        null = False,
        on_delete = models.CASCADE 
    ) #TODO revisar si usaremos el modelo USER u otro custom model
    location = models.ForeignKey(
        'locations.location',
        null=True,
        on_delete=models.SET_NULL
    )
    status = models.ForeignKey(
        'alguna_app.status',
        null = False
    )#TODO ver bien esta FK. No agrego on_delete porque no tiene sentido eliminar un registro de status
    topic = models.ForeignKey(
        'alguna_otra_app.topic',
        null = True,
        on_delete = models.SET_NULL
    ) #TODO ver bien est FK
    course = models.ForeignKey(
        'alguna_otra_2_app.course',
        null = True,
        on_delete = models.SET_NULL
    ) #TODO ver si es FK hacia modelo course
    datetime = models.TimeField(auto_now=False, auto_now_add=False)
    hours = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits = 6, decimal_places = 2)