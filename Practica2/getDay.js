let fechaACtual = new Date();

//obtener del 0 domingo hasta el 6 sabado
let diaSemana = fechaACtual.getDay();

//mapeo de numero de los dias 
let diasSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves", "Viernes", "Sabado"];

let nombreDia = diasSemana[diaSemana];

console.log(`Hoy es: ${nombreDia}`);

