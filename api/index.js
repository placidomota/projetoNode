const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá Placido , bem vindo ao express');  
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em :' + data);
});