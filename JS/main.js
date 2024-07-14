
const url= "https://fakestoreapi.com/products";
let botonesAñadir =document.querySelector(".boton-agregar");// boton para agregar elemento al carrito
const productosLista = document.querySelector("#productos-Conteiner"); // contenedor donde se va a cargar la lista de productos
const numeroCarrito = document.querySelector(".carrito-cantidad");
const carrito= [];
const arr= [];


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
            <img class="imgclass" src="${element.image}">
            <h2>${element.title}</h2> 
            <p>$ ${element.price}</p>
            <button class="boton-agregar" id="${element.id}">agregar a carrito</button>     
        `;
        productosLista.append(div)
    });
    botonAgregarAsignado()
}


function botonAgregarAsignado() {
    botonesAñadir =document.querySelectorAll('.boton-agregar')
    botonesAñadir.forEach(boton => {
        boton.addEventListener('click', (agregarCarrito))
    });
};

fetch(url) //realizo peticion a la api
    .then( (response) => response.json() )
    .then( (productos) => agregar(productos))


function agregar(prod){
    prod.forEach(element => {
        arr.push(element);
    })
    mostrarProdcutos(prod)
}


function agregarCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregar= arr.find(producto => producto.id == idBoton);
    
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


// pop up cookies----------------------------------------------------------

document.addEventListener('DOMContentLoaded',() => {
    const popUp = document.querySelector('.card-pop-up');
    const fondo = document.querySelector('asd1');


    setTimeout(() => {
        popUp.classList.add('visible');
        fondo.classList.add('blur');
    }, 5000);

    const AceptarGalles= document.querySelector('.galletitas');
    const NoAceptarGalles= document.querySelector('.no-galletitas');

    AceptarGalles.addEventListener('click', () =>{
        popUp.classList.remove('visible');
        alert('te menti no hay galletitas, pero si tenemos altos descuentazos!')
    // ahora vemos que ponemos aca como reaccion
    })

    NoAceptarGalles.addEventListener('click', () => {
        popUp.classList.remove('visible');

        alert('Perfecto, no habian galletitas');
    })

})






