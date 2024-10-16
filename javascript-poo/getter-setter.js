class Carro {
    #velocidade;  //Para evitar  alteração da velocidade acima do limite, usamos uma chave privada
    constructor(nome) {
        this.nome = nome;
        this.#velocidade = 0;
    }
    
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return; 
        this.#velocidade = valor;

    }
    get velocidade() {
        return this.#velocidade;
    }

    acelerar() {
        if(this.#velocidade >=  100) return; 
            this.#velocidade++;
    }

    desacelerar() {
        if(this.#velocidade <= 0) return; 
        this.#velocidade--;
    }
}

const c1 = new Carro('Fusca'); 

// for(let i=0; i < 200; i++) {
//     c1.acelerar();
// }

c1.velocidade= 10; //set
console.log(c1.velocidade) //get

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome; 
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto (valor) {
        valor = valor.split(' ');
        console.log(valor)
        console.log(this.nome = valor.shift()); 
        console.log(this.sobrenome = valor.join(' '));
        
    }
}

const p1 = new Pessoa('Luiz', 'Miranda'); 
p1.nomeCompleto = 'Luiz Miranda Oliveira'; 
console.log(p1.nome); 
console.log(p1.sobrenome);