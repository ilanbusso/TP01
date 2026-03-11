function formatearNombre(nombre){

    const result = document.getElementById("resultado")
    final = nombre.replace(nombre[0], nombre[0].toUpperCase())
    result.innerHTML= "nombre: " + final
}

function contarLetras(frase){
    const result = document.getElementById("resultado2")
    let fraseSinEspacios = frase.trim(' ')
    result.innerHTML= "la frase tiene: " + fraseSinEspacios.length + " letras" 
}

function validarPassword(password){

}