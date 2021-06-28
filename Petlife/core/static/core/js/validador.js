$.validator.setDefaults({
  invalidHandler: function () {
    alert("Tienes un campo mal ingresado");
  },
  submitHandler: function () {
    alert("Tus datos han sido enviados exitosamente!");
    onclick = location.href = "home.html";
  },
});

$(document).ready(function () {
  $("#formulario").validate({
    rules: {
      nombres: {
        required: true,
        minlength: 2,
      },

      apellidos: {
        required: true,
        minlength: 2,
      },
      correo: {
        required: true,
        email: true,
      },
      password1: {
        required: true,
        minlength: 4,
      },
      password2: {
        required: true,
        equalTo: password1,
      },

      //terminos y condiciones
    },
    messages: {
      //mensajes de error, envio sin datos
      nombres: {
        required: "Por favor, ingresa tu nombre de pila completo",
        minlength: "Debes ingresar al menos 2 caracteres",
      },

      apellidos: {
        required: "Por favor, ingresa tu apellido completo",
        minlength: "Debes ingresar al menos 2 caracteres",
      },

      correo: {
        required: "Por favor, ingresa un correo válido",
      },

      password1: {
        required: "Por favor, ingresa una contraseña",
        minlength:
          "Tu contraseña debe ser de al menos 4 caracteres de longitud",
      },

      password2: {
        required: "Por favor, ingresa una contraseña",
        equalTo: "Por favor, ingresa la misma contraseña de arriba",
      },
    },

    highlight: function (element) {
      $(element)
        .parents(".col-sm-10")
        .addClass("has-error")
        .removeClass("has-success");
    },
    unhighlight: function (element) {
      $(element)
        .parents(".col-sm-10")
        .addClass("has-success")
        .removeClass("has-error");
    },
  });
});
// $("#nombres").validate({

//     rules: {
//       nombres: {
//         required: true,
//         minlength: 5,
//       },
//       txtContraseña: {
//         required: true,
//         minlength: 5,
//       },
//       txtRepetirContraseña: {
//         required: true,
//         equalTo: "#id_txtContraseña",
//       },
//     },
//     messages: {
//         "nombres": {
//             required: 'Ingrese nombre',
//             minlength: 'Mínimo 5 caracteres'
//         },
//         "txtContraseña": {
//             required: 'ingrese la contraseña',
//             minlength: 'Mínimo 5 caracteres'
//         },
//         "txtRepetirContraseña": {
//             required: 'Repita la contraseña',
//             equalTo: 'Debe ser igual al campo anterior'
//         }
//     }
//   });
  
