from django.shortcuts import render
from rest_framework import viewsets

from tutorias.models import Tutoria, Tutor
from tutorias.serializers import TutoriaSerializer, TutorSerializer


class TutoriaViewSet(viewsets.ModelViewSet):
    query = Tutoria.objects.all()
    serializer_class = TutoriaSerializer


class TutorViewSet(viewsets.ModelViewSet):
    query = Tutor.objects.all()
    serializer_class = TutorSerializer
