from django.urls import path
from .views import home, poblar_bd, gatos, gatos_seccion, gatos_ficha, p_home, p_perros_seccion, p_info_perro, p_info, p_login, p_registro, p_rpass, p_nosotros, p_contacto, p_busca_perros

 
urlpatterns = [
    path('gatos/home', home, name="home"),
    path('poblar_bd', poblar_bd, name="poblar_bd"),
    path('gatos/<action>/<id>', gatos, name="gatos"),
    path('gatos_seccion', gatos_seccion, name="gatos_seccion"),
    path('gatos_ficha/<id>', gatos_ficha, name="gatos_ficha"),
    path('', home, name="public_home"),
    path('perros_seccion', p_perros_seccion, name="perros_seccion"),
    path('nosotros', p_nosotros, name="nosotros"),
    path('contacto', p_contacto, name="contacto"),
    path('info_perro', p_info_perro, name="info_perro"),
    path('info', p_info, name="info"),
    path('login', p_login, name="login"),
    path('registro', p_registro, name="registro"),
    path('r_pass', p_rpass, name="r_pass"),
    path('busca_perros', p_busca_perros, name="busca_perros"),
]
