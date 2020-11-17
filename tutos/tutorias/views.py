from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework_jwt.utils import jwt_decode_handler
from rest_framework.permissions import AllowAny, IsAuthenticated


from tutorias.models import Tutoria, Tutor
from tutorias.serializers import TutoriaSerializer, TutorSerializer
from permissions.services import APIPermissionClassFactory
from django.contrib.auth.models import User
from users.models import UserDetail
from workflows.models import Workflow, Status
from institutions.models import Course


class TutoriaViewSet(viewsets.ModelViewSet):
    queryset = Tutoria.objects.all()
    serializer_class = TutoriaSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='TutoriaPermission',
            permission_configuration={
                'base': {
                    'create': lambda user, req: user.is_authenticated,
                    'list': lambda user, req: user.is_authenticated,
                    'newTutoria': lambda user, req: user.is_authenticated,
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
    @action(detail=False, url_path='create_tutoria', methods=['POST'])
    def newTutoria (self, request):
        curso = Course.objects.get(name=request.data['course'])
        status = Status.objects.get(name='scheduled')
        tutor = Tutor.objects.get(id=request.data['tutorId'])
        tutorado = User.objects.get(id=request.data['tutoradoId'])

        tutoria = Tutoria(
            tutor=tutor,
            tutorado=tutorado,
            total_price=100,
            datetime=request.data['date'],
            status=status,
            course=curso
        )
        tutoria.save()
        return Response(TutoriaSerializer(tutoria).data)


class TutorViewSet(viewsets.ModelViewSet):
    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='TutorPermission',
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
