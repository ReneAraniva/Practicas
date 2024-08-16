function numeroParoImpar(numero){
    if ( numero % 2===0) {
        return "El numero" ,numero ,"par"
        
    } else {
          return "El numero" ,numero ,"es impar"
    }

}

const numero = 7;
const resultado = numeroParoImpar (numero);
console.log(resultado);
