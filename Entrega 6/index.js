// -------------declaracion de variables//
let peso 

let pesoNumerico

let genero

let resultado

const aPersonas = [];



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
    
            this.pesoNumerico = parseInt(this.peso);
    
            this.resultado = 1.2 * this.pesoNumerico ;
    
            alert('la cantidad de proteinas que debe ingerir es de : ' + this.resultado);
        }
        else {
    
            this.peso = prompt ('ingrese su peso: ');
    
            this.pesoNumerico = parseInt(this.peso);
    
            this.resultado = 0.8 * this.pesoNumerico ;
    
            alert('la cantidad de proteinas que debe ingerir es de : ' + this.resultado);
    
    
        }

        
    }

}

//---------------instanciarObjeto//

const persona1 = new persona ('marta');
const persona2 = new persona ('javier');
 
//---------------generarVector//

aPersonas.push(persona1);
aPersonas.push(persona2);

//-------------programa ppal//
persona1.calcularProteina();
persona2.calcularProteina();
alert('las personas que realizaron el calculo son : ');
for  (const persona of aPersonas ) {
    alert(persona.nombre + ' la cantidad de proteina que debe ingerir es de : ' + persona.resultado);
}


