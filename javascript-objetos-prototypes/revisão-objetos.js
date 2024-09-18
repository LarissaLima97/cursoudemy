//Forma de criar um objeto literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

//Formas de acessar os valores do objeto
console.log(pessoa.nome); //Luiz
console.log(pessoa['sobrenome']); //Otávio

//Exemplo de um acesso dinâmico 
const chave = 'nome'; 
console.log("Acesso dinâmico", pessoa[chave])

//Outra forma de criar um objeto com construtor 
const pessoa1 = new Object();
pessoa1.nome = 'Luiz'; 
pessoa1.sobrenome = 'Otávio'; 
pessoa1.idade = 30;

console.log(pessoa1.nome); //Luiz
console.log(pessoa1.sobrenome); //Otávio

// delete pessoa1.nome;
// console.log(pessoa1); //{ sobrenome: 'Otávio' }

//Métodos são funções que estão dentro do objeto que executa ações 

pessoa1.falarNome = function(){
    return(`${this.nome} está falando seu nome.`); 
};

console.log(pessoa1.falarNome()); //Luiz está falando seu nome.

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};


console.log(pessoa1.getDataNascimento()); //1994

//Utilizado para percorrer os valores do objeto
for (let chave in pessoa1) {
    console.log(pessoa1[chave]); 
}

/*Para criar um objeto de uso frequente sem ser de forma literal, por exemplo um novo cliente, se utiliza moldes podendo ser: Factory functions, 
 Constructor functions e Classe(uma sitaxe sugar voltada para abstrair a complexidade de factory e constructor functions que foi a forma que o js encontrou para
 trabalhar com herança) pois corre o risco de ao ser codado literalmente algo passar despercebido
*/

//Exemplo de uma factory function 

function criaPessoa(nome,sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return`${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);

//Exemplo de constructor function

function Pessoa(nome, sobrenome) {
    this.nome = nome; 
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Luiz', 'Otávio'); 
console.log(p2);

/*Para não permitir alterações no objeto pode ser utilizado o Object.freeze(valor) mas não é muito viável pois além de impedir alterações também impede que delete
uma chave ou objeto por completo
Mas existe uma forma de definir que algumas propriedades ou somente uma não seja alterada, utilizando defineProperty(somente uma) ou defineProperties(várias)
*/

//Exemplo de defineProperty e defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true,
            configurable: true
        },
        preco:{
            enumerable: true, 
            value: preco, 
            writable: true,
            configurable: true
        },
    })

    Object.defineProperty(this, 'estoque',{
        enumerable: true, //mostra as chaves 
        value: estoque, //valor da propriedade
        writable: true, //pode editar 
        configurable:false // configurável (deletar por exemplo, neste caso não vai poder)
    }); 
}

const prod1 = new Produto('Camiseta', 20,3);
prod1.estoque = 5000; //altera o valor pois writable está como true 
delete prod1.estoque; //não deleta pois o configurable está como false
console.log(prod1); 

/*Getters e Setters são métodos de um objeto mas também uma forma de proteger propriedades,por exemplo, uma prop estoque só poderá receber números 
então é criado um método que verrefica se o que está sendo passado é um número */

//Exemplo de Getter e Setter em uma constructor function

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque; 

    Object.defineProperty(this, 'estoque',{
        enumerable: true, //mostra as chaves 
        configurable:false, // configurável (deletar por exemplo, neste caso não vai poder)
        get: function() {
            return estoquePrivado
        },
        set: function(valor) { //garante que o valor do estoque sempre vai ser um número 
            if(typeof valor !== 'number'){
                throw new TypeError('Value is not a number');
            }
            estoquePrivado = valor; 
        }
    }); 
}

const prod2 = new Produto('Camiseta', 20,3);
prod2.estoque = 'oi';
console.log(prod2.estoque);