
let botonesAñadir =document.querySelector(".boton-agregar");// boton para agregar elemento al carrito
const productosLista = document.querySelector("#productos-Conteiner"); // contenedor donde se va a cargar la lista de productos
const numeroCarrito = document.querySelector(".carrito-cantidad");
const carrito= [];


const productos = [ //lista de productos en un array
    {id: 1,
    nombre:'Catan',
    imagen: "assets/catan.jpg",
    precio: 80000,
    categoria: 'juego de mesa',
    stock: true,
    cantidad:1,
    etiqueta:['catan', 'estrategia', 'comercio',]},
    
    {id: 2,
    nombre:'Reino Dragon',
    imagen: "assets/reino dragon.jpg",
    precio: 42000,
    categoria: 'juego de mesa',
    stock: true,
    etiqueta:['reino', 'amigos', 'dragon', 'heroes']},
    
    {id: 3,
    nombre:'Atenea',
    imagen: "assets/atenea.jpg",
    precio: 46000,
    categoria: 'juego de mesa',
    stock: true,
    etiqueta:'atenea'},

    {id: 4,
    nombre:'saboteour',
    imagen: "assets/saboteour.jpg",
    precio: 35000,
    categoria: 'cartas',
    stock: 2,
    etiqueta:['humor', 'cartas']},

    {id: 5,
    nombre:'Remando en dulce de leche',
    imagen: "assets/remando en dulce de leche.jpg",
    precio: 31000,
    categoria: 'cartas',
    stock: true,
    etiqueta:['humor', 'cartas']},

    {id: 6,
    nombre:'Call of Cthulhu',
    imagen: "assets/call of cthulhu.jpg",
    precio: 89000,
    categoria: 'cartas',
    stock: true,
    etiqueta:['asdasd']},

    {id: 7,
    nombre:'Osito',
    imagen: "assets/osito.jpg",
    precio: 35000,
    categoria: 'muñecos', 
    stock: true, 
    etiqueta:['niños']},

    {id: 8,
    nombre:'Princesa',
    imagen: "assets/princesa.jpg",
    precio: 40000, 
    categoria: 'muñecos', 
    stock: true, 
    etiqueta:['niños']},
]



let carritoProductos;// donde se va a contener los elementos agregados al carrito
let productosLocal = localStorage.getItem("carrito-cargado");

if(productosLocal) {
    carritoProductos= JSON.parse(productosLocal);
    actualizarNumeroCart()
} else {
    carritoProductos=[];
}

function mostrarProdcutos(productos) {
    productosLista.innerHTML= "";
    productos.forEach(element => {
        const div =document.createElement('div');
        div.classList.add('card2');
        div.innerHTML= `
            <img class="imgclass" src="${element.imagen}">
            <h2>${element.nombre}</h2> 
            <p>$ ${element.precio}</p>
            <button class="boton-agregar" id="${element.id}">agregar a carrito</button>     
        `;
        productosLista.append(div)
    });
    botonAgregarAsignado()
}


mostrarProdcutos(productos);

function botonAgregarAsignado() {
    botonesAñadir =document.querySelectorAll('.boton-agregar')
    botonesAñadir.forEach(boton => {
        boton.addEventListener('click', (agregarCarrito))
    });
};




function agregarCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregar= productos.find(producto => producto.id == idBoton);
    
    if (carritoProductos.some(producto => producto.id == idBoton)){
        const index= carritoProductos.findIndex(producto => producto.id == idBoton);
        carritoProductos[index].cantidad++;

    }else {
        productoAgregar.cantidad= 1;
        carritoProductos.push(productoAgregar);
    }
    actualizarNumeroCart()
    localStorage.setItem("carrito-cargado",JSON.stringify(carritoProductos));
    }

    function actualizarNumeroCart(){
    let number = carritoProductos.reduce((acc,producto) => acc + producto.cantidad, 0);
    numeroCarrito.innerHTML = number;
}

