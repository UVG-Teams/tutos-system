from django.shortcuts import render
from rest_framework import viewsets

from schedules.models import Schedule, Period
from schedules.serializers import ScheduleSerializer, PeriodSerializer


class ScheduleViewSet(viewsets.ModelViewSet):
    query = Schedule.objects.all()
    serializer_class = ScheduleSerializer


class PeriodViewSet(viewsets.ModelViewSet):
    query = Period.objects.all()
    serializer_class = PeriodSerializer
