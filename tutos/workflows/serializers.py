from rest_framework import serializers

from workflows.models import Workflow, Status 


class WorkflowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workflow
        fields = (
            'id',
            'name',
        )


class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = (
            'id',
            'name',
            'is_initial',
            'is_final',
            'prev',
            'next',
            'workflow',
        )
