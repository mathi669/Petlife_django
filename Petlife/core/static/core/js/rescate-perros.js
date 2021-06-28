let params = {};
let perritoImg = document.querySelector('#perrito')
let alerta = document.querySelector(".alert")

const cargarPerrito = () => {
    alerta.style.display = "none"
    perritoImg.src = params.perrito
}

const adoptar = () => {
    alert("Perrito Adoptado!")
   /*window.location = "../info.html"*/
   window.location = "home.html"
}

location.search.slice(1).split("&").forEach(function(pair) {
   pair = pair.split("=");
   params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
});

cargarPerrito()