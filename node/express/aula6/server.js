//Aula arquivos estáticos

const express = require('express');
const app = express();
const routes = require('./routes'); 
const path = require('path');

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

app.use(routes);

app.listen(3000, () => {
    console.log('Servidor execuntando na porta 3000');
    console.log('Acessar: http://localhost:3000');
});
