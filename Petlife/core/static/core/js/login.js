$.validator.setDefaults({
  invalidHandler: function () {
    alert("Nombre de usuario o contraseña incorrecta");
  },
});

$(document).ready(function () {
  $("#login").validate({
    rules: {
      correo: {
        required: true,
        email: true,
      },
      password3: {
        required: true,
        minlenght: 7,
      },
    },
    messages: {
      correo: {
        required: "Por favor, ingresa su correo",
        email: "Correo debe ser valido"
      },
      password3: {
        required: "Por favor, ingresa una contraseña",
        minlenght:
          "Tu contraseña debe ser de al menos 7 caracteres de longitud",
      },
    },
    submitHandler: function () {
      alert("ha iniciado sesion exitosamente");
      location.href = "home.html";
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
