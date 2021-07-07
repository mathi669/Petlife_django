from django.shortcuts import render
from rest_framework import generics
from .models import Persona
from .serializer import PersonaSerializer

# Create your views here.


class PersonaList(generics.CreateAPIView):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer
