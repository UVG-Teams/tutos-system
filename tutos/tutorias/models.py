from django.db import models

# Create your models here.

class Tutor(models.Model):
    score = models.DecimalField(max_digits = 5, decimal_places = 2)
    description = models.CharField(max_length = 120, null = True)
    hours_done = models.PositiveIntegerField()
    idividual_price = models.DecimalField(max_digits = 6, decimal_places = 2)
    grupal_price = models.DecimalField(max_digits=6, decimal_places=2)
    user = models.ForeignKey(
        'django.contrib.auth.user',
        null = False,
        on_delete=models.CASCADE
    )
