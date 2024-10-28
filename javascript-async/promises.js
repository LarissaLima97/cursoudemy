//Promises , é uma promessa de que em algum momento algo irá ser retornado

function rand(min,max) {
    min *= 1000;
    max *= 1000; 
    return Math.floor(Math.random() * (max-min) + min); 
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Not a string'); 

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

esperaAi('Conexão com o BD', rand(1,3))
    .then(res => {
        console.log(res); 
        return esperaAi('Buscando dados da BASE', rand(1,3)) //mandando novamente uma promessa
    })
    .then(res => {
        console.log(res) // recebendo a msg anterior 'Buscando dados..'
        return esperaAi('Tratando os dados da BASE', rand(1,3)); 
    })
    .then(res => {
        console.log(res);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log(e)
    })

//Simulando erro
esperaAi(4, rand(1,3)) 
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log('ERRO:', e);
    })

console.log('Provando que o JS vai fazendo as coisas paralelamente, isso aqui vai aparecer antes das promises');
