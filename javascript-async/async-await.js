function rand(min = 0,max = 3) {
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

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1 ', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2 ', rand());
        console.log(fase2);

        const fase3 = await esperaAi( 111, rand());
        console.log(fase3);

        console.log('Terminamaos na fase: ', fase3);
    } catch (e) {
        console.log(new Error(e));
    }
    
}

executa();

/*
        ***  3 ESTADOS DE UMA PROMISE ***
    
    -PENDENTE: A promise está sendo executada porém ainda não retornou um valor;
    -FULFILLED: A promise foi executada com sucesso;
    -REJECTED: Houve uma falha na execução da promise.
*/