//Factory Functions e Prototypes 
//Acoplado e com herança
// function criaPessoa(nome,sobrenome) {
//     const PessoaPrototype = {
//         falar() {
//             console.log(`${this.nome} está falando`);
            
//         },

//         comer() {
//             console.log(`${this.nome} está comendo`);
            
//         },

//         beber() {
//             console.log(`${this.nome} está bebendo`);
            
//         }
//     }
//     return Object.create(PessoaPrototype, {
//         nome: {value:nome}, 
//         sobrenome: {value: sobrenome}
//     });
// }

// const p1 = criaPessoa('Luiz', 'Miranda');


//Desacoplado e utilizando composição
//Também conhecido com mixin, quando usamos métodos aleatórios em um objeto que não possui herança(hierarquia), estamos usando os métodos pois precisamos
//deles dentro de Pessoa e não porque existe uma hierarquia obrigando o uso destes métodos

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
        
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
        
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
        
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, beber); //criando o objeto a partir dos mixins, onde passa um objeto vazio e o que quero que ele tenha
//Também pode ser usado o spread, terá o mesmo resultado: const pessoaPrototype = {...falar, ...comer, ...beber};

function criaPessoa(nome,sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value:nome}, 
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Luiz', 'Miranda');