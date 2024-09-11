//Crear una función que simule el procesamiento de un pedido de comida usando una promesa. La promesa debe resolver si el pedido se realiza correctamentey si no  rechazar en caso de error.
function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
      console.log("Preparando tu pedido...");
      setTimeout(() => { 
        if ( pedido) { 
            resolve(`Pedido procesado correctamente: ${pedido}`);
        } else {
            reject("Pedido no válido");
        }
      }, 2000);
    });
  }
  
  procesarPedido('Papas Fritas')
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));
