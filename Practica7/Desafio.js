const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Contador(entrada) {
  let vocales = 0;
  let digitos = 0;

  // Recorrer cada carácter
  for (let i = 0; i < entrada.length; i++) {
    const caracter = entrada[i].toLowerCase();
    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
      vocales++;
    } else if (!isNaN(caracter)) {
      digitos++;
    }
  }

  console.log(`Vocales: ${vocales}, Dígitos: ${digitos}`);
}

rl.question('Ingrese una cadena: ', (respuesta) => {
  if (respuesta.trim() !== "") {
    Contador(respuesta);
  } else {
    console.log("Por favor, ingrese una cadena no vacía.");
    rl.question('Ingrese una cadena: ', (respuesta) => {
      Contador(respuesta);
    });
  }
  rl.close();
});
