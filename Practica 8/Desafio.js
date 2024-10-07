const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const númeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function respuestaadivinanza () {
  rl.question('Adivina un número entre 1 y 100: ', (respuesta) => {
    const suposiciónUsuario = parseInt(respuesta);
    intentos++;

    if (suposiciónUsuario === númeroAleatorio) {
      console.log(`¡Felicidades! Adivinaste el número correcto en ${intentos} intentos.`);
      rl.close();
    } else if (suposiciónUsuario < númeroAleatorio) {
      console.log("Tu suposición es demasiado baja. ¡Inténtalo de nuevo!");
      respuestaadivinanza (); // Llamamos a la función recursivamente
    } else {
      console.log("Tu suposición es demasiado alta. ¡Inténtalo de nuevo!");
      askUser (); // Llamamos a la función recursivamente
    }
  });
}

respuestaadivinanza(); 