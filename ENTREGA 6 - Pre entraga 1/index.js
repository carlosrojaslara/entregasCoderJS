//-----------------------declaracion de variables//
let nombre;
let id;
let precio;
let aux = 0;
const productos = []; 

//----------------------clases//

 class producto {
     constructor (nombre,id, precio) {
         this.nombre=nombre;
         this.id=id;
         this.precio=precio;

     }

     setProducto () {
        this.nombre = prompt("ingrese el nombre del producto : ");
        this.id = prompt ("ingrese el id del producto : ");
        this.precio = prompt("ingrese el precio : ");
     }

     getProducto () {
        alert(' producto : ' + this.nombre + ' id : ' + this.id + ' precio : ' + this.precio );  
     }

 }

const producto1 = new producto;
producto1.setProducto();
producto1.getProducto();
productos.push(producto1);
const producto2 = new producto;
producto2.setProducto();
producto2.getProducto();
productos.push(producto2);
alert("cantidad de productos en la lista : " + productos.length);



