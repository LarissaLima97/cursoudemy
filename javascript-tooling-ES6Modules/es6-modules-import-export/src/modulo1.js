//Módulos são os próprios arquivos js, existe um export, onde vocẽ determina se uma variável, função ou classe deve ser exportada
//possibilitando que outros arquivos utilize essas funcionalidades

export const nome  = 'Luiz'; 
export const sobrenome = 'Miranda'; 
export const idade = 30; 

export function soma (x,y) { //export padrão deste módulo
    return x + y;
}

export default class Pessoa { //mais utilizado quando uma classe é muito usada
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export default (x,y) => x * y; //Possível também exportar uma arrow function anômina


//              *********OUTRA FORMA DE EXPORT **********

// const nome  = 'Luiz'; 
// const sobrenome = 'Miranda'; 
// const idade = 30; 

// function soma (x,y) {
//     return x + y;
// }

// export { nome as nome2, sobrenome, idade, soma };


//              ******PARA TORNAR CONST DEFAULT**********

// const nome  = 'Luiz'; 
// const sobrenome = 'Miranda'; 
// const idade = 30; 

// function soma (x,y) {
//     return x + y;
// }

// export { nome as default, sobrenome, idade, soma };
