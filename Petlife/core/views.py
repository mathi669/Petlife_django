
from django.shortcuts import redirect, render
from .models import Animal, Especie
from .forms import AnimalForm



# Create your views here.
 
def home(request):
    return render(request, "core/home.html")
    
def gatos_seccion(request):
    data = {"list": Animal.objects.all().order_by('id_mascota')}
    print(data)
    return render(request, "core/seccion_gatos.html", data)
 
def gatos_ficha(request, id):
    animal = Animal.objects.get(id_mascota=id)
    data = {"animal":  animal}
    return render(request, "core/gatos_ficha.html", data)
 
def gatos(request, action, id):
    data = {"mesg": "", "form": AnimalForm, "action": action, "id": id}
 
    if action == 'ins':
        if request.method == "POST":
            form = AnimalForm(request.POST, request.FILES)
            if form.is_valid:
                try:
                    form.save()
                    data["mesg"] = "¡Gatito guardado correctamente!"
                except:
                    data["mesg"] = "¡No se puede crear 2 veces el mismo gatito!"
 
    elif action == 'upd':
        objeto = Animal.objects.get(id_mascota=id)
        if request.method == "POST":
            form = AnimalForm(data=request.POST, files=request.FILES, instance=objeto)
            if form.is_valid:
                form.save()
                data["mesg"] = "¡El gatito fue actualizado correctamente!"
        data["form"] = AnimalForm(instance=objeto)
 
    elif action == 'del':
        try:
            Animal.objects.get(id_mascota=id).delete()
            data["mesg"] = "¡El gatito fue eliminado correctamente!"
            return redirect(gatos, action='ins', id = '1')
        except:
            data["mesg"] = "¡El gatito ya estaba eliminado!"
 
    data["list"] = Animal.objects.all().order_by('id_mascota')
    return render(request, "core/gato.html", data)


def poblar_bd(request):
    Animal.objects.all().delete()
    # Especie.objects.create( nombreEspecie="felix")
    Animal.objects.create(id_mascota=1, edad="8", raza="mestizo", imagen="images/gato.jpg", Especie=Especie.objects.get(idEspecie=1))
    return redirect(gatos, action='ins', id = '1')

# Retorna todas las paginas publicas
def p_home(request):
    return render(request, "core/public/index.html")

def p_perros_seccion(request):
    return render(request, "core/public/busca-perros.html")

def p_contacto(request):
    return render(request, "core/public/contacto.html")

def p_nosotros(request):
    return render(request, "core/public/acercade.html")

def p_info_perro(request):
    return render(request, "core/public/info-perro.html")

def p_info(request):
    return render(request, "core/public/info.html")

def p_login(request):
    return render(request, "core/public/login.html")

def p_registro(request):
    return render(request, "core/public/registrate.html")

def p_rpass(request):
    return render(request, "core/public/Rpass.html")

def p_busca_perros(request):
    return render(request, "core/public/busca-perros.html")



            