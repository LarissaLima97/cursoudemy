//Aula Express Session e Flash Messages
require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => { //garante que somente após a conexão poderá fazer qualquer outra coisa 
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session'); 
const MongoStore = require('connect-mongo'); 
const flash = require('connect-flash'); 



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

const sessionOptions = session({
    secret: 'ahahahahhjjjsjsjsjkkkooiiolllllooii()',
    store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }), 
    resave: false,
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, 
        httpOnly: true
    }
}); 

app.use(sessionOptions);
app.use(flash());

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

