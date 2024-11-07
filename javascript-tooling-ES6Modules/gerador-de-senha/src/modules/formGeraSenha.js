import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdeCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiscula = document.querySelector('.chk-maisculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const btnGerarSenha = document.querySelector('.gerar-senha');

export default () => {
    btnGerarSenha.addEventListener('click', (e) => {
        e.preventDefault();
        senhaGerada.innerHTML = gera();
    })
};

function gera() {
    const senha = geraSenha(
        qtdeCaracteres.value,
        chkMaiscula.checked,
        chkMinuscula.checked, 
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || 'Nada selecionado';
}