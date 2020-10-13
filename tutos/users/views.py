from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from django.contrib.auth.models import User
from users.models import UserDetail
from users.serializers import UserSerializer, UserDetailSerializer
from permissions.services import APIPermissionClassFactory


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='UserPermission',
            permission_configuration={
                'base': {
                    'create': True,
                    'list': True,
                    'newUser':True,
                    'detail': True
                },
                'instance': {
                    'retrieve': True,
                    'update': True,
                    'partial_update': True,
                    'destroy': True,
                    'detailData': True,
                    'detail' : True
                }
            }
        ),
    )

    @action(detail=False, url_path='create_user', methods=['POST'])
    def newUser (self, request):
        usuario = User(
            username= request.data['username'],
            first_name= request.data['firstName'],
            last_name= request.data['lastName'],
            email= request.data['email']
        )
        usuario.set_password(request.data['password'])
        usuario.save()
        return Response({
            'status':'ok'
        })
    
    @action(detail=True, url_path="detail", methods=["get"])
    def detailData(self, request, pk=None):
        user = self.get_object()
        detail = user.userdetail
        return Response(UserDetailSerializer(detail).data)


class UserDetailViewSet(viewsets.ModelViewSet):
    queryset = UserDetail.objects.all()
    serializer_class = UserDetailSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='UserDetailPermission',
            permission_configuration={
                'base': {
                    'create': True,
                    'list': True,
                    'detail': True
                },
                'instance': {
                    'retrieve': True,
                    'update': True,
                    'partial_update': True,
                    'destroy': True,
                    'detail' : True,
                }
            }
        ),
    )
