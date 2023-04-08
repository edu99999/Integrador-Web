const containerArticulos = document.querySelector("#containerArticulos");
const inputSearch = document.querySelector("#inputSearch");
const articulosCarrito = [];


function cargarArticulos(arrayArticulos) {
    containerArticulos.innerHTML = '';
  let fragmento = document.createDocumentFragment();

  arrayArticulos.forEach(function (elemento) {
    let div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML += `    
          <img src=.${elemento.imagen} alt="producto">
          <h3>${elemento.nombre}</h3>
          <p>${elemento.precio}</p>
          <a href="#">Ver más</a>
          <button class="btn" id=${elemento.id}>Agregar al Carrito</button>                                           
      `;
    fragmento.append(div);
  });
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


cargarArticulos(articulosZapatillas);

inputSearch.addEventListener('input',function(evento){
    console.log(evento.target.value);
    console.log(evento.target.value.toString().toLowerCase());
    
    let nombreArticulo = evento.target.value.toString().toLowerCase();
    let articulosBuscados = articulosZapatillas.filter( (elemento) => elemento.nombre.toString().toLowerCase().includes(nombreArticulo));

    console.log('resultado => ' , articulosBuscados);
    cargarArticulos(articulosBuscados);
})