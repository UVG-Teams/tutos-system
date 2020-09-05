from django.test import TestCase

# Create your tests here.
from django.http import JsonResponse
from django.contrib.auth.models import User
from users.models import UserDetail
from institutions.models import Institution, Career, Course
from subjects.models import Subject, Topic
from locations.models import Location, Language
from schedules.models import Schedule, Period
from tutorias.models import Tutor, Tutoria
from workflows.models import Workflow, Status


class CategoryMethodTests(TestCase):
  def test_ensure_views_are_positive(self):
    """
      Muestra que el idioma de un usuario es el correcto
    """
    america = Location(name="America", location_type="continent")
    america.save()

    guate = Location(name="Guatemala", shortname="GT", code=502,
                     location_type="country", parent=america)
    guate.save()

    gtDep = Location(
        name="Guatemala", location_type="department", parent=guate)
    gtDep.save()

    mixco = Location(name='Mixco', location_type='municipality', parent=gtDep)
    mixco.save()

    uvg = Institution(name="Universidad del Valle de Guatemala",
                      institution_type="university", location=mixco)
    uvg.save()

    computerscience = Career(
        name="Ingeniería en Ciencias de la Computación y Tecnología de la Información", institution=uvg)
    computerscience.save()

    spanish = Language(name="Español")

    marcfuents = User(username="marco10c0", first_name="Marco José",
                      last_name="Fuentes Lima", email="fue18188@uvg.edu.gt")
    marcfuents.set_password("Contrasena1234")
    marcfuents.save()

    marcofuentes = UserDetail(user_ptr=marcfuents, birthdate="1999-7-16", language=spanish, phone=54131389,
                              gender="M", is_tutor=True, institution=uvg, career=computerscience, location=mixco)
    marcofuentes.save_base(raw=True)

    self.assertEqual((marcofuentes.language == spanish), True)
    self.assertEqual((marcofuentes.language == spanish), False)

    # cat = User(username="admin",email="admin@admin.com", is_superuser = True, is_staff = True)
    # cat.save()
    # self.assertEqual((cat.views >= 0), True)
