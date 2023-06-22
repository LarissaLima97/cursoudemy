const resultado = document.querySelector('.container h1');
const date = new Date(); 
resultado.innerHTML = new Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(date);
