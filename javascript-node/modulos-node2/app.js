const multiplicacao = require('./mod'); 

console.log(multiplicacao(2,2))

console.log(__filename); //caminho absoluto de um arquivo  
console.log(__dirname); //caminho absoluto de uma pasta

//para manipular caminhos 
//Cria o caminho de acordo com a necessidade do sistema
const path = require('path');
console.log(path.resolve(__dirname, '..', '..')); // os dois últimos parâmetros voltam 2 pastas