const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classificacaoImc = getClassificacaoImc(imc);

    const msg = `Seu IMC é ${imc} (${classificacaoImc})`;
    setResultado(msg,true);
})

function getImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function getClassificacaoImc (imc) {
    const classificacao = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return classificacao[5];
    if (imc >= 34.9) return classificacao[4];
    if (imc >= 29.9) return classificacao[3];
    if (imc >= 24.9) return classificacao[2];
    if (imc >= 18.5) return classificacao[1];
    if (imc < 18.5) return classificacao[0];
}

function criaElementoP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''

    const p = criaElementoP(); 

    if(isValid) {
        p.classList.add('resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}