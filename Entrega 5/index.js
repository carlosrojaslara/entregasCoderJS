// -------------declaracion de variables//
let peso 

let pesoNumerico

let genero

let resultado

//-------------clases//

class persona {
    constructor(nombre, genero, peso){
        this.nombre = nombre;
        this.genero=genero;
        this.peso=peso;
        this.resultado=0;
    }
    calcularProteina (){

        this.genero = prompt ('ingrese su genero m o f dependiendo su genero: ');

        if (this.genero === 'm') {

            this.peso = prompt ('ingrese su peso: ');
    
            this.pesoNumerico = parseInt(peso);
    
            this.resultado = 1.2 * pesoNumerico 
    
            console.log('la cantidad de proteinas que debe ingerir es de : ' + this.resultado)
        }
        else {
    
            this.peso = prompt ('ingrese su peso: ');
    
            this.pesoNumerico = parseInt(this.peso);
    
            this.resultado = 0.8 * this.pesoNumerico 
    
            alert('la cantidad de proteinas que debe ingerir es de : ' + this.resultado)
    
    
        }

        
    }

}

//---------------instanciarObjeto//

const persona1 = new persona ('norma', 'f', 70);

//-------------programa ppal//
persona1.calcularProteina();