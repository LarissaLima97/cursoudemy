class ValidaCpf {
    constructor(cpfEnviado) {
        this.cpfEnviado = cpfEnviado; 
        this.cpfLimpo = this.cpfEnviado.replace(/\D+/g, '');
    }

    validaCpf() {
        if(typeof this.cpfLimpo === 'undefined') return false; 
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false; 

        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); 
        const primeiroDigito = this.criaDigito(cpfSemDigitos);
        const segundoDigito = this.criaDigito(cpfSemDigitos + primeiroDigito);

        const cpfValidado = cpfSemDigitos + primeiroDigito + segundoDigito; 

        return cpfValidado === this.cpfLimpo ? true : false;

    }

    criaDigito(cpfSemDigitos) {
        let total = 0;
        let regressivo = cpfSemDigitos.length + 1; 

        for(let stringNumerica of cpfSemDigitos) {
            total += regressivo * Number(stringNumerica);
            regressivo--
        }

        const digito = 11 - (total % 11); 
        return digito >= 9 ? '0' : String(digito);
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); 
        return sequencia === this.cpfLimpo;
    }
}

// const cpf1 = new ValidaCpf('070.987.720-03');
// console.log(cpf1);
// console.log(cpf1.validaCpf());