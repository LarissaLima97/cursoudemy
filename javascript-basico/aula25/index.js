
const nome = prompt('Digite seu nome completo:');
const quantidadeLetras = nome.length;
const segundaLetra = nome.charAt(1);
const indexPrimeiraLetra = nome.indexOf("L");
const indexUltimaLetra = nome.lastIndexOf("a");
const ultimasTresLetras = nome.slice(-3); //tamanho da string -3 
const palavrasNome = nome.split(" ");
const nomeMaisuclo = nome.toUpperCase();
const nomeMinusculo= nome.toLowerCase();

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${quantidadeLetras} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra L no seu nome? ${indexPrimeiraLetra}<br />`;
document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${indexUltimaLetra}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasTresLetras}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasNome}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMaisuclo}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinusculo}<br />`;


    