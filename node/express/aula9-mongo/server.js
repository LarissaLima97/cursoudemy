//Aula conexão e primeiro model
require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => { //garante que somente após a conexão poderá fazer qualquer outra coisa 
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes'); 
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(
    express.urlencoded(
        {
            extended:true
        } 
    )
);

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views')); //define a pasta onde estão os arquivos
app.set('view engine', 'ejs'); //engine utilizada para renderizar o html, permitindo criação de condições dentro do próprio html 

//Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor execuntando na porta 3000');
        console.log('Acessar: http://localhost:3000');
    });
} )

