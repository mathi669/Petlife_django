from django import forms
from django.forms import ModelForm, fields
from .models import Animal
from django.forms import ModelForm, fields

 
class AnimalForm(ModelForm):
    class Meta:
        model = Animal
        fields = ['id_mascota', 'edad', 'raza', 'imagen', 'Especie']

