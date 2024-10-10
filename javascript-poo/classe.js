class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    /*estes métodos já foram automaticamente linkados no prototype do objeto
    sendo diferente das funções construtoras que precisamos ir acessado o prototype e 
    definindo os métodos nele*/
    falar() {
        console.log(`${this.nome} está falando`)
    }
    comer() {
        console.log(`${this.nome} está comendo`)
    }
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Luiz', 'Miranda'); 

console.log(p1);
console.log(p1.falar());
console.log(p1.comer());
console.log(p1.beber());

