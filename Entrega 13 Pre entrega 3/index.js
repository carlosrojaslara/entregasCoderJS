//---------------clase y constructor//
class bandas {
    constructor (id, nombreBanda, genero) {
        this.id=id;
        this.nombreBanda=nombreBanda;
        this.genero=genero;
    }

    agregarFavoritos() {
        this.agregar=true;
    }
    
}

//------------------instanciacion de objetos//
const banda1 = new bandas (0, "La Maquina de Hacer Pajaros", "Rock Progresivo" );
const banda2 = new bandas (1, "Genesis", "Rock Progresivo");
const banda3 = new bandas (2, "Led Zeppelin", "Hard Rock");
const banda4 = new bandas (3, "AC/DC", "Hard Rock");
const banda5 = new bandas (4, "Radiohead", "Rock Alternativo");
const banda6 = new bandas (5, "Muse", "Rock Alternativo");
const banda7 = new bandas (6, "Soda Stereo", "Rock Pop");
const banda8 = new bandas(7, "The Beatles", "Rock Pop");
const banda9 = new bandas(8, "Queen", "Rock Pop");

//---------------------array//
let listadoFav =[];

//---------------------funciones//

function armarTarjeta (banda) {
    const tarjeta=document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const nombreBanda=document.createElement("h3");
    nombreBanda.textContent=`${banda.nombreBanda}`;
    tarjeta.appendChild(nombreBanda);

    const genero=document.createElement("div");
    genero.textContent=`${banda.genero}`;
    tarjeta.appendChild(genero);

    return tarjeta ;
}

function mostrarFavo (listadoFav) {
    listadoFav = [];
    listadoFav = cargarFavs (); 
    let listado= document.getElementById("listado");
    listado.textContent="";
    listadoFav.forEach(banda => {
        listado.appendChild(armarTarjeta(banda));
    });
}

function cargarFavs () {
    let listadoFav = JSON.parse(localStorage.getItem("listadoFav"));
    if (listadoFav==null) {
        return[];
    }
    return listadoFav;
}

function guardarFav(listadoFav){
    localStorage.setItem("listadoFav", JSON.stringify(listadoFav));

}

function agregarFav(id){
    let listadoFav = []; 
    listadoFav = cargarFavs();
    listadoFav.push(musicas[id]);
    guardarFav(listadoFav);
}



//---------------Se crea un array//
const musicas = [banda1, banda2, banda3, banda4, banda5, banda6, banda7, banda8, banda9];



//------------header//
let titulo=document.getElementById("hContenedor");
let hTitulo=document.createElement("div");
//hTitulo.innerHTML="<div>VENTA</div>";
//titulo.appendChild(hTitulo);
//hTitulo.classList.add("typeR");


//--------------cuerpo//

let cuerpo=document.getElementById("cuerpo");
let cuerpoB=document.createElement("div");
cuerpoB.classList.add("cuerpo");
cuerpo.appendChild(cuerpoB);

const agregar = document.createElement("button");
const borrar = document.createElement("button");
const contenedor0=document.getElementsByClassName('contenedor1')[0];
const contenedor1=document.getElementsByClassName('contenedor2a')[0];
const contenedor2=document.getElementsByClassName('contenedor2b')[0];
const contenedor3=document.getElementsByClassName('contenedor2c')[0];
const mostrarFav=document.getElementById('mostrarFav');


musicas.forEach (banda => {
    contenedor0.innerHTML+=
    `<div class="prueba">
        <h1>${banda.nombreBanda}</h1>
        <h2>${banda.genero}</h2>
    </div>
    <div>
        <button id="" onclick="agregarFav(${banda.id})">Agregar</button>
        <button id="">Borrar</button>
    </div>`

})

const formulario = document.getElementById("buscador");
const artistaContenedor = document.getElementById("artista-info");
const cancionContenedor = document.getElementById("cancion-info");
const artistaInput = document.getElementById("nombre-artista");
const cancionInput = document.getElementById("nombre-cancion");
formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();

    let artista = artistaInput.value.toLowerCase().trim();


    let artistaURL = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

    let artistaFetch= await fetch(artistaURL);


    let artistaDatos = await artistaFetch.json();

    let [artistaRespuesta] = await Promise.all([artistaDatos]) 

    let artistaSeleccionado = artistaRespuesta.artists[0];

    let artistaTemplate = `
        <img src=${artistaSeleccionado.strArtistThumb} alt="IMAGEN artista">
        <h2>${artistaSeleccionado.strArtist}</h2>
        <p>${artistaSeleccionado.intBornYear} - ${artistaSeleccionado.intDiedYear || "Presente"}</p>
        <p>${artistaSeleccionado.strBiographyEN}</p>
        `;
    artistaContenedor.innerHTML = artistaTemplate;

})
 

mostrarFav.addEventListener("click", mostrarFavo);
const mostrar=document.getElementById("show");

$(mostrar).click(() => {
    $("#buscador").fadeIn(500)
})


//$("header").prepend("<h1 class="jContenedor">TU MUSICA</h1>") 
//$(".jContenedor")






//$(() => {
  //  $(".jContenedor").on("mouseover", function (e) {
    //    $(e.target).css("background-color","yellow")

//})})
;


