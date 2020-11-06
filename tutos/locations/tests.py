from django.test import TestCase
from .models import Location
# Create your tests here.

class LocationsModelTestCase(TestCase):
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
  
  def test_location_have_dept(self):
    loc0 = Location.objects.get(name="zona 15")
    loc1 = Location.objects.get(name="zona 16")
    self.assertEqual(loc0.parent, loc1.parent)

    def test_location_have_type(self):
      institution0 = Location.objects.get(name="zona 15")
      institution1 = Location.objects.get(name="zona 16")
      self.assertEqual(institution0.type, institution1.type)
