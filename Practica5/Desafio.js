//Ejercicio de DESAFÍO: Aplicar descuento según categoría de cliente y total de compra.
let categoria = "VIP";
let compra =  100;

switch(categoria) {
    case "Básica":
        descuento  = 0.05;
        console.log("Usted  es un cliente básico");
        break;
    case "Estandar":
        descuento  = 0.10;
        console.log("Usted es un cliente estandar");
        break;
    case "VIP":
        descuento  = 0.15;
        console.log("Usted es un cliente VIP");
        break;
    default:
        console.log("Tipo de membrecia no valida.");
        break;  
}

let totalConDescuento = compra - (compra * descuento);
console.log(`Su compra fue de: ${compra}`);
console.log(  "El total con descuento es: ", totalConDescuento);









