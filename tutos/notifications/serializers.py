from rest_framework import serializers

from notifications.models import Notification

class NotificationSerializer(serializers.NotificationSerializer):
    class Meta:
        model = Notification
        fields = (
            'id',
            'title',
            'description',
            'date',
        )