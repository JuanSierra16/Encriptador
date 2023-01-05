const texto = document.querySelector('#text-area');
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const botonCopiar = document.getElementById('copiar');

function validar(){
    if(texto.value == texto.value.toLowerCase()){
        console.log("si");
        return true;
    }
    else {
        console.log("no");
        return false;
    }
}

function encriptar(){
    if(validar() && texto.value!==''){
        botonCopiar.style.display = "inline";
        let arrayEncriptado = [];
        for(let i = 0; i < texto.value.length; i++){
            if(texto.value[i]=='e'){
                arrayEncriptado.push('enter');
            }
            else if(texto.value[i]=='i'){
                arrayEncriptado.push('imes');
            }
            else if(texto.value[i]=='a'){
                arrayEncriptado.push('ai');
            }
            else if(texto.value[i]=='o'){
                arrayEncriptado.push('ober');
            }
            else if(texto.value[i]=='u'){
                arrayEncriptado.push('ufat');
            }
            else {
                arrayEncriptado.push(texto.value[i]);
            }
        }
        document.getElementById("contenedor-mensaje").innerHTML = `<textarea class="resultado-encriptado">${arrayEncriptado.join("")}</textarea>`;
    }
    else if(!validar()){
        alert("No debe ingresar letras mayúsculas")
    }
}

function desencriptar(){
    if(validar() && texto.value!==''){
        botonCopiar.style.display = "inline";
        let mensajeDesencriptado = texto.value.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        document.getElementById("contenedor-mensaje").innerHTML = `<textarea class="resultado-encriptado" cols="30">${mensajeDesencriptado}</textarea>`;
    }
    else if(!validar()){
        alert("No se permiten mayusculas");
    }
}

function copy() {
    let copyText = document.querySelector(".resultado-encriptado");
    copyText.select();
    document.execCommand("copy");
    alert("Se ha copiado el mensaje");
    mensaje.focus();
}

function reponerMuneco(){
    if(texto.value === ''){
        document.getElementById("contenedor-mensaje").innerHTML = `<img class="muneco" src="Img/Muñeco.png" alt="muñeco">
                                                                    <h3>Ningún Mensaje fue encontrado</h3>
                                                                    <p>Ingrese el texto que desee encriptar o desencriptar</p>`
        botonCopiar.style.display="none";
    }
}

texto.addEventListener("keyup", reponerMuneco);
botonCopiar.addEventListener("click", copy);
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


