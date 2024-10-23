


// let cpf = '705.484.450-52';
// let cpf = '070.987.720-03'
// let cleanCpf = cpf.replace(/\D+/g,''); //remove o que não é número
// let arrayCpf = Array.from(cleanCpf);

// function catchFirstDigit () {
//     let removeTwoLastDigits = arrayCpf.slice(0,-2); 
//     let mutiplyNumbers = [10,9,8,7,6,5,4,3,2]
//     let totalSum = 0; 

//     for(let i = 0; i < removeTwoLastDigits.length; i++ ){
//         console.log(totalSum += removeTwoLastDigits[i] * mutiplyNumbers[i]);
//     }

//     let firstDigit = 11 - (totalSum % 11); 
//     if(firstDigit > 9) {
//         return firstDigit = 0;
//     }
//     return firstDigit;
// }

// function catchSecondDigit () {
//     let cpf = arrayCpf.slice(0,-1); 
//     let mutiplyNumbers = [11,10,9,8,7,6,5,4,3,2]
//     let totalSum = 0; 

//     for(let i = 0; i < cpf.length; i++ ){
//         console.log(totalSum += cpf[i] * mutiplyNumbers[i]);
//     }

//     let secondDigit = 11 - (totalSum % 11); 
//     if(secondDigit > 9) {
//         return secondDigit = 0;
//     }
//     return secondDigit;
// }

// function validateCpf (cpf) {
//     let cleanCpf = cpf.replace(/\D+/g,''); //remove o que não é número
//     let arrayCpf = Array.from(cleanCpf);
//     let removeTwoLastDigits = arrayCpf.slice(0,-2); 
//     let mutiplyNumbersFirstDigit = [10,9,8,7,6,5,4,3,2]
//     let totalSumFirstDigit = 0; 
//     let cpfValidate = removeTwoLastDigits;

//     if(typeof cleanCpf === 'undefined') return false;
//     if(cleanCpf.length !== 11) return false;

//     for(let i = 0; i < removeTwoLastDigits.length; i++ ){
//         totalSumFirstDigit += removeTwoLastDigits[i] * mutiplyNumbersFirstDigit[i];
//     }

//     let firstDigit = 11 - (totalSumFirstDigit % 11); 
//     if(firstDigit > 9) {
//         firstDigit = 0;
//     }
//     cpfValidate.push(firstDigit.toString())

//     let mutiplyNumbersSecondDigit = [11,10,9,8,7,6,5,4,3,2]
//     let totalSumSecondDigit = 0; 

//     for(let i = 0; i < cpfValidate.length; i++ ){
//         totalSumSecondDigit  += cpfValidate[i] * mutiplyNumbersSecondDigit[i];
//     }

//     let secondDigit = 11 - (totalSumSecondDigit  % 11); 
//     if(secondDigit > 9) {
//         secondDigit = 0;
//     }

//     cpfValidate.push(secondDigit.toString());

//     if(cpfValidate.join('') === cleanCpf){
//         return 'CPF Válido'
//     }
//     return 'CPF Inválido'

// }

// console.log(validateCpf('070.987.720-0'));
// console.log(catchFirstDigit());
// console.log(catchSecondDigit());


function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      get: function() {
        return cpfEnviado.replace(/\D+/g, '');
      }
    });
  }
  
  ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
  
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
  
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  };
  
  ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
  
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += (regressivo * Number(val));
      regressivo--;
      return ac;
    }, 0);
  
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  };
  
  ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    console.log('seqencia', sequencia)
    return sequencia === this.cpfLimpo;
  };
  
  const cpf = new ValidaCPF('705.484.450-52');
  
  if(cpf.valida()) {
    console.log('Cpf válido');
  } else {
    console.log('Cpf inválido');
  }