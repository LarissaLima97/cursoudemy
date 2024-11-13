const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'})
}


// fs.writeFile(caminhoArquivo, 'Frase 1\n', {flag: 'a'})/*caminho, conteúdo, {flag:w apaga tudo dentro do arquivo caso ele já exista, para que não apague
//                                                         se utiliza flag:'a' }*/
