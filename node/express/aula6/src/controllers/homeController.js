exports.paginaInicial = (req,res) => {
    res.render('index');
}

exports.enviaForm = (req,res) => {
    res.send('Ei sou sua nova rota de POST')
}