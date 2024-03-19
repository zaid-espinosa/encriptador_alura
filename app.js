let texto_original = document.querySelector('.mensaje');
let texto_encriptado = document.querySelector('.texto');
let btn_enviar = document.getElementById("btn_encriptar");
let muneco = document.querySelector(".img_muneco");
let btn_copiar = document.querySelector(".boton__copiar");
let btn_desencriptar = document.querySelector(".boton__desencriptar");

let claves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];


function encriptarMensaje(frase){
    for (let i = 0; i < claves.length; i++) {
        if(frase.includes(claves[i][0])){
            frase = frase.replaceAll(
                claves[i][0],
                claves[i][1]
            )
        }
    
    }
    return frase;
}

function desencriptarMensaje(frase){
    for (let i = 0; i < claves.length; i++) {
        if(frase.includes(claves[i][0])){
            frase = frase.replaceAll(
                claves[i][1],
                claves[i][0]
            )
        }
    
    }
    return frase;
}


btn_enviar.addEventListener("click", function(){
    let mensaje = texto_original.value;
    let mensajeEncriptado = encriptarMensaje(mensaje);

    if (/[ÁÉÍÓÚÜÑA-Z]/.test(mensaje)) {

        alert("El mensaje no puede contener mayúsculas, acentos ni caracteres especiales.");

    } else {
        texto_encriptado.value = mensajeEncriptado
        muneco.style.display = "none";
    }
    
})

btn_copiar.addEventListener('click', function() {

    contenido = texto_encriptado.value;

    navigator.clipboard.writeText(contenido).then(() => {
        alert('El mensaje ha sido copiado');
        texto_original.value = '';
        texto_encriptado.value = '';
        muneco.style.display = 'block';
    })
    .catch(err => {
        alert(`Error al copiar el mensaje: ${err}`);
    });
})

btn_desencriptar.addEventListener('click', ()=>{ 
    let mensaje = texto_original.value;
    let mensajeEncriptado = desencriptarMensaje(mensaje);

    if (/[ÁÉÍÓÚÜÑA-Z]/.test(mensaje)) {

        alert("El mensaje no puede contener mayúsculas, acentos ni caracteres especiales.");

    } else {
        texto_encriptado.value = mensajeEncriptado
        muneco.style.display = "none";
    }
})