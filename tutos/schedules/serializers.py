from rest_framework import serializers

from schedules.models import Schedule, Period


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = (
            'id',
            'user',
        )


class PeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Period
        fields = (
            'id',
            'day',
            'start_time',
            'end_time',
            'schedule',
        )
