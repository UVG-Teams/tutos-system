from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import Http404

from calendars.models import Calendar, Event
from calendars.serializers import CalendarSerializer, EventSerializer
from permissions.services import APIPermissionClassFactory
from audits.models import Audit


class CalendarViewSet(viewsets.ModelViewSet):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='CalendarPermission',
            permission_configuration={
                'base': {
                    'create': False,
                    'list': False,
                },
                'instance': {
                    'retrieve': lambda user, obj, req: user.is_authenticated,
                    'update': False,
                    'partial_update': False,
                    'destroy': False,
                    'events': lambda user, obj, req: user.is_authenticated,
                }
            }
        ),
    )

    def create(self, request):
        Audit.objects.create(
            httpMethod = request.method,
            url = '/calendars/',
            user = request.user
        )
        return super().create(request)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
            Audit.objects.create(
                httpMethod = request.method,
                url = '/calendars/{}/'.format(kwargs['pk']),
                user = request.user
            )
        except Http404:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=['get'])
    def events(self, request, pk=None):
        calendar = self.get_object()
        events = calendar.event_set.all()
        
        return Response(
            [EventSerializer(event).data for event in events]
        )

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='EventPermission',
            permission_configuration={
                'base': {
                    'create': lambda user, req: user.is_authenticated,
                    'list': lambda user, req: user.is_authenticated,
                },
                'instance': {
                    'retrieve': lambda user, obj, req: user.is_authenticated,
                    'update': lambda user, obj, req: user.is_authenticated,
                    'partial_update': lambda user, obj, req: user.is_authenticated,
                    'destroy': lambda user, obj, req: user.is_authenticated,
                }
            }
        ),
    )

    def create(self, request):
        Audit.objects.create(
            httpMethod = request.method,
            url = '/events/',
            user = request.user
        )
        calendar = Calendar.objects.get(user=request.user)
        event = Event.objects.create(
            calendar = calendar,
            title = request.data['title'],
            description = request.data['description'],
            date = request.data['date'],
            typeEvent = request.data['typeEvent'],
        )
        return Response(EventSerializer(event).data)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
            Audit.objects.create(
                httpMethod = request.method,
                url = '/events/{}/'.format(kwargs['pk']),
                user = request.user
            )
        except Http404:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)
