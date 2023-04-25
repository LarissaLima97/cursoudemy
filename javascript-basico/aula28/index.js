const num = Number(window.prompt('Digite um número'));

document.getElementById("numero").innerHTML = num;

document.getElementById("raiz-quadrada").innerHTML = Math.sqrt(num);

document.getElementById("num-inteiro").innerHTML = Number.isInteger(num);

document.getElementById("nan").innerHTML = Number.isNaN(num);

document.getElementById("arredonda-baixo").innerHTML = Math.floor(num);

document.getElementById("arredonda-cima").innerHTML = Math.ceil(num);

document.getElementById("casa-decimal").innerHTML = num.toFixed(2);

