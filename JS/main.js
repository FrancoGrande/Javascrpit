
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

//creamos las cards por cada elemento del array y mostramos sus propiedades 
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

//asignamos el call al boton de cada card
function botonAgregarAsignado() {
    botonesAñadir =document.querySelectorAll('.boton-agregar')
    botonesAñadir.forEach(boton => {
        boton.addEventListener('click', (agregarCarrito))
    });
};


// hacemos la peticion a la api
fetch(url) 
    .then( (response) => response.json() )
    .then( (productos) => agregar(productos))

// agregamos los elementos al array para luego mostrarlos 
function agregar(prod){
    prod.forEach(element => {
        arr.push(element);
    })
    mostrarProdcutos(prod)
}

// agregamos un producto al carrito y actualizamos el numero del carrito en el navbar
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

document.addEventListener('DOMContentLoaded',() => { // Espera a que el contenido este cargado para iniciar el proceso
    const popUp = document.querySelector('.card-pop-up');
    const fondo = document.querySelector('.asd1');

    function delay(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    async function mostrarPopUp () { // le damos dilay al pop up  antes de moestrarse 
            await delay(5000);
            popUp.classList.add('visible');
            fondo.classList.add('blur');
    };

    mostrarPopUp();  

    const AceptarGalles= document.querySelector('.galletitas');
    const NoAceptarGalles= document.querySelector('.no-galletitas');


    // boton aceptar o no aceptar 
    AceptarGalles.addEventListener('click', () =>{
        popUp.classList.remove('visible');
        fondo.classList.remove('blur');
        Swal.fire({
            icon: "success",
            title: "Te mentimos no hay galletitas",
            text: "Pero tenemos altos descuentazos!",
        });
    })

    NoAceptarGalles.addEventListener('click', () => {
        popUp.classList.remove('visible');
        fondo.classList.remove('blur');
        Swal.fire({
            icon: "error",
            title: "bueno....",
            text: "Igual no teniamos galletitas.",
        });
        
    });

});







// fin pop up cookies-------------------------------------------------------------






