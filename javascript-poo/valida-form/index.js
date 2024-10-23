class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario') //seleciona o form
        this.eventos();
    }

    eventos() {
        //captura o evento de submit do form
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault() //Não permite que o form seja enviado 
        const camposValidos = this.camposSaoValidos(); 
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Form enviado');
            this.formulario.submit();
        }

    }

    camposSaoValidos() {
        let valid = true; 

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML; //pegando o texto da label
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais' );
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais' );
            valid = false; 
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'A senha precisa conter de 6 a 12 caracteres');
            valid = false;
        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa conter de 3 a 12 caracteres')
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { //regex que verifica se o usuário tem letras ou números
            this.criaErro(campo, 'Usuário precisa conter apenas letras e/ou números')
            valid = false;
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCpf(campo.value); 

        if(!cpf.validaCpf()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text'); 
        campo.insertAdjacentElement('afterend',div); //Insere a mensagem de erro no final do elemento campo
    }
}

const valida = new ValidaFormulario(); 