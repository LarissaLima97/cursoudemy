/* Métodos úteis para objetos

    Já vimos
    Object.keys(retorna as chaves); 
    Object.freeze(Não permite alteração)
    Object.defineProperties(define várias propriedades)
    Object.definePorperty(define uma propriedade)

    **************Essa aula veremos**************

    Object.values
    Object.entries
    Object.assign(obj,any)
    Object.getOwnPropertyDescriptor(obj, 'prop')
    ...(spread)
*/

//Spread(...) utilizado para copiar o objeto em outra variável
const produto = {nome: 'Produto', preco: 1.80}; 
const caneca = {
    ...produto,
    material: 'porcelana' //permite criação de outras propriedades
}; 

caneca.nome = 'Caneca';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

//Outra forma de copiar um objeto é utilizando o Object.assign que recebe um objeto vazio({}) e o objeto a ser copiado
const produto1 = {nome: 'Produto', preco: 1.80}; 
const prato = Object.assign({}, produto1, { material: 'porcelana'}) //possível adicionar outra propriedade criando um novo objeto 

prato.nome = 'prato';
prato.preco = 2.5;
console.log(produto1);
console.log(prato);

//Object.getOwnPropertyDescriptor retorna as configurações das propriedades, recebe o objeto e o nome da propriedade que queremos ver
const produto2 = {nome: 'Produto', preco: 1.80}; 
console.log(Object.getOwnPropertyDescriptor(produto2,'nome'));

//Object.values retorna um array com os valores das propriedades
const produto3 = {nome: 'Produto', preco: 1.80}; 
console.log(Object.values(produto3));

//Object.entries retorna um array com o nome da propriedade e o valor dela
const produto4 = {nome: 'Produto', preco: 1.80, material: 'plástico'}; 
console.log(Object.entries(produto4));



