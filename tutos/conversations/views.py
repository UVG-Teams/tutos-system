from django.shortcuts import render
from rest_framework import viewsets

from conversations.models import Conversation, Message
from conversations.serializers import ConversationSerializer, MessageSerializer


class ConverationViewSet(viewsets.ModelViewSet):
    query = Conversation.objects.all()
    serializer_class = ConversationSerializer


class MessageViewSet(viewsets.ModelViewSet):
    query = Message.objects.all()
    serializer_class = MessageSerializer
