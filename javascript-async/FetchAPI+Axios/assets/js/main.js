axios('./pessoas.json')
    .then(resposta => carregaElementoNaPagina(resposta.data));


function carregaElementoNaPagina(json) {
    const table = document.createElement('table'); 
    for(let pessoa of json) {
        const tr = document.createElement('tr'); 

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);
        
        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2); 

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.email;
        tr.appendChild(td3); 

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado'); 
    resultado.appendChild(table);
}

/*
    ***SEM AXIOS***
fetch('./pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementoNaPagina(json)); 

function carregaElementoNaPagina(json) {
    const table = document.createElement('table'); 
    for(let pessoa of json) {
        const tr = document.createElement('tr'); 

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);
        
        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2); 

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3); 

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado'); 
    resultado.appendChild(table);
}
*/
