//Módulos no node

const nome = 'Luiz'; 
const sobrenome = 'Miranda'; 

const falaNome = () => nome + " " + sobrenome

//Formas de exportar 

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

//Atalho 

// exports.NOME = nome; //não é necessário que a variável tenha o mesmo nome da chave
exports.nome = nome;
exports.sobrenome = sobrenome; 
exports.falaNome = falaNome; 
this.qualquerCoisa = "O que eu quiser exportar"; // neste caso o this aponta tanto pra exports quanto pra module.exports, o que permite que este valor seja 
                                                //adicionado no exports

console.log(exports);

// Exemplo sem exportar tudo que for usado neste módulo 
 
class Pessoa {
    constructor(nome ) {
        this.nome = nome; 
    }
}

exports.Pessoa = Pessoa; 

/* Para exportar tudo de uma vez 

module.exports = {
    nome, sobrenome, falaNome, Pessoa
};
*/