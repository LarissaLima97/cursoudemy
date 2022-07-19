
const nome = prompt('Digite seu nome completo:');
const quantidadeLetras = nome.length;
const segundaLetra = nome.charAt(1);
const indexPrimeiraLetra = nome.indexOf("L");
const indexUltimaLetra = nome.lastIndexOf("a");
const ultimasTresLetras = nome.slice(-3); //tamanho da string -3 
const palavrasNome = nome.split(" ");
const nomeMaisuclo = nome.toUpperCase();
const nomeMinusculo= nome.toLowerCase();

document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br />`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é:  <strong>${nome.charAt(1)}</strong><br />`;
document.body.innerHTML += `Qual o primeiro índice da letra L no seu nome? <strong>${nome.indexOf("L")}</strong><br />`;
document.body.innerHTML += `Qual o último índice da letra A no seu nome?  <strong>${nome.lastIndexOf("a")}</strong><br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br />`;
document.body.innerHTML += `As palavras do seu nome são:  <strong>${nome.split(" ")}</strong><br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br />`;


    