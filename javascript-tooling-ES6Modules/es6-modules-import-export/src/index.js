// import { nome as nome2, sobrenome, idade, soma } from "./modulo1"; // 'as' utilizado para renomear a variável vinda do export
// import { nome, sobrenome, idade, soma,Pessoa } from "./modulo1"
//import *  as outroModulo from "./modulo1.js" // importa tudo do arquivo

// const p1 = new Pessoa('Luna', 'Silva')
// console.log(p1)
// console.log(nome, sobrenome, idade);
// console.log(soma(10,10));

import Pessoa, {nome, sobrenome, idade, soma} from "./modulo1"; // sem as {} significa que o import vai buscar o export padrão do módulo
console.log(new Pessoa(nome,sobrenome));
console.log(nome, sobrenome, idade, soma(10,10));