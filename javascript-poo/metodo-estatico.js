//Métodos estáticos, são métodos referentes a classe e que a instância da classe não possui acesso
//Eles não pousuem acesso ao atributos da instância pois o constructor não é chamado 

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    static soma(x,y) { //para definir um método como estático utilizamos a palavra reservada static
        return x + y; 
    }
}

const controle1 = new ControleRemoto('Tv sala'); 
controle1.aumentarVolume(); 
controle1.aumentarVolume(); 
controle1.aumentarVolume(); 
controle1.diminuirVolume(); 


console.log(controle1);

console.log(ControleRemoto.soma(2,4)); //Método referente a classe
