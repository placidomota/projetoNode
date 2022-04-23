const express = require('express');
const app = express();

let data = new Date();

let mensagemDoDia= require('./mensagemDoDia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornaMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});  
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em :' + data);
});
