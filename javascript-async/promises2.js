//Métodos úteis para promises

function rand(min,max) {
    min *= 1000;
    max *= 1000; 
    return Math.floor(Math.random() * (max-min) + min); 
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('Not a string');
            return;
        } 

        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo)
    })
}

//Métodos: Promise.all, Promise.race Promise.resolve Promise.reject

const promises = [
    'Primeiro valor', 
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
]; 

//Promise.all() Usado para resolver várias promessas de uma vez só, na ordem do array por exemplo
Promise.all(promises)
    .then(function(res){
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })


const promises2 = [ 
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5))
]; 

//Promise.race() Recebe todas as promises e retorna a primeira que foi resolvida
//Obs: Apesar dele já te retorna um valor, ele continua processando as outras promises
Promise.race(promises2)
    .then(function(res){
        console.log(res);
    })
    .catch(e => {
        console.log('Erro:', e);
    })

//Promise.resolve() Já retorna a promise resolvida, ou seja, já existe valor
function baixaPagina() {
    const emCache = false; 

    if(emCache) {
        return Promise.resolve('Página já em cache');
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro:', e));


//Promise.reject() Já vai retornar o erro, ou seja, uma promessa rejeitada
function baixaPagina() {
    const emCache = true; 

    if(emCache) {
        return Promise.reject('Erros');
    } else {
        return esperaAi('Baxei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro:', e));