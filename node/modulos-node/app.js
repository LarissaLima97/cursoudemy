//Em módulos próprios do node é feito desta maneira
const path = require('path'); // por ser próprio do node não é necessário passar o caminho
console.log(path);
//importando o módulo do node
const mod1 = require('./mod1');

//Para importar algo específico

//Pode ser assim 
// const falaNome = require('./mod1').falaNome;

//OU 

// const falaNome = mod1.falaNome;

//Usando destructuring

const  {nome, sobrenome, falaNome} = require('./mod1');

console.log(nome, sobrenome)
console.log(falaNome())

const { Pessoa } = require('./mod1'); 

const p1 = new Pessoa('Luiz');
console.log(p1);
