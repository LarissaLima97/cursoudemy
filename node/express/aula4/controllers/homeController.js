exports.paginaInicial = (req,res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"><br>
        Idade: <input type="text" name="idade"><br>
        <button>Enviar</button>
        </form>
    `);
}

exports.enviaForm = (req,res) => {
    res.send('Ei sou sua nova rota de POST')
}