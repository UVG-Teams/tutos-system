from django.test import TestCase, Client
from django.contrib.auth.models import User
from rest_framework.test import APIRequestFactory , APIClient

# Create your tests here.
class UserModelTestCase(TestCase):
  def setUp(self):
    self.credentials = {
        'username': 'testUser',
        'password': 'testpassword'}
    User.objects.create_user(**self.credentials)

  def test_create_user(self):
    c = self.client
    response = c.post('/api/users/create_user/', {'username' : 'testUser1', 'firstName' : 'test', 'lastName' : 'user', 'email' : 'test@test.c', 'password' : 'testpassword'  })
    user = User.objects.get(username='testUser1')
    self.assertEqual(user.first_name , 'test')

  def test_login_user(self):
    response = self.client.post('/api/token-auth/', self.credentials )
    self.assertTrue('token' in response.data)

  def test_user(self):
    response = self.client.get('/api/users/')
    self.assertEqual(response.status_code , 200)
