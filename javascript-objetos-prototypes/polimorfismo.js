///Classe mãe 
function Conta(agencia,conta,saldo) {
    this.agencia = agencia;
    this.conta = conta; 
    this.saldo = saldo; 
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`); 
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor; 
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag./Conta: ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toFixed(2)}`);
}

// const conta = new Conta(11,22,30);
// conta.verSaldo();
// conta.depositar(5);
// conta.sacar(34);
// conta.sacar(6);

function ContaCorrente(agencia,conta,saldo,limite) {
    Conta.call(this, agencia, conta, saldo); 
    this.limite = limite; 
}

ContaCorrente.prototype = Object.create(Conta.prototype); //Adicionando os prototypes de Conta em Conta Corrente
ContaCorrente.constructor = ContaCorrente; //Atribuindo o construtor a Conta Corrente

/*Ao modificar um método em classes filhas, temos uma situação de polimorfismo pois apesar da classe filha ter o mesmo comportamento da classe mãe,
o método saque exige um comportamento diferente, conhecido como polimorfismo de sobrescrita*/

ContaCorrente.prototype.sacar = function(valor) {
    if(valor >( this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`); 
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

const contaC = new ContaCorrente(12,23,0,100);
contaC.verSaldo();
contaC.depositar(5);
contaC.sacar(100);


function ContaPoupanca(agencia,conta,saldo){ 
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

const contaP = new ContaPoupanca(13,24,20);
contaP.verSaldo();
contaP.depositar(5);
contaP.sacar(5);