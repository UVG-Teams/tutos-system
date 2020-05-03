from django.shortcuts import render
from rest_framework import viewsets

from locations.models import Location, Language
from locations.serializers import LocationSerializer, LanguageSerializer


class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
