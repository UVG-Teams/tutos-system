from django.test import TestCase, Client
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase
from django.urls import reverse
# Create your tests here.
class SubjectsModelTestCase(APITestCase):
  def test_create_suject(self):
    url = '/api/subjects/'
    data = {'name' : 'Calculo 2'}
    response = self.client.post(url, data, format='json')
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)
