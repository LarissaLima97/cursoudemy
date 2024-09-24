/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro. 

Definição de protótipo 
Protótipo é o temro usado para se referir ao que foi criado pela primeria vez, servido de modelo 
ou molde para futuras produções. 

Todos os objetos tem uma referência interna para um protótipo(___proto___) que vem da propriedade prototype da função construtora
que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do Js vai tentar encontrar este 
membro no próprio objeto e depois a cadeia de protótipos é usada até o topo(null) até encontrar(ou não ) tal membro. 

*/

//Neste caso haverá um consumo de recurso muito alto para o pc do cliente, deixando o pc mais lento e aplicação também 
// function Pessoa(nome, sobrenome) {
//     this.nome = nome; 
//     this.sobrenome = sobrenome; 
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // neste caso a cada instância criada vai ser criada todas as propriedades
// }

// //instância
// const pessoa1 = new Pessoa('Luiz', 'O.');
// const pessoa2 = new Pessoa('Maria', 'A.');

// console.log(pessoa1);

function Pessoa(nome, sobrenome) {
    this.nome = nome; 
    this.sobrenome = sobrenome; 
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome //dessa forma nãoi vai ser criado um método para cada pessoa
}
//instância
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');

console.log(pessoa1);
console.log(pessoa2);

