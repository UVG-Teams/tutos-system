from rest_framework import serializers

from users.models import UserDetail


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetail
        fields = (
            'id',
            'user',
            'language',
            'phone',
            'gender',
            'birthdate',
            'location',
            'is_tutor',
            'institution',
            'career',
        )
