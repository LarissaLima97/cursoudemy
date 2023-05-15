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


const date = new Date('2019-07-24');

const dayOfWeek = date.getDay()



console.log(date, getDayOfWeek(dayOfWeek));