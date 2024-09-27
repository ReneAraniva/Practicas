const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function EdadUser(edad) {
    if (edad >= 0 && edad <= 12) {
        console.log("Eres un niño.");
      } else if (edad >= 13 && edad <= 17) {
        console.log("Eres un adolescente.");
      } else if (edad >= 18 && edad <= 35) {
        console.log("Eres un adulto joven.");
      } else if (edad >= 36 && edad <= 59) {
        console.log("Eres un adulto.");
      } else if (edad >= 60) {
        console.log("Eres un adulto mayor.");
      } else {
        console.log("Edad inválida.");
      }
    }

rl.question(`¿Cuántos años tienes? ` ,(edad) => {
    EdadUser(edad);
    rl.close();
})

