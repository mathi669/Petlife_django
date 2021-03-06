from django.db import models
from django.contrib.auth.models import User

 
# Create your models here.
 
# Create Modelo para Categoria
 
class Especie(models.Model):
    idEspecie = models.IntegerField(primary_key=True, verbose_name="Id de Especie")
    nombreEspecie = models.CharField(max_length=80, blank=False, null=False, verbose_name="Nombre de la Especie")
 
    def __str__(self):
        return self.nombreEspecie
 
# Create Modelo para vehículo
 
class Animal(models.Model):
    id_mascota = models.IntegerField(primary_key=True, default=0)
    edad = models.CharField(max_length=80, blank=False, null=False, verbose_name="edad")
    raza = models.CharField(max_length=80, null=True, blank=True, verbose_name="Raza")
    imagen = models.ImageField(upload_to="images/", default="sinfoto.jpg", null=False, blank=False, verbose_name="Imagen")
    Especie = models.ForeignKey(Especie, on_delete=models.DO_NOTHING)
 
    def __str__(self):
        return self.raza

class Persona(models.Model):
    id = models.AutoField(primary_key = True)
    nombre = models.CharField('Nombre', max_length = 100)
    apellido = models.CharField('Apellido', max_length = 200)

    def __str__(self) -> str:
        return '{0},{1}'.format(self.apellido,self.nombre)