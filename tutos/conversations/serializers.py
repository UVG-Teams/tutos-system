from rest_framework import serializers

from conversations.models import Conversation, Message


class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = (
            'id',
            'user1',
            'user2',
        )


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = (
            'id',
            'transmitter',
            'message',
            'date',
            'conversation',
        )
