const nombres = [ "Juan", "Pedro", "Ana", "Luis", "Maria","Elena","sofia","Carlos"];

console.log("lista de nombres:");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);    
}

let cantidadNombres = nombres.length;
console.log("\n Cantidad total de nommbres:" + cantidadNombres);

let nombreBuscado = "Maria";
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i]  == nombreBuscado) {
        console.log(  "\n El nombre '" + nombreBuscado + "'no fue encontado en el array.");
        break;
    }
}
if (!encontrado) {
    console.log("\n El nombre'" + nombreBuscado+"'no fue encotrado  en el array.");        
}

let nombremaslargo = [0]
for (let i = 1; i < nombres.length; i++) {
    if (nombres[i].length > nombremaslargo.length) {
        
    }    
}

console.log("\n El nombre mas largo es:" + nombremaslargo);

console.log("\n Nombres en Mayusculas: ")
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].toUpperCase());    
}
//nuevo nombre
let nuevoNombre = "Gabriela";
nombres.push(nuevoNombre);
console.log("\lista actualizada de nombres (despues de agregar '"+ nuevoNombre+")");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
//elimier el ultimo
nombres.pop()
console.log("\lista de nombres despues de eliminar el ultimo");
for (let i = 0; i < nombres.length ; i++) {
    console.log(nombres[i]);
}

//ivertir nombres 
console.log("\n Nombres en orden inverso:");
for (let i = nombres.length -1 ; i >= 0; i--) {
    console.log(nombres[i]);
    
    
}

