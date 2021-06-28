$.validator.setDefaults({
  invalidHandler: function () {
    alert("Tienes un campo mal ingresado");
  },
  // submitHandler: function () {
  //   alert("Tus datos han sido enviados exitosamente!");
  //   // onclick = location.href = "home.html";
  //   location.href = "home.html"
  //   console.log('llegue')
  // },
});

$(document).ready(function(){
    $("#adopt").validate({
        rules:{
            correo: {
                required: true,
                email: true,
              },

            nombre: {
                required: true,
                minlength: 10,
            },
            
            telefono:{
                required: true,
                minlength: 8,
            },
        },
        messages: {
            nombre: {
                required: "Por favor, ingresa tu nombre de pila completo",
                minlength: "Debes ingresar al menos 10 caracteres",
              },
            
            correo: {
                required: "por favor ingrese su correo ",
                email: "Ingrese un correo valido",
              },
            
            telefono: {
                required: "por favor ingresa un numero valido"
            },
        },
        submitHandler: function () {
          alert("Tus datos han sido enviados exitosamente!");
          // onclick = location.href = "home.html";
          location.href = "home.html"
          console.log('llegue')
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
    })
})    
