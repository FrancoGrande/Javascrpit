//-------------------------------------------------------------
let carrito = [];
let producto = "";
let precio = 0;
let cantidadProducto = 0;
let cantidadTotal = 0;
let continuarCompra = false;
let precioTotal = 0;
let descuento = 0;
let TotalPagar = 0;


//array con los productos----------------------------------------------------------------------------------
const productos = [ 
    {producto:'Colonos de catan',precio: 80000, categoria: 'juego de mesa', stock: true, etiqueta:['colonos', 'catan', 'estrategia', 'comercio',]},
    {producto:'Reino Dragon',precio: 42000, categoria: 'juego de mesa', stock: true, etiqueta:['reino', 'amigos', 'dragon', 'heroes', 'dragon']},
    {producto:'Atenea',precio: 46000, categoria: 'juego de mesa', stock: true, etiqueta:'atenea'},
    {producto:'Hdp',precio: 35000, categoria: 'cartas', stock: true, etiqueta:['humor', 'cartas', 'hdp']},
    {producto:'Digalo con memes',precio: 25000, categoria: 'cartas', stock: true, etiqueta:['memes', 'digalo'] }
]



//cantidad del producto----------------------------------------------------------------------------------
const solicitarCantidad = () => {    
    let cantidadProducto =  parseInt(prompt("ingresar cuantos productos vas a llevar:"))

// indicando que no puede estar el campo vacio ni puede ser menor o igual a 0
    while (isNaN(cantidadProducto) || cantidadProducto <= 0) {
        alert('por favor, ingresar un numero valido');
        cantidadProducto= parseInt(prompt('ingresar cuantos productos vas a llevar'));
    }
    return cantidadProducto;
}
// const cantidadValida = solicitarCantidad();



// NOTA PARA MI: ahora tenes que hacer que esta cantidadValida se sume al monto

//----------------------------------------------------------------------------------------------------
// pagos en 3, 6 o 9 cuotas--------------------------------------------------------------------------
const cuotas3 = (numeroA) => {numeroA/3};
const cuotas6 = (numeroA) => {numeroA/6};
const cuotas9 = (numeroA) => {numeroA/9};

//----------------------------------------------------------------------------------------------------
//busqueda por nombre --------------------------------------------------------------------------------



const buscarProducto = () => {
    let entradaUsuario = prompt("Lista de productos: \nColonos de catan \nReino dragon \nhdp \nAtenea \nDigalo con memes \nIngresar nombre del producto:");
    let entradaLowerCase = entradaUsuario.toLowerCase();
    let productoEncontrado = false
// buscar por nombre ---------------------------------------------------------------------
do{
    let productoEncontrado = productos.find(producto => producto.producto.toLocaleLowerCase() === entradaLowerCase)
        if(productoEncontrado) {
            alert(`Nombre: ${productoEncontrado.producto}
                Precio: ${productoEncontrado.precio}
                Categoría: ${productoEncontrado.categoria}`);

            productoEncontrado =true;
        } else {
            let productoEtiqueta =  productos.filter(producto => producto.etiqueta.includes(entradaLowerCase));
//buscar por etiqueta---------------------------------------------------------------------
            if (productoEtiqueta.length > 0 ){
                let mensajeEtiqueta = 'Productos encontrados: \n';
                productoEtiqueta.forEach(producto => {
                mensajeEtiqueta += `\nNombre: ${producto.producto}\nPrecio: ${producto.precio}\nCategoría: ${producto.categoria}\n`;
                });
                alert (mensajeEtiqueta);
                productoEncontrado =true;
            } else {
                alert('Lo siento, no encontramos lo que buscabas.');
                };
            };
        } while(!productoEncontrado);
    };




let mensajeBienvenida = alert('Bienvenidos a Jugar, la jugueteria mas jugueteria del mundo. a continuacion te mostraremos los juegos que tenemos disponibles');

do {
    buscarProducto()

    
    switch (producto.toLowerCase()) {
        case catan:
            
            break;
        case reino:
            
            break;
        case atenea:
            
            break;
        case hdp:
            
            break;
        case memes:
            
            break;
    
        default:
            break;
            alert('producto no encontrado')
            
    }



} while (!endshop);



let finalizarCompra =confirm('Finalizar compra?')