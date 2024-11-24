const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req, res) =>{
    res.get('!Hola mundo¡ Este es mi sevidor Express.');
})

app.listen(PORT, () =>{
    console.log('servidor corriendo en http://localhost:${PORT}');
    })