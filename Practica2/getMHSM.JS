let fechaActual =  new Date();
let horas =  fechaActual.getHours();
let minutos =  fechaActual.getMinutes();
let segundos =   fechaActual.getSeconds();
let milisegundos =  fechaActual.getMilliseconds();


console.log(`Hora actual:${horas}:${minutos}:${segundos}:${milisegundos}`);


//Obtener la fecha ctual utilizando el getDate dia, mes y año 
let fechaActual2 = new Date();
let dia = fechaActual2.getDate();
let mes = fechaActual2.getMonth() + 1;
let anio = fechaActual2.getFullYear();
console.log(`Fecha actual: ${dia}/${mes}/${anio}`);




