import GeraCpf from './modules/GeraCpf';
import './assets/css/style.css';

(function() {
    const gera = new GeraCpf(); 
    const cpfGerado = document.querySelector('.cpf-gerado'); 
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();//chama a função

//iife immediately invoked function expression 