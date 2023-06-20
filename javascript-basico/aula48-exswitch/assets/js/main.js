function getDayOfWeek(dayOfWeek) {
    switch (dayOfWeek) {
    case 0:
        return 'Domingo';
    
    case 1:
        return 'Segunda-feira';

    case 2 :
        return 'Terça-feira'
    
    case 3:
        return 'Quarta-feira';
    
    case 4 :
        return 'Quinta-feira';
    
    case 5 :
        return 'Sexta-feira';
    
    case 6 :
        return 'Sábado'

    default :
        return ' '
    }
}

function getMonthName(month) {
    switch (month) {
    case 0:
        return 'Janeiro';
    
    case 1:
        return 'Fevereiro';

    case 2 :
        return 'Março'
    
    case 3:
        return 'Abril';
    
    case 4 :
        return 'Maio';
    
    case 5 :
        return 'Junho';
    
    case 6 :
        return 'Julho';
    
    case 7 :
        return 'Agosto';

    case 8 :
        return 'Setembro';
    
    case 9 :
        return 'Outubro';
    
    case 10 :
        return 'Novembro';
    
    case 11 :
        return 'Dezembro';

    default :
        return ' '
    }
}


function addZeroLeft (num) {
	return num >= 10 ? num : `0${num}`
}

const getDate = (date) => {
    const dayOfWeek= getDayOfWeek(date.getDay());
    const day = date.getDate(); 
    const month = getMonthName(date.getMonth()); 
    const year = date.getFullYear();
    const hour = addZeroLeft(date.getHours()); 
    const minutes = addZeroLeft(date.getMinutes());

    return `${dayOfWeek}, ${day} de ${month} de ${year} ${hour}:${minutes} `;

}

const date = new Date();
const resultado = document.querySelector('.container h1');
resultado.innerHTML = getDate(date);
