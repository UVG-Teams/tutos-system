from django.shortcuts import render
from rest_framework import viewsets

from workflows.models import Workflow, Status
from workflows.serializers import WorkflowSerializer, StatusSerializer


class WorkflowViewSet(viewsets.ModelViewSet):
    query = Workflow.objects.all()
    serializer_class = WorkflowSerializer


class StatusViewSet(viewsets.ModelViewSet):
    query = Status.objects.all()
    serializer_class = StatusSerializer
