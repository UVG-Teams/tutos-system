from rest_framework import serializers

from conversations.models import Conversation, Message
from users.serializers import UserSerializer


class ConversationSerializer(serializers.ModelSerializer):
    user1 = UserSerializer()
    user2 = UserSerializer()
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
