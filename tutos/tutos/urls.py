"""tutos URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
from django.urls import path

from rest_framework import routers
from rest_framework_jwt.views import (
    obtain_jwt_token,
    refresh_jwt_token,
    verify_jwt_token,
)

from users.views import UserViewSet, UserDetailViewSet
from subjects.views import SubjectViewSet, TopicViewSet
from tutorias.views import TutoriaViewSet, TutorViewSet
from schedules.views import ScheduleViewSet, PeriodViewSet
from workflows.views import WorkflowViewSet, StatusViewSet
from locations.views import LocationViewSet, LanguageViewSet
from conversations.views import ConversationViewSet, MessageViewSet
from institutions.views import InstitutionViewSet, CareerViewSet, CourseViewSet

from init import create_initial_data

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'userdetails', UserDetailViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'topics', TopicViewSet)
router.register(r'tutorias', TutoriaViewSet)
router.register(r'tutores', TutorViewSet)
router.register(r'schedules', ScheduleViewSet)
router.register(r'periods', PeriodViewSet)
router.register(r'workflows', WorkflowViewSet)
router.register(r'statuses', StatusViewSet)
router.register(r'locations', LocationViewSet)
router.register(r'languages', LanguageViewSet)
router.register(r'conversations', ConversationViewSet)
router.register(r'messages', MessageViewSet)
router.register(r'institutions', InstitutionViewSet)
router.register(r'careers', CareerViewSet)
router.register(r'courses', CourseViewSet)

urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace = 'rest_framework')),
    url(r'^api/', include(router.urls)),
    url(r'^api/token-auth/', obtain_jwt_token),
    url(r'^api/token-refresh/', refresh_jwt_token),
    url(r'^api/token-verify/', verify_jwt_token),
    url(r'^admin/initial-data/', create_initial_data),
]
