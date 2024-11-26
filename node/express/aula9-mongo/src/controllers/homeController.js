
//Exemplo de como popular a base de dados
// const HomeModel = require('../models/HomeModel');

// HomeModel.find(), apresenta todos os dados salvos

// HomeModel.create({
//     titulo: 'Outro título de teste',
//     descricao: 'Outra descrição de teste.'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req,res,) => {
    res.render('index');
    return;
}

exports.enviaForm = (req,res) => {
    res.send(req.body);
    return;
}