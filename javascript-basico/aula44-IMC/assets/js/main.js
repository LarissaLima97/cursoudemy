function calculaIMC (e) {
    e.preventDefault();

    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);
    const resultado = document.querySelector("#resultado");

    if(typeof peso === 'number' && typeof altura === 'number'){
        const imc = Math.round(peso / (altura * altura));
        if(imc < 18.5){
            resultado.innerHTML = `<p style="background-color:rgba(221, 49, 43, 0.575);">Seu IMC é ${imc} (Abaixo do peso)</p>`;
        }
        else if(imc === 18.5 || imc <=24.9){
            resultado.innerHTML = `<p style="background-color:rgba(97, 245, 83, 0.575);">Seu IMC é ${imc} (Peso normal)</p>`;
        }
        else if(imc === 25 || imc <= 29.9){
            resultado.innerHTML = `<p style="background-color:rgba(236, 218, 55, 0.575);">Seu IMC é ${imc} (Sobrepeso)</p>`;
        }
        else if(imc === 30 || imc <= 34.29){
            resultado.innerHTML = `<p style="background-color:rgba(233, 150, 56, 0.575);">Seu IMC é ${imc} (Obesidade grau 1)</p>`;
        }
        else if(imc === 35 || imc <= 39.9){
            resultado.innerHTML = `<p style="background-color:rgba(236, 61, 55, 0.575);">Seu IMC é ${imc} (Obesidade grau 2)</p>`;
        }
        else if(imc > 40){
            resultado.innerHTML = `<p style="background-color:rgba(236, 61, 55, 0.575);">Seu IMC é ${imc} (Obesidade grau 3)</p>`;
        }
        else {
            resultado.innerHTML = `<p style="background-color:rgba(236, 61, 55, 0.575)";>Altura ou peso inválidos!</p>`;
        }
    }
}

const botaoCalcular = document.querySelector("#botao-calc");
botaoCalcular.addEventListener("click", calculaIMC);