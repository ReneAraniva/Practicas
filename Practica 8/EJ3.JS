// Importamos el módulo readline para manejar la entrada del usuario
const readline = require('readline');

// Creamos una interfaz para leer del terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definimos la contraseña correcta
const contrasenaCorrecta = "1234";

// Función para pedir la contraseña al usuario
function pedirContrasena() {
  rl.question("Introduce la contraseña: ", (contrasenaIntroducida) => {
    if (contrasenaIntroducida !== contrasenaCorrecta) {
      console.log("Contraseña incorrecta. Inténtalo de nuevo.");
      pedirContrasena(); // Volvemos a pedir la contraseña
    } else {
      console.log("¡Bienvenido! Has introducido la contraseña correcta.");
      rl.close(); // Cerramos la interfaz readline
    }
  });
}

// Llamamos a la función para iniciar el bucle
pedirContrasena(); 
