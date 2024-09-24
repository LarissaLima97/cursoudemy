//Manipulando prototypes com objetos literais
const objA = {
    chaveA:'A'
};

const objB = {
    chaveB:'B'
};

const objC = {
    chaveC:'C'
};

//Utilizado o objA como um prototype do objB
Object.setPrototypeOf(objB, objA); 
console.log('Valor de objA', objB.chaveA); 

//Utilizado o objB como um prototype do objC, além disso permite o acesso a chave de A pois objA é prototype de objB
Object.setPrototypeOf(objC, objB); 
console.log('Valor de objA', objC.chaveA); 
console.log('Valor de objB', objC.chaveB); 

//Manipulando prototypes com funções construtoras
function Produto(nome, preco){
    this.nome = nome; 
    this.preco = preco;
}
//criando métodos no prototype da função Produto 
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco *(percentual/100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco *(percentual/100));
};

const p1 = new Produto('Camiseta',50); 
p1.desconto(10);
p1.aumento(30);

console.log(p1)


const p2  = {
    nome:'Caneca',
    preco: 15
}; 

//Utilizando o prototype da função construtora Produto no obj literal p2
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

//Muda o construtor do p2 para Produto
console.log(p2)


//Criando um obj e já setando o  prototype dele
//Oject.create() recebe como primeiro arg o prototype e depois as chaves do objeto criado
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable:true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable:true,
        configurable: true,
        enumerable: true,
        value: 41
    }
});

p3.aumento(10); 
console.log(p3)