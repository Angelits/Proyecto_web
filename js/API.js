
///[FUNCIONES]

function buscar(){
    let url = "https://www.amiiboapi.com/" + personaje_id
    fetch(url).then(function(response){

        return response.json();
    }).then(function(data){
        nombre.innerHTML = data["name"];
        imagen.src = data["sprites"]["front_default"]

    }).catch(function(error){

        console.log("Error: ", error);
    });
}


function siguiente(){

    console.log("next");

}

function.anterior() {

    console.log("prev")
}
/// [CODIGO PRINCIPAL]

var personaje_id = 1;

var numero = document.getElementById("numero");
var nombre = document.getElementById("nombre");
var imagen = document.getElementById ("imagen");
var btn_up = document.getElementById("boton-arriba")
var btn_down = document.getElementById("boton-abajo")

btn_up.addEventListener("click", anterior);
btn_down.addEventListener("click", siguiente)

buscar();
