let perritos_content = document.querySelector("#perritos");
let alerta = document.querySelector(".alert");

let api_random_dogs = "https://dog.ceo/api/breeds/image/random/10";
let api_random_one_dog = "https://dog.ceo/api/breeds/image/random";

const verPerrito = (link) => {
  console.log(link);
  window.location.href = link;
};

const crearElementoHTML = (html) => {
  let div = document.createElement("div");
  div.innerHTML = html.trim();
  return div.firstChild;
};

const errorMsg = () => {
  alerta.classList.remove("alert-primary");
  alerta.classList.add("alert-danger");
  alerta.innerHTML = "Error al capturar las imagenes";
  content.append(error);
};

const cargarPerritos = async (endpoint) => {
  let request = await fetch(endpoint)
  return request.json()
}

const cargarMasPerritos = async () => {
  alerta.style.display = "block";
 perritos_content.innerHTML = "";
  cargarInicio();
};

const cardPerritos = (index, url) => {
  return `
  <div class="col">
  <div class="card mt-2" style="width: 20rem;">
      <img id="dog-${index}" src="${url}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">Perrito Perdido</h5>
          <p class="card-text">Es tu amiguito?</p>
          <button class="btn btn-primary" onclick="verPerrito('info_perro?perrito=${url}')">Ver Perrito</button>
      </div>
      </div>
  </div>`
}

const cargarInicio = async () => {
  cargarPerritos(api_random_dogs)
      .then(({message}) => {
          if (message) {
              console.log(message);
              let cards = ""
              let col = document
              let cont = 0

              message.forEach((src, i) => {
                  if (cont === 0) {
                      col = document.createElement("div")
                      col.classList.add("row")
                  }

                  if (i % 3 === 0) {
                      cards += cardPerritos(i, src)
                      cont += 1
                  } else {
                      cards += cardPerritos(i, src)
                      cont += 1

                      if (cont === 3) {
                          col.innerHTML = cards
                          perritos_content.append(col)
                          cards = ""
                          cont = 0
                      }
                  }
              });

              alerta.style.display = "none"
          }
      }, err => {
          errorMsg("Error al capturar las imagenes")
          return null
      })


  
}

cargarInicio();
