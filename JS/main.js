//-------------------------------------------------------------
let carrito = [];
let producto = "";
let precio = 0;
let cantidadProducto = 0;
let continuarCompra = false;
let precioTotal = 0;
let descuento = 0;
let TotalPagar = 0;
agregarOtro =true;

//array con los productos----------------------------------------------------------------------------------
const productos = [ 
    {producto:'Colonos de catan',precio: 80000, categoria: 'juego de mesa', stock: true, etiqueta:['colonos', 'catan', 'estrategia', 'comercio',]},
    {producto:'Reino Dragon',precio: 42000, categoria: 'juego de mesa', stock: true, etiqueta:['reino', 'amigos', 'dragon', 'heroes', 'dragon']},
    {producto:'Atenea',precio: 46000, categoria: 'juego de mesa', stock: true, etiqueta:'atenea'},
    {producto:'Hdp',precio: 35000, categoria: 'cartas', stock: true, etiqueta:['humor', 'cartas', 'hdp']},
    {producto:'Digalo con memes',precio: 25000, categoria: 'cartas', stock: true, etiqueta:['memes', 'digalo'] }
]

// cantidad del producto----------------------------------------------------------------------------------
const solicitarCantidad = () => {    
    let cantidadProducto =  parseInt(prompt("ingresar cuantos productos vas a llevar:"))

// indicando que no puede estar el campo vacio ni puede ser menor o igual a 0
    while (isNaN(cantidadProducto) || cantidadProducto <= 0) {
        alert('por favor, ingresar un numero valido');
        cantidadProducto = parseInt(prompt("Ingresar cuantos productos vas a llevar:"));
    }
    return cantidadProducto
}

//busqueda por nombre --------------------------------------------------------------------------------
const buscarProducto = () => {
    let entradaUsuario = prompt("Lista de productos: \nColonos de catan \nReino Dragon \nHdp \nAtenea \nDigalo con memes \nIngresar nombre del producto:");
    let entradaLowerCase = entradaUsuario.toLowerCase();
    let productoEncontrado = productos.find(producto => producto.producto.toLocaleLowerCase() === entradaLowerCase);

    if (productoEncontrado) {
        alert(`Nombre: ${productoEncontrado.producto}\nPrecio: ${productoEncontrado.precio}\nCategoría: ${productoEncontrado.categoria}`);
        return productoEncontrado;
    } else {
        let productoEtiqueta = productos.filter(producto => producto.etiqueta.includes(entradaLowerCase));
        if (productoEtiqueta.length > 0) {
            let mensajeEtiqueta = 'Productos encontrados: \n';
            productoEtiqueta.forEach(producto => {
                mensajeEtiqueta += `\nNombre: ${producto.producto}\nPrecio: ${producto.precio}\nCategoría: ${producto.categoria}\n`;
            });
            alert(mensajeEtiqueta);
            return productoEtiqueta[0];
        } else {
            alert('Lo siento, no encontramos lo que buscabas.');
            return null;
        }
    }
};




let mensajeBienvenida = alert('Bienvenidos a Jugar, la jugueteria mas jugueteria del mundo. a continuacion te mostraremos los juegos que tenemos disponibles');



do {
    let productoSeleccionado = buscarProducto()
    
    if(productoSeleccionado) {
        let cantidad =solicitarCantidad()
        carrito.push({producto: productoSeleccionado.producto, precio: productoSeleccionado.precio, cantidad: cantidad})
        precioTotal += productoSeleccionado.precio * cantidad;
    }

    continuarCompra =confirm("¿Quieres agregar otro producto?")

} while (continuarCompra);

alert(`El monto total a pagar es: ${precioTotal}`);
let pagar = confirm("¿Deseas proceder con el pago?");

if (pagar) {
    alert("¡Felicidades, compra exitosa!");
} else {
    alert("¡Vuelva pronto!");
}