from rest_framework import serializers

from tutorias.models import Tutoria, Tutor
from users.serializers import UserSerializer
from workflows.serializers import StatusSerializer
from institutions.serializers import CourseSerializer
from django.contrib.auth.models import User


class TutoriaSerializer(serializers.ModelSerializer):
    course = CourseSerializer(many = False)
    tutor = UserSerializer(many = False)
    tutorado = UserSerializer(many = False)
    status = StatusSerializer(many = False)

    class Meta:
        model = Tutoria
        fields = "__all__"


class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = (
            'id',
            'score',
            'description',
            'hours_done',
            'individual_price',
            'grupal_price',
            'user',
        )
