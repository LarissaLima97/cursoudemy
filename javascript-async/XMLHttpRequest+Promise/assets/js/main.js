const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); 
        xhr.open(obj.method, obj.url, true); //último parâmetro é um valor boolean onde diz se vai ser síncrono(false) ou assíncrono(true)
        xhr.send(); //utilizado se for usar POST
    
        xhr.addEventListener('load', ()=> {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }else {
                reject(xhr.statusText);
            }
        })
    }); 

}

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
    const obj = {
        method: 'GET',
        url: href
    }

    try {
        const response = await request(obj); 
        carregaResultado(response); 
    } catch (error) {
        console.log(error);
    }
 
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

//xhr = xmlhttprequest
//Um componente do AJAX 
//Jeito antigo de carregar um componente na página sem atualizá-la
/*
const request = obj => {
    const xhr = new XMLHttpRequest(); 
    xhr.open(obj.method, obj.url, true); //último parâmetro é um valor boolean onde diz se vai ser síncrono(false) ou assíncrono(true)
    xhr.send(); //utilizado se for usar POST

    xhr.addEventListener('load', ()=> {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        }else {
            obj.error(xhr.statusText);
        }
    })
}

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
    const obj = {
        method: 'GET',
        url: href, 
        success(response) {
            carregaResultado(response); 
        },
        error(errorText) {
            console.log(errorText)
        }
    }
    request(obj)
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
*/
