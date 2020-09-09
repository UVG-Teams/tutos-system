from django.test import TestCase
from .models import Institution
from locations.models import Location
# Create your tests here.

class InstitutionsModelTestCase(TestCase):
  def setUp(self):
    america = Location(name="America", location_type="continent")
    america.save()

    guate = Location(name="Guatemala", shortname="GT", code= 502, location_type="country", parent=america)
    guate.save()

    gtDep = Location(name="Guatemala", location_type="department", parent=guate)
    gtDep.save()

    gtCity = Location(name="Guatemala City", location_type="city", parent=gtDep)
    gtCity.save()
    z15 = Location(name="zona 15", location_type="zone", parent=gtCity)
    z15.save()
    z16 = Location(name="zona 16", location_type="zone", parent=gtCity)
    z16.save()

    uvg = Institution(name="Universidad del Valle de Guatemala", institution_type="university", location= z15)
    uvg.save()
    url = Institution(name="Universidad Rafael Ladivar", institution_type="university", location= z16)
    url.save()
  def test_institutions_have_locations(self):
    institution0 = Institution.objects.get(name="Universidad del Valle de Guatemala")
    institution1 = Institution.objects.get(name="Universidad Rafael Ladivar")
    self.assertEqual(institution0.institution_type , institution1.institution_type )
  def test_institutions_have_dept(self):
    institution0 = Institution.objects.get(name="Universidad del Valle de Guatemala")
    institution1 = Institution.objects.get(name="Universidad Rafael Ladivar")
    self.assertNotEqual(institution0.location , institution1.location )