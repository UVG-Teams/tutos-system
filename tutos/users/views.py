from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework_jwt.utils import jwt_decode_handler
from rest_framework.permissions import AllowAny, IsAuthenticated

from django.contrib.auth.models import User
from users.models import UserDetail
from tutorias.models import Tutor
from tutorias.serializers import TutorSerializer
from users.serializers import UserSerializer, UserDetailSerializer
from permissions.services import APIPermissionClassFactory
from tutorias.serializers import TutorSerializer
from .models import UserDetail
from locations.models import Language, Location
from institutions.models import Institution, Career


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
                    'detail': True,
                    'partial_update': True,
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

        usuariodetail = UserDetail(
            user_ptr=usuario,
            birthdate= request.data['birthdate'],
            phone= request.data['phone'],
            gender= request.data['gender'],
            is_tutor= request.data['isTutor']
        )
        usuariodetail.save_base(raw=True)

        if(request.data['isTutor']):
            tutorusuario = Tutor(
                user_ptr=usuario,
                individual_price= request.data['individualPrice']
            )
            tutorusuario.save_base(raw=True)
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
                    'detail': True,
                    'partial_update' : True,
                    'tutoresData': True,
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

    @action(detail=False , url_path='edit' , methods=['POST'] , permission_classes=[IsAuthenticated])
    def parUpdate(self, request):
        body = request.data
        decoded = jwt_decode_handler(request.headers['Authorization'].split(' ')[1])
        user = UserDetail.objects.get(username = decoded['username'])
        if (body.__contains__('username')):
            username = body['username']
            user.username = username
        if (body.__contains__('first_name')):
            first_name = body['first_name']
            user.first_name = first_name
        if (body.__contains__('last_name')):
            last_name = body['last_name']
            user.last_name = last_name
        if (body.__contains__('email')):
            email = body['email']
            user.email = email
        if (body.__contains__('phone')):
            phone = body['phone']
            user.phone = phone
        if (body.__contains__('gender')):
            gender = body['gender']
            user.gender = gender
        # if (body.__contains__('birthdate')):
        #     birthdate = body['birthdate']
            # user.birthdate = birthdate
        if (body.__contains__('is_tutor')):
            is_tutor = body['is_tutor']
            user.is_tutor = is_tutor
        if (body.__contains__('language')):
            languageId = body['language'] # Trae el id
            print('languageId',languageId)
            language = Language.objects.get(id=languageId)
            user.language = language
        if (body.__contains__('location')):
            locationId = body['location']
            print('locationId',locationId)
            location = Location.objects.get(id=locationId)
            user.location = location
        if (body.__contains__('institution')):
            institutionId = body['institution']
            print('institutionId',institutionId)
            institution = Institution.objects.get(id=institutionId)
            user.institution = institution
        if (body.__contains__('career')):
            careerId = body['career']
            print('careerId',careerId)
            career = Career.objects.get(id=careerId)
            user.career = career
        if (body.__contains__('password')):
            newPw = body['password']
            if newPw!='':
                user.set_password(newPw)
        user.save()
        return Response(UserDetailSerializer(user).data)

# Jalar info del tutor
    # @action(detail=False, url_path="tutor-detail", methods=["get"])
    # def tutoresData(self, request, pk=None):
        # users = User.objects.select_related("userdetail")
    #     usersResponse = [UserSerializer(user).data for user in users]
    #     print("Hola", usersResponse)
    #     # return Response(UserSerializer(detail).data)
    #     return Response([])
