from django.test import TestCase
from .models import Conversation , Message
from django.contrib.auth.models import User
# Create your tests here.
class ConversationModelTestCase(TestCase):
	def setUp(self):
		self.user1 = User(username = "test0" , password="pwd0")
		self.user1.save()
		self.user2 = User(username = "test1" , password="pwd1")
		self.user2.save()
		self.convo = Conversation(user1 =self.user1 , user2=self.user2)
		self.convo.save()
	def test_send_message_works(self):
		# De user1 a user2
		self.mensaje = Message(transmitter = self.user1 , conversation=self.convo , message = "Hola prueba")
		self.mensaje.save()
		msg = Message.objects.get(transmitter = self.user1)
		self.assertEqual(msg.message, "Hola prueba"	)
