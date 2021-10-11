//---------------Se crea un array//
const musicas = [
{
    id: '1',
    banda: 'banda 1',
    Album: 'nombre1'
},
{   
    id: '2',
    banda: 'banda 2',
    Album: 'nombre 2'
},
{
    id: '3',
    banda: 'banda 3',
    Album: 'nombre 3'
},
{   
    id: '4',
    banda: 'banda 4',
    Album: 'nombre 4'
}
];

const elemento = document.querySelector('#ejemplo');
const container = document.getElementsByClassName('modalContainer')[0];
const cerrarModal = document.getElementById('modalCerrar');
const boton = document.createElement('button');


musicas.forEach( el => {
    elemento.innerHTML+= 
    `<div class="ejemplo">
    <h2>${el.banda}</h2>
    <h3>${el.Album}</h3>
    </div>`
    boton.setAttribute('id',`${musicas.id}`);
    boton.innerText = "comprar";
    elemento.appendChild(boton);
    elemento.addEventListener('click',()=> {
        container.classList.add('modalActive')
        });

});



cerrarModal.addEventListener('click',()=> {
    container.classList.remove('modalActive')
});



