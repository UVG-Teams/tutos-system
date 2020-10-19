from django.shortcuts import render
from rest_framework import viewsets

from notifications.models import Notification
from notifications.serializers import NotificationSerializer
from permissions.services import APIPermissionClassFactory


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='NotificationPermission',
            permission_configuration={
                'base': {
                    'create': True,
                    'list': True,
                },
                'instance': {
                    'retrieve': True,
                    'update': True,
                    'partial_update': True,
                    'destroy': True,
                }
            }
        )
    )