
const articulosCarrito = [];

const containerArticulos = document.querySelector("#containerArticulos");

/* ---------- */

/* DECLARACION DE FUNCIONES */

function cargarArticulos(elemento) {

  let fragmento = document.createDocumentFragment();

  
    let div = document.createElement('div');
    div.classList.add('producto');

    div.innerHTML += `    
        <img src=${elemento.imagen} alt="producto">
        <h3>${elemento.nombre}</h3>
        <p>${elemento.precio}</p>
        <button class="btn" id=${elemento.id}>Agregar al Carrito</button>                                           
    `;

  fragmento.append(div);
  
  containerArticulos.append(fragmento);

  let botones = document.querySelectorAll(`.btn`);
  botones.forEach(function(boton){
    agregarCarrito(boton);
  })
}

function agregarCarrito(boton){
  boton.addEventListener('click',function(evento){

    let id = evento.target.id;
    let articuloBuscado = articulosZapatillas.find( (elemento) => {return elemento.id == id});
    // let articuloBuscado = articulosZapatillas.find( (elemento) => elemento.id == id);
    console.log(articuloBuscado);
    articulosCarrito.push(articuloBuscado);
    alert('Articulo agregado en el Carrito');
    console.log(articulosCarrito);
  })
}


for (let index = 0; index < articulosZapatillas.length; index++) {
  if (articulosZapatillas[index].oferta == true) {
    cargarArticulos(articulosZapatillas[index]);
  }else{
    continue
  }
  
}

/* FUNCIONES QUE SE INVOCAN */
/**
 * Funcion que permite cargar todos los articulos
 */
//cargarArticulos(articulosZapatillas);

/**
 * Funcion para agregar al Carrito
 */



/*
for (let index = 0; index < articulosZapatillas.length; index++) {
  
  console.log(articulosZapatillas[index].nombre);
  
}*/
/*
articulosZapatillas.forEach(function (elemento) {
  console.log(elemento.imagen);

  containerArticulos.innerHTML += `
      <div class="producto">
				<img src= ${elemento.imagen} alt="producto">
				<h3>${elemento.nombre}</h3>
				<p>${elemento.nombre}</p>
				<p>${elemento.precio}</p>
				<a href="#">Ver más</a>
        <button class="btn">Añadir al carrito</button>
			</div>
  `;
});
*/
