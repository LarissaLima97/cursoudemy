/*Middlewares são funções que podem ser usadas antes da resposta ao cliente como depois da resposta enviada pelo servidor, podendo 
modificar dados, verificar permissões entre outros. 
*/

exports.middlewareGlobal = (req,res,next) => {
    if(req.body.cliente){ 
        req.body.cliente = req.body.cliente.toUpperCase();//é possível alterar os valores recebidos
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`);
        console.log();
    }
    next();
}; 