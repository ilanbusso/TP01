function formatearNombre(nombre){

    const result = document.getElementById("resultado")
    final = nombre.replace(nombre[0], nombre[0].toUpperCase())
    result.innerHTML= "nombre: " + final
}

function contarLetras(frase){
    const result = document.getElementById("resultado2")
    let fraseSinEspacios = frase.trim().replaceAll(" ", "")
    result.innerHTML= "la frase tiene: " + fraseSinEspacios.length + " letras" 
}

function numMax(n1, n2, n3){
    const result = document.getElementById("resultado3")
    let mayor = undefined
    if (n1 > n2 && n1 > n3){
        mayor = n1
    } else if (n2 > n1 && n2 > n3){
        mayor = n2
    } else if (n3 > n1 && n3 > n2) { 
        mayor = n3
    } // ARREGLAR
    result.innerHTML = "El numero mas grande es: " + mayor
}

function validarPassword(contra){
    const result = document.getElementById("resultado4")
    let longitud = false
    let num = false
    let bool = false
    console.log("ujbh")
    if(contra.length >= 8) longitud = true
    num = /\d/.test(contra);

    if (longitud && num) bool = true

    result.innerHTML = bool
}

function sumarNums(numeros){
    const result = document.getElementById("resultado5")
    const arrayNumeros = numeros.split(',')

    var resultado = 0
    for(let i = 0; i <= arrayNumeros.length - 1; i++){
        resultado += Number(arrayNumeros[i].trim())
    }
    console.log(resultado)
    result.innerHTML = "la suma total de los numeros es: " + resultado
}

function mayorNum(numeros){
    const result = document.getElementById("resultado6")
    const arrayNumeros = numeros.split(',')
    let mayor = Number(arrayNumeros[0].trim());

    for(let i = 0; i <= arrayNumeros.length - 1; i++){
        let num = Number(arrayNumeros[i].trim())

        if(!isNaN(num) && num > mayor){
            mayor = num
        }
    }
    console.log(mayor)
    result.innerHTML = "el mayor numero es: " + mayor
}

    function soloPares(numeros){
    const result = document.getElementById("resultado7")

    const arrayNumeros = numeros.split(',')

    let pares = []

    for(let i = 0; i < arrayNumeros.length; i++){
        let texto = arrayNumeros[i].trim()

        if(texto === "") continue

        let num = Number(texto)

        if(!isNaN(num) && num % 2 === 0){
            pares.push(num)
        }
    }

    console.log(pares)
    result.innerHTML = "los numeros pares son: " + pares
}
  
function descripcionUsuario(){
    const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
    }
    const result = document.getElementById("resultado8")

    result.innerHTML = usuario.nombre + " tiene " + usuario.edad 
}

function activarUsuario(){
    const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
    }
    const result = document.getElementById("resultado9")
    usuario.activo = true
    result.innerHTML = "estado usuario: " + usuario.activo
}

function calcularPrecio(){
    const productos = [

    {nombre:"Mouse", precio:10},
    {nombre:"Teclado", precio:25},
    {nombre:"Monitor", precio:200}
    ]
    const result = document.getElementById("resultado10")
    let resultado =    
    result.innerHTML = "estado usuario: " + usuario.activo
}
