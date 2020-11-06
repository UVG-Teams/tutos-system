from django.test import TestCase
from django.contrib.auth.models import User
from .models import Tutoria, Tutor
from rest_framework.test import APIRequestFactory, APIClient

# Create your tests here.

class TutoriaModelTestCase(TestCase):
  def setUp(self):
    self.credentials = {
        'username': 'testUser',
        'password': 'testpassword'}
    User.objects.create_user(**self.credentials)

  def test_create_tutoria(self):
    c = self.client

    requestTutor = c.post('/api/users/create_user/', {
        'username': 'mfuentes',
        'firstName': 'marco',
        'lastName': 'fuentes',
        'email': 'test@test.c',
        'password': 'testpassword',
        'birthdate': '1999-07-16',
        'phone': '12345678',
        'gender': 'M',
        'isTutor': True,
        'individualPrice': 50
    }
    )
    tutor = User.objects.get(username='mfuentes')
    tutorado = User.objects.get(username='AnonymousUser')
    # print('\n\n {} \n\n'.format(tutorado.data))
    response = c.get('/api/tutorias/')
    # print(response.data)
