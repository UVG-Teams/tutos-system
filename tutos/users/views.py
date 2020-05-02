from django.shortcuts import render
from rest_framework import viewsets

from users.models import UserDetail
from users.serializers import UserDetailSerializer


class UserDetailViewSet(viewsets.ModelViewSet):
    query = UserDetail.objects.all()
    serializer_class = UserDetailSerializer
