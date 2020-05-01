from django.db import models
from django.contrib.auth.models import User


class Conversation(models.Model):
	user1 = models.ForeignKey(
		'django.contrib.auth.models.User',
		null = False, 
        on_delete = models.CASCADE,
	)
	user2 = models.ForeignKey(
		'django.contrib.auth.models.User',
        null = False,
        on_delete = models.CASCADE,
	)

	def __str__(self):
		return "Conversation: {user1} >< {user2}".format(
            user1 = User.objects.get(pk = self.user1).first_name,
            user2 = User.objects.get(pk = self.user2).first_name,
        )


class Message(models.Model):
	transmitter = models.ForeignKey(
		'django.contrib.auth.models.User',
		null = False,
		on_delete = models.CASCADE,
	)
	message = models.CharField(
		max_length = 500,
	)
	date = models.DateTimeField(
		auto_now = True,
		auto_now_add = True,
	)
	conversation = models.ForeignKey(
		'conversations.Conversation',
		null = False,
		on_delete = models.CASCADE
	)

	def __str__(self):
		return self.message
