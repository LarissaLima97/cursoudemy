function calculaIMC (peso,altura) {
    if(typeof peso && typeof altura === 'number' ){
        const imc = peso / (altura * altura);
        if(imc < 18.5){
            return "Abaixo do peso";
        }
        else if(imc === 18.5 || imc <=24.9){
            return "Peso normal";
        }
        else if(imc === 25 || imc <= 29.9){
            return "Sobrepeso"
        }
        else if(imc === 30 || imc <= 34.29){
            return "Obesidade grau 1"
        }
        else if(imc === 35 || imc <= 39.9){
            return "Obesidade grau 2"
        }
        else if(imc > 40){
            return "Obesidade grau 3"
        }
    }

    return "Digite números";

}

console.log(calculaIMC( "oi", "vc"));