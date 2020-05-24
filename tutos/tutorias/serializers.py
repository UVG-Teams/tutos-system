from rest_framework import serializers

from tutorias.models import Tutoria, Tutor
from users.serializers import UserSerializer
from django.contrib.auth.models import User


class TutoriaSerializer(serializers.ModelSerializer):
    tutor = UserSerializer(many=False)
    tutorado = UserSerializer(many=False)

    class Meta:
        model = Tutoria
        fields = (
            'id',
            'tutor',
            'tutorado',
            'location',
            'status',
            'topic',
            'course',
            'datetime',
            'hours',
            'total_price',
        )

    # def create(self, validated_data):
    #     print("AAAAAAAAAAAAAAAAAAAAAAAA")
    #     tutor_data = validated_data.pop('tutor')
    #     # tutor = User.objects.get(**tutor_data)
    #     tutor = User.objects.get(id=tutor_data['id'])
    #     # tutoria = Tutoria.objects.create(**validated_data)
    #     return self.Meta.model.objects.create(tutor=tutor_data, **validated_data)


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
