let plan = "Premium";

switch(plan) {
    case "Básico":
        console.log("Plan Básico: Acceso limitado a contenido.");
        break;
    case "Estandar":
        console.log("Plan Estándar: Acceso  la mayoria del contenido.");
        break;
    case "Premium":
        console.log(  "Plan Premium: Acceso a todo el contenido.");
        break;
    default:
        console.log(" Plan no encontrado.");
        break;  
}