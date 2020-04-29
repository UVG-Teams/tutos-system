from django.db import models
from datetime import datetime


class Conversation(models.Model):
	tutor = models.ForeignKey(
		'tutorias.Tutor',
		null= False, 
        on_delete=models.CASCADE)
	tutorado = models.ForeignKey(
		'django.contrib.auth.user',
        null = False,
        on_delete = models.CASCADE)

class Message(models.Model):
	message = models.CharField(max_length=500)
	date = models.DateTimeField(default=datetime.now)
	conversation=models.ForeignKey(
		'conversations.Conversation',
		null = False,
		on_delete=models.CASCADE)

# Create your models here.
