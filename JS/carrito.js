const carrito = JSON.parse(localStorage.getItem("carrito-cargado"));
const carritoVacio = document.querySelector(".text-carrito-vacio");
const vaciarTotal = document.querySelector(".vaciar-total");
const contenedorCarrito = document.querySelector(".container-carrito");
const botonVenta = document.querySelector(".boton-venta");
const botonVaciar = document.querySelector(".boton-vaciar");
let botonesEliminar = document.querySelectorAll(".icono-eliminar");
const totalCompra = document.querySelector(".item-compra");







cargarCarrito()

botonVaciar.addEventListener("click",vaciarCarrito);
function vaciarCarrito(){
    carrito.length = 0;
    localStorage.setItem("carrito-cargado", JSON.stringify(carrito));
    cargarCarrito();
}


botonVenta.addEventListener("click", venta);
function venta(){
    window.alert("Gracias por su compra");
    vaciarCarrito();
}

function cargarCarrito(){
    if(carrito.length > 0){ // controlo que el carrito este creado pero que no tenga elementos a mostrar en la pag carrito
        contenedorCarrito.innerHTML = "";
        carritoVacio.classList.add("noVisible");
        let total =0;
        carrito.forEach(element => {
            const div = document.createElement("div");
            div.classList.add("container-carrito");
            let sumar = (element.precio * element.cantidad);
            total +=sumar;
            div.innerHTML = `
            <div class="detalle-compra">
                <div class="detalle-compra-item">
                    <div class="detalle-producto">
                        <li><small>producto</small></li>
                        <img class="img-carrito" src="${element.imagen}" alt="">
                    
                    </div>
                    <div class="detalle-cantidad">
                        <li><small>Cantidad</small></li>
                        <li class="item-compra">${element.cantidad}</li>
                    </div>
                    <div class="detalle-precio">
                        <li><small>Precio Unitario</small></li>
                        <li class="item-compra">${element.precio}</li>
                    </div>
                    <div class="detalle-total">
                        <li><small>Total</small></li>
                        <li class="item-compra">${sumar}</li>
                    </div>
                    <i class='bx bxs-trash icono-eliminar' id="${element.id}"></i>    
                </div> 
            </div>
                `
            contenedorCarrito.append(div);
        })
    
        totalCompra.innerHTML = total;
        
        
    }
    else{ //si carrito esta vacio muestro mensajes y oculto elementos
        contenedorCarrito.innerHTML = "";
        vaciarTotal.classList.add("noVisible");
        totalCompra.classList.add("noVisible");
        carritoVacio.classList.remove("noVisible");
    }
    actualizarBotonesEliminar();//actualizo botones añadidos
}

function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".icono-eliminar");
    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click",eliminarDeCarrito);
    });
}

function eliminarDeCarrito(e){
    const idBoton = e.currentTarget.id;
    const valor = carrito.findIndex(producto => producto.id == idBoton);
    if(carrito[valor].cantidad > 1){
        carrito[valor].cantidad = carrito[valor].cantidad -1;
    }
    else{
        carrito.splice(valor,1);
    }
    cargarCarrito();
    localStorage.setItem("carrito-cargado",JSON.stringify(carrito));//guardo en el localStorage para volver a cargar despues actualizado
}