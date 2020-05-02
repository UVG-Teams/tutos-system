from django.shortcuts import render
from rest_framework import viewsets

from locations.models import Location, Language
from locations.serializers import LocationSerializer, LanguageSerializer


class LocationViewSet(viewsets.ModelViewSet):
    query = Location.objects.all()
    serializer_class = LocationSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    query = Language.objects.all()
    serializer_class = LanguageSerializer
