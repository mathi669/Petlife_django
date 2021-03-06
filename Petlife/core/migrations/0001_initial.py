# Generated by Django 3.2.4 on 2021-06-26 19:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Especie',
            fields=[
                ('idEspecie', models.IntegerField(primary_key=True, serialize=False, verbose_name='Id de Especie')),
                ('nombreEspecie', models.CharField(max_length=80, verbose_name='Nombre de la Especie')),
            ],
        ),
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('macota', models.CharField(max_length=6, primary_key=True, serialize=False, verbose_name='Mascota')),
                ('edad', models.CharField(max_length=80, verbose_name='edad')),
                ('raza', models.CharField(blank=True, max_length=80, null=True, verbose_name='Raza')),
                ('imagen', models.ImageField(default='sinfoto.jpg', upload_to='images/', verbose_name='Imagen')),
                ('Especie', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='core.especie')),
            ],
        ),
    ]
