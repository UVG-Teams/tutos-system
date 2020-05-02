from rest_framework import serializers

from institutions.models import Institution, Career, Course


class InstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institution
        fields = (
            'id',
            'name',
            'institution_type',
            'location',
        )


class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = (
            'id',
            'name',
            'institution'
        )


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = (
            'id',
            'name',
            'institution'
        )
