// ---------------------------------------------------Primera entrga proyecto final-Javascript-----------------------------------------



let product = "";
let price = 0;
let amount = 0;
let totalAmount = 0;
let continueShop = false;
let totalPrice = 0;
let discount = 0;
let  totalPay = 0;

let startShop = alert("Bienvenido a nuestro mercadoliebre, a continuación te mostraremos los productos que tenemos disponibles.");

do{
    do {
        
        product = prompt("¿Que desea comprar? Lista de productos: harina, fideos, carne, queso, pan, jugo, fiambre");
        amount = parseInt( prompt("¿Cuantos desea comprar?"));
        while (Number.isNaN(amount) || amount <= 0 ) {
            alert("no se ingreso un numero correcto");
            amount = parseInt(prompt("¿Cuantos queres comprar?"))
    
        }
    
        switch (product) {
            case "harina":
                price=400;
                break;
            case "fideos":
                price=200;
                break;
            case "carne":
                price=600;
                break;
            case "queso":
                price=700;
                break;
            case "pan":
                price=200;
                break;
            case "jugo":
                price=100;
                break;
            case "fiambre":
                price=600;
                break;
            default:
                alert("datos ingresados incorrectos.");
                price= 0;
                amount = 0;
        }
    
        totalPrice += price*amount;
        totalAmount += amount;
    
        if (totalPrice >= 500) {
            discount = 0.2* totalPrice;
        } else if (totalPrice >= 800) {
            discount = 0.4* totalPrice;
        } else if (totalPrice >= 1000) {
            discount = 0.5* totalPrice;
        } else {
            discount = 0;
        }
        totalPay = totalPrice - discount;
        
        continueShop = confirm("agregar mas productos?");

    } while (continueShop)

    function creditCash (numeroA) {
        return numeroA /3;
    }

    let credit = creditCash(totalPrice);

    let pay =confirm("si presiona Cancerlar abona con debito y se aplica el descuento, si presiona OK puede pagarlo en 3 cuotas pero sin descuento");
     
    if (pay){
        alert("va a pagar " + totalPrice + " en 3 cuotas de " + credit)
     } else {
        alert(`Ha comprado ` + totalAmount + ` productos, el monto total es de ` + totalPay + ` y el descuento es de ` + discount);
     }
    let endShop =confirm("finalizar compra?");
    
    if (endShop) {
        alert ("Vuelva prontos!");
    } else {
        alert("Continuando la compra");
    }
    
} while (!endshop)



