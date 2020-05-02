from rest_framework import serializers

from locations.models import Location, Language


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = (
            'id',
            'name',
            'shortname',
            'postcode',
            'code',
            'location_type',
            'parent',
            'latitude',
            'longitude',
            'language',
        )


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = (
            'id',
            'name',
        )
