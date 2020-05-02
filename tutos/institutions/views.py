from django.shortcuts import render
from rest_framework import viewsets

from institutions.models import Institution, Career, Course
from institutions.serializers import InstitutionSerializer, CareerSerializer, CourseSerializer


class InstitutionViewSet(viewsets.ModelViewSet):
    query = Institution.objects.all()
    serializer_class = InstitutionSerializer


class CareerViewSet(viewsets.ModelViewSet):
    query = Career.objects.all()
    serializer_class = CareerSerializer


class CourseViewSet(viewsets.ModelViewSet):
    query = Course.objects.all()
    serializer_class = CourseSerializer

