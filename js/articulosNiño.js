const articulosCarrito = [];

const containerArticulos = document.querySelector("#containerArticulos");

function cargarArticulos(elemento) {
  let fragmento = document.createDocumentFragment();

  let div = document.createElement("div");
  div.classList.add("producto");

  div.innerHTML += `    
        <img src=.${elemento.imagen} alt="producto">
        <h3>${elemento.nombre}</h3>
        <p>${elemento.precio}</p>
        <button class="btn" id=${elemento.id}>Agregar al Carrito</button>                                           
    `;

  fragmento.append(div);

  containerArticulos.append(fragmento);

  let botones = document.querySelectorAll(`.btn`);
  botones.forEach(function (boton) {
    agregarCarrito(boton);
  });
}

function agregarCarrito(boton) {
  boton.addEventListener("click", function (evento) {
    let id = evento.target.id;
    let articuloBuscado = articulosZapatillas.find((elemento) => {
      return elemento.id == id;
    });
    // let articuloBuscado = articulosZapatillas.find( (elemento) => elemento.id == id);
    console.log(articuloBuscado);
    articulosCarrito.push(articuloBuscado);
    alert("Articulo agregado en el Carrito");
    console.log(articulosCarrito);
  });
}

for (let index = 0; index < articulosZapatillas.length; index++) {
  if (
    articulosZapatillas[index].nombre
      .toString()
      .toLowerCase()
      .includes("niñ")
  ) {
    cargarArticulos(articulosZapatillas[index]);
  } else {
    continue;
  }
}

