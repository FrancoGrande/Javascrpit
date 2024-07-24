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
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Seguro que deseas finalizar la compra?",
        text: "Si completas la compra mis perritos hoy comen croquetas!",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si, aguanten los perritos",
        cancelButtonText: "No me importan tus perritos!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
            title: "Compra exitosa!",
            text: "Hoy comen croquetas :)",
            icon: "success"
        });
        } else if (
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire({
            title: "Pusiste que no!",
            text: "Mis perritos... :c",
            icon: "error"
        });
        }
    });
    vaciarCarrito();
}

function cargarCarrito(){
    if(carrito.length > 0){
        contenedorCarrito.innerHTML = "";
        let total =0;
        carrito.forEach(element => {
            const div = document.createElement("div");
            div.classList.add("container-carrito");
            let sumar = (element.price * element.cantidad);
            total +=sumar;
            div.innerHTML = `
            <div class="detalle-compra">
                <div class="detalle-compra-item">
                    <div class="detalle-producto">
                        <li><small>producto</small></li>
                        <img class="img-carrito" src="${element.image}" alt="">
                    
                    </div>
                    <div class="detalle-cantidad">
                        <li><small>Cantidad</small></li>
                        <li class="item-compra">${element.cantidad}</li>
                    </div>
                    <div class="detalle-precio">
                        <li><small>Precio Unitario</small></li>
                        <li class="item-compra">${element.price}</li>
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

        totalCompra.innerHTML = total;// agrega que los decimales no se extiendan
        
        
    }
    else{ 
        contenedorCarrito.innerHTML = "";
        vaciarTotal.classList.add("noVisible");
        totalCompra.classList.add("noVisible");
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
    localStorage.setItem("carrito-cargado",JSON.stringify(carrito));
}
