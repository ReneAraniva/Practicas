const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num;
function pedirnumero() {
    rl.question('Ingrese un número mayor a 5:', (input)=>{
        num = parseInt(input);
        if (num > 5) {
            console.log(`El numero es valido ${num}`);
            rl.close();
        }else{
            console.log("El numero debe ser mayor a 5.");
            pedirnumero();
            
        }
    })
}

pedirnumero()
