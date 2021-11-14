
//---------variables y Objetos//

let favoritos = recuperarFavs();

let bandas = [];

let bandasLS=[];

let bandasJSON=[];

let bandasGet=[];

let bandasEliminar=[];

let nuevoArray=[];

let header = document.getElementById('header');
const formulario = document.getElementById('buscador');
const artistaInput = document.getElementById('nombre-artista');
const modal = document.getElementById('modal');
const modalContenedor = document.getElementsByClassName('modal-container')[0];
const cerrarModal = document.getElementById('cerrarModal');
const agregar = document.getElementById('agregar');
let artistaTemplate=document.createElement("div");
let bandaAgregada;
let generoBanda;
 
class banda{
    constructor (nombreBanda, genero){

        this.nombreBanda=nombreBanda;
        this.genero=genero;
    }    
}

//------------funciones//

function recuperarFavs (){
    let bandasGet=[];

    bandasGet=JSON.parse(localStorage.getItem("bandasFav"));
    if (bandasGet === null) 
        return 0;
    else
        console.log(bandasGet);
        return bandasGet.length;     
}

function updateHeader(){
    $('#cartel2').remove();

    $("#header").append(`<div id ='cartel'> <p id='cartel2'> Tenes ${favoritos} bandas favoritas !! </p></div>`);
}

function eliminarFav(nombre){

  
    bandasGet=JSON.parse(localStorage.getItem("bandasFav"));
   

    let indice = bandasGet.findIndex((objeto, indice, bandasGet)=> {
        return objeto.nombreBanda == nombre;
    })

    bandasGet.splice(indice,1);

    nuevoArray= JSON.stringify(bandasGet);

    localStorage.setItem('bandasFav', nuevoArray);

    favoritos --;

    updateHeader();
}

function armarTarjeta (banda){
    

    const tarjeta=document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const nombreBanda=document.createElement('h2');
    nombreBanda.textContent=`${banda.nombreBanda}`;
    tarjeta.appendChild(nombreBanda);

    const genero=document.createElement("h3");
    genero.textContent=`${banda.genero}`;
    tarjeta.appendChild(genero);


    const eliminar=document.createElement('div');
    eliminar.innerHTML=`<button onclick = "eliminarFav('${banda.nombreBanda}')">eliminar de favoritos</button>`;
    tarjeta.appendChild(eliminar);

    return tarjeta;

}

function cargarFavs(){
    bandasGet=JSON.parse(localStorage.getItem("bandasFav"));
    if (bandasGet==null){
        return []
    }
    return bandasGet;
}

function mostrarFav(){
    bandasGet=[];
    bandasGet=cargarFavs();
    let listadoFavs=document.getElementById("listado");
    listadoFavs.textContent="";
    bandasGet.forEach(banda => {
        listadoFavs.appendChild(armarTarjeta(banda));
    });

}

//------------nodosEventos//
//let carrito = document.createElement("div");

//carrito.innerHTML = `<div id ='cartel'> <p> Tenes ${favoritos} bandas favoritas !! </p>

//<button onclick="mostrarFav()">VER MIS BANDAS</button>`;

//header.appendChild(carrito) ; 

$("#header").append(`<div id ='cartel'> <p id='cartel2'> Tenes ${favoritos} bandas favoritas !! </p>
<button onclick="mostrarFav()">VER MIS BANDAS</button>`);

formulario.addEventListener('submit',async (e) => {
    e.preventDefault();

    let artistaTemplate=document.createElement("div");

    let artista = artistaInput.value.toLowerCase().trim();
    let artistaURL = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    let artistaFetch = await fetch(artistaURL);
    
    let artistaDatos = await artistaFetch.json();

    artistaTemplate.innerHTML = `
        <img src="${artistaDatos.artists[0].strArtistLogo}" alt="logo">
        <h2>${artistaDatos.artists[0].strArtist}<h2>
        <p>${artistaDatos.artists[0].strStyle}</p>
        <p>${artistaDatos.artists[0].intBornYear} - ${artistaDatos.artists[0].intDiedYear|| 'presente' }</p>
        <img src="${artistaDatos.artists[0].strArtistThumb}" alt="imagen banda">
        `
    bandaAgregada = artistaDatos.artists[0].strArtist;
    generoBanda = artistaDatos.artists[0].strStyle;

    modal.appendChild(artistaTemplate);
    modalContenedor.classList.toggle('modal-active');


    cerrarModal.addEventListener('click', ()=>{
        modalContenedor.classList.remove('modal-active');
        artistaTemplate.remove();
    }) 
})
    
agregar.addEventListener('click', () =>{

    if (bandaAgregada){

        bandasLS = localStorage.getItem('bandasFav');
        let existe = false;
        if (bandasLS) {
            
            bandasLS = JSON.parse(bandasLS);

            for (const bandasL of bandasLS) {
                if (bandasL.nombreBanda === bandaAgregada) {
                    existe=true;
                    break;
                }
            }
            if (existe){
                alert('esta banda ya existe en tu lista de favoritos');
            } 
            else {
                bandas.push(new banda (bandaAgregada,generoBanda));

                bandasJSON= JSON.stringify(bandas);
                
                localStorage.setItem('bandasFav', bandasJSON);

                favoritos = favoritos + 1;

                updateHeader();
            
        }
            
        } 
        else {
            bandas.push(new banda (bandaAgregada,generoBanda));

            bandasJSON= JSON.stringify(bandas);
            
            localStorage.setItem('bandasFav', bandasJSON);

            favoritos = favoritos + 1;

            updateHeader();
        }            
    }
})   


modal.addEventListener('click',(e)=>{
    e.stopPropagation();
})









