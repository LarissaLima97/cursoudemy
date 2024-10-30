//Pega o click em qualquer lugar da página, verifica qual é o elemento clicado
document.addEventListener('click', e=> {
    const el = e.target; 
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault(); //previne o click no link ser direcionado para página
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const response = await fetch(href); 
    const html = await response.text();

    if(response.status >= 200 && response.status < 300) {
        return carregaResultado(html);
     } else {
         console.error(response.statusText);
     }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


/*
    *** SEM SER ASYNC ***

//Pega o click em qualquer lugar da página, verifica qual é o elemento clicado
document.addEventListener('click', e=> {
    const el = e.target; 
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault(); //previne o click no link ser direcionado para página
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href');
    fetch(href)
        .then(response => {
            if(response.status >= 200 && response.status < 300) {
               return response.text()
            } else {
                console.error(response.statusText);
            }
        }) //retorna outra próxima em texto
        .then(html => carregaResultado(html))
        .catch(error => console.error(error));
 
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

*/


