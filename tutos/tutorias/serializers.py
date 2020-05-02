from rest_framework import serializers

from tutorias.models import Tutoria, Tutor


class TutoriaSerializer(serializers.ModelSerializer):
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
