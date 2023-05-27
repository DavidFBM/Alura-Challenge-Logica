const textoInput = document.querySelector(".texto-input");
const textoOutput = document.querySelector(".texto-output");
const muñecoimg = document.querySelector(".imagen-muñeco");
const mensaje1 = document.querySelector(".mensaje1");
const mensaje2 = document.querySelector(".mensaje2");

function validarTexto(){
    let textoEscrito = document.querySelector(".texto-input").value;
    let validador = textoEscrito.match(/^[a-z\s]+$/i);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()){
        const textEncriptado = encriptar(textoInput.value);
        textoOutput.value = textEncriptado;
        muñecoimg.remove();
        mensaje1.remove();
        mensaje2.remove();
    }
}

function btnDesencriptar(){
    const textEncriptado = desencriptar(textoInput.value);
    textoOutput.value = textEncriptado;
}

function btnCopiar(){
    textoInput.value = textoOutput.value;
}

function encriptar(textoEncriptado){
    let palabraReemplazar = ["enter","imes","ai","ober","ufat"];
    textoEncriptado = Array.from(textoEncriptado.toLowerCase());

    for(let i =0; i < textoEncriptado.length;i++){
        
        if(textoEncriptado[i]=="e"){
            textoEncriptado[i] = palabraReemplazar[0]
        } else if(textoEncriptado[i]=="i"){
            textoEncriptado[i] = palabraReemplazar[1]
        } else if(textoEncriptado[i]=="a"){
            textoEncriptado[i] = palabraReemplazar[2]
        } else if(textoEncriptado[i]=="o"){
            textoEncriptado[i] = palabraReemplazar[3]
        } else if(textoEncriptado[i]=="u"){
            textoEncriptado[i] = palabraReemplazar[4]
        } else { 
            textoEncriptado[i] = textoEncriptado[i]
        }
    }

    let re = /,/g;
    textoEncriptado = (textoEncriptado.toString()).replace(re, "");

    return textoEncriptado
}


function desencriptar(textoDesencriptado){
    let matris = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i=0; i<matris.length; i++){
        if(textoDesencriptado.includes(matris[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matris[i][1],matris[i][0]);
        }
    }
    
    return textoDesencriptado;

}