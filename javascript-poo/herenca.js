class DispositivoEletrônico {
    constructor(nome) {
        this.nome = nome; 
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletrônico('Pc');
d1.ligar(); 
d1.desligar();
d1.desligar();

//Para uma classe herdar atributos e métodos da outra usamos extends
class Smartphone extends DispositivoEletrônico {
    constructor(nome, marca) {
        //É necessário utilizar o super() pois ele chama o constructor da classe mãe
        super(nome);
        this.marca = marca;
    }
}

const s1 = new Smartphone('Redmi nOte 10', 'Xiaomi'); 
s1.ligar();
s1.desligar();
console.log(s1)


class Tablet extends DispositivoEletrônico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
    //Também é possível alterar métodos já existentes na classe mãe
    ligar() {
        console.log('Você alterou o método ligar')
    }

    falaOi() {
        console.log('oi')
    }
}

const t1 = new Tablet('Tablet 1', 'prata'); 
t1.ligar();
t1.falaOi();
console.log(t1);