exports.paginaInicial = (req,res,) => {
    res.render('index');
    return;
}

exports.enviaForm = (req,res) => {
    res.send(req.body);
    return;
}