/* FORMULARIO */

function recogerDatos() {

    let form = document.forms["formularioContacto"]

    console.log(document.forms);

    let nombre = form.nombre.value;
    let apellido = form.apellido.value;
    let email = form.email.value;
    let telefono = form.telefono.value;
    let asunto = form.asunto.value;
    let mensaje = form.mensaje.value;

    let genero = form.genero.value;


    let datosCliente = "Nombre:" + nombre+" "+
        "Apellido:" + apellido+" "+
        "Genero:" + genero +" "+
        "Email:" + email +" "+
        "Telefono:" + telefono +" "+
        "Asunto:" + asunto +" "+
        "Mensaje:" + mensaje

    console.log(datosCliente);
}

/* ESTILOS */

let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let cerrado = true;

function apertura() {
    if (cerrado) {
        menu.style.width = '100vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
});

abrir.addEventListener('click', function () {
    apertura();
});

