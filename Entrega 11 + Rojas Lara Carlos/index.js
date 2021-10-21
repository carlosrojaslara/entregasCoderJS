

$("#seleccionar").on("click", function (event) {
    const val = $('#genero').val()
    event.preventDefault()
    $('#form-proteina').removeClass('oculto')
    if (val === "femenino"){
        $('#form-proteina').prepend(`<h4>ingrese su peso</div>`)
        $("#boton-form").on("click", function (event) {

            event.preventDefault()
            let peso = $('#input-peso').val()
            let cantProt = parseInt(peso) * 0.8
            $('#resultado').append(`<div>El la cantidad de proteina que debe consumir es de ${cantProt}<div>`)
        })
    }
    else {

        $('#form-proteina').prepend(`<h4>ingrese su peso</div>`)
        $("#boton-form").on("click", function (event) {
            event.preventDefault()
            let peso = $('#input-peso').val()
            let cantProt = parseInt(peso) * 1.5
            $('#resultado').append(`<h4>El la cantidad de proteina que debe consumir es de ${cantProt}<h4>`)
        })

    }
    }

)


