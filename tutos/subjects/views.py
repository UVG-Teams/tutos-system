from django.shortcuts import render
from rest_framework import viewsets

from subjects.models import Subject, Topic
from subjects.serializers import SubjectSerializer, TopicSerializer
from permissions.services import APIPermissionClassFactory


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='SubjectPermission',
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


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='TopicPermission',
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
