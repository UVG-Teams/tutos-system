from django.shortcuts import render
from rest_framework import viewsets

from schedules.models import Schedule, Period
from schedules.serializers import ScheduleSerializer, PeriodSerializer


class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer


class PeriodViewSet(viewsets.ModelViewSet):
    queryset = Period.objects.all()
    serializer_class = PeriodSerializer
