//Aula req.params, req.query, req.body 

const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
);

app.get('/', (req,res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"><br>
        Idade: <input type="text" name="idade"><br>
        <button>Enviar</button>
        </form>
    `);
});

//http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=sei ---> req.params 
// campanha=googleads é uma query string 

//Exemplo de req.params
app.get('/testes/:id_usuario?/:parametro?', (req, res) => {
    console.log(req.params);
    res.send(req.params);
})

//Exemplo de req.query ---> query string http://localhost:3000/query/?nome=Luiz&sobrenome=Miranda&idadade=30
app.get('/query', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/', (req,res) => {
    console.log(req.body);
    res.send(`O que você enviou foi: ${req.body.nome}`); //lembarando que esse 'nome' veio do atributo name do input
}); 


app.listen(3000, () => {
    console.log('Servidor execuntando na porta 3000');
    console.log('Acessar: http://localhost:3000');
});
