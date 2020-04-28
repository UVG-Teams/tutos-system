
from django.contrib.auth.models import User
from users.models import UserDetail
from institutions.models import Institution, Career, Course
from subjects.models import Subject
from locations.models import Location

#LOCATION:
#Continent:
america = Location(name="America", location_type="continent")
america.save()
europa = Location(name="Europe", location_type="continent")
europa.save()
africa = Location(name="Africa", location_type="continent")
africa.save()
asia = Location(name="Asia", location_type="continent")
asia.save()
australia = Location(name="Australia", location_type="continent")
australia.save()
antarctica = Location(name="Antarctica", location_type="continent")
antarctica.save()

#Country:
guate = Location(name="Guatemala", shortname="GT", code= 502, location_type="country", parent=america)
guate.save()

#Departamento/State
gtDep = Location(name="Guatemala", location_type="department", parent=guate)
gtDep.save()
peten = Location(name="Petén", location_type="department", parent=guate)
peten.save()
huehue = Location(name="Huehuetenango", location_type="department", parent=guate)
huehue.save()
quiche = Location(name="Quiché", location_type="department", parent=guate)
quiche.save()
altavrpz = Location(name="Alta Verapaz", location_type="department", parent=guate)
altavrpz.save()
bajavrpz = Location(name="Baja verapaz", location_type="department", parent=guate)
bajavrpz.save()
izabal = Location(name="Izabal", location_type="department", parent=guate)
izabal.save()
sanmarcos = Location(name="San Marcos", location_type="department", parent=guate)
sanmarcos.save()
toto = Location(name="Totonicapán", location_type="department", parent=guate)
toto.save()
quetzal = Location(name="Quetzaltenango", location_type="department", parent=guate)
quetzal.save()
retalhuleu = Location(name="Retalhuleu", location_type="department", parent=guate)
retalhuleu.save()
suchi = Location(name="Suchitepéquez", location_type="department", parent=guate)
suchi.save()
solo = Location(name="Sololá", location_type="department", parent=guate)
solo.save()
progreso = Location(name="El Progreso", location_type="department", parent=guate)
progreso.save()
zacapa = Location(name="Zacapa", location_type="department", parent=guate)
zacapa.save()
chiqui= Location(name="Chiquimula", location_type="department", parent=guate)
chiqui.save()
jutiapa= Location(name="Jutiapa", location_type="department", parent=guate)
jutiapa.save()
strosa= Location(name="Santa Rosa", location_type="department", parent=guate)
strosa.save()
jalapa= Location(name="Jalapa", location_type="department", parent=guate)
jalapa.save()
chimal= Location(name="Chimaltenango", location_type="department", parent=guate)
chimal.save()
sacatpqz= Location(name="Sacatepéquez", location_type="department", parent=guate)
sacatpqz.save()
escuintla= Location(name="Escuintla", location_type="department", parent=guate)
escuintla.save()
#Municipio
#City
gtCity = Location(name="Guatemala City", location_type="city", parent=guateDep)
gtCity.save()
sntaCatarinap = Location(name="Santa Catarina Pinula", location_type="city", parent=guateDep)
sntaCatarinap.save()
snmiguelptp = Location(name="San Miguel Petapa", location_type="city", parent=guateDep)
snmiguelptp.save()
mixco = Location(name="Mixco", location_type="city", parent=guateDep)
mixco.save()
villanva = Location(name="Villa Nueva", location_type="city", parent=guateDep)
villanva.save()
fraijanes = Location(name="Fraijanes", location_type="city", parent=guateDep)
fraijanes.save()
villacnls = Location(name="Villa Canales", location_type="city", parent=guateDep)
villacnls.save()
snjosep = Location(name="San José Pinula", location_type="city", parent=guateDep)
snjosep.save()
antigua = Location(name="Antigua Guatemala", location_type="city", parent=sacatpqz)
antigua.save()
snlucas = Location(name="San Lucas Sacatepéquez", location_type="city", parent=sacatpqz)
snlucas.save()

#Zone
z15 = Location(name="zona 15",postcode= "01015", location_type="zone", parent=gtCity)
z15.save()

#INSTITUTION:
uvg = Institution(name="Universidad del Valle de Guatemala", institution_type="university", location=z15)
uvg.save()

#CAREER:
computerscience = Career(name= "Ingeniería en Ciencias de la Computación y Tecnología de la Información", institution=uvg)
computerscience.save()

#COURSE
ecuasdif = Course(name= "Ecuaciones Diferenciales", institution=uvg)
ecuasdif.save()

#SUBJECT
matematica = Subject(name= "Matemáticas")
matematica.save()
quimica = Subject(name= "Química")
quimica.save()

#USER
joseblock = UserDetail(birthdate="", language="Spanish", phone= 59300498, genre="M", is_tutor= False, institution= uvg, career= computerscience, location=z15)
joseblock.save()
