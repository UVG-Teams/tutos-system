from django.db import models

# Create your models here.
class Institution(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    institution_type = models.CharField(max_length=50, null=False, blank=False)
    location = models.ForeignKey('locations.Location', on_delete=models.SET_NULL)

    def __str__(self):
        return self.name