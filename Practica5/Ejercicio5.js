let edad = 19;
let membrecia = "VIP";

if (edad < 18) {
    console.log(  "Eres menor de edad,puedes acceder a la mebresia juvenil.");
    
} else if(edad >= 18 && edad <= 60) {
    console.log(   "Eres un adulto, puedes acceder a todas las membresia.");    
} else {
    console.log(   "Eres mayor de 60 años, tienes descuentos en la membrecias.");
}

switch(membrecia) {
    case "Básica":
        console.log("Membrecia Básica: Acceso a todas las areas de entretenimiento.");
        break;
    case "Estandar":
        console.log("Membrecia Estándar: Acceso a todas las áreas de entrenamiento y clases grupales.");
        break;
    case "VIP":
        console.log("Plan VIP: Acceso completo,con beneficios adicionales como spa y entrenadores personalizados.");
        break;
    default:
        console.log("Tipo de membrecia no valida.");
        break;  
}