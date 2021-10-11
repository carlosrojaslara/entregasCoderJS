let titulo=document.getElementById("hContenedor");
let hTitulo=document.createElement("div");
hTitulo.innerHTML="<div>VENTA</div>";
titulo.appendChild(hTitulo);
hTitulo.classList.add("typeR");
let hCarrito=document.createElement("p");
hCarrito.innerText="Carrito";
titulo.appendChild(hCarrito);

let cuerpo=document.getElementById("cuerpo");
let cuerpoB=document.createElement("div");
cuerpoB.classList.add("cuerpo");
cuerpo.appendChild(cuerpoB);
