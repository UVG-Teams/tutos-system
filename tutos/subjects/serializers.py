from rest_framework import serializers

from subjects.models import Subject, Topic


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = (
            'id',
            'name',
        )


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = (
            'id',
            'name',
            'subject',
        )
