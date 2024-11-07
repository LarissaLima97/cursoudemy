const rand = (min, max) => Math.floor(Math.random() * (max-min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91)); 
const geraMinuscula = () => String.fromCharCode(rand(97,123)); 
const geraNumero = () => String.fromCharCode(rand(48,58)); 
const simbolos = ',.^~[]{}!@#$%*&()_=+-'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiscula, minuscula, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i <= qtd; i++ ) {
        maiscula && senhaArray.push(geraMaiuscula()); //avaliação de curto circuito, nesse caso se maiscula for true irá dar push no senhaArray
        minuscula && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return String(senhaArray.join('').slice(0,qtd))
}
