function formatearNombre(nombre) {

    const result = document.getElementById("resultado")
    final = nombre.replace(nombre[0], nombre[0].toUpperCase())
    result.innerHTML = "nombre: " + final
}

function contarLetras(frase) {
    const result = document.getElementById("resultado2")
    let fraseSinEspacios = frase.trim().replaceAll(" ", "")
    result.innerHTML = "la frase tiene: " + fraseSinEspacios.length + " letras"
}

function numMax(a, b, c) {
    let mayor = a;

    if (b > mayor) {
        mayor = b;
    }

    if (c > mayor) {
        mayor = c;
    }

    const result = document.getElementById("resultado3")
    result.innerHTML = "el mayor numero es " + mayor

}

function validarPassword(contra) {
    const result = document.getElementById("resultado4")
    let longitud = false
    let num = false
    let bool = false
    console.log("ujbh")
    if (contra.length >= 8) longitud = true
    num = /\d/.test(contra);

    if (longitud && num) bool = true

    result.innerHTML = bool
}

function sumarNums(numeros) {
    const result = document.getElementById("resultado5")
    const arrayNumeros = numeros.split(',')

    var resultado = 0
    for (let i = 0; i <= arrayNumeros.length - 1; i++) {
        resultado += Number(arrayNumeros[i].trim())
    }
    console.log(resultado)
    result.innerHTML = "la suma total de los numeros es: " + resultado
}

function mayorNum(numeros) {
    const result = document.getElementById("resultado6")
    const arrayNumeros = numeros.split(',')
    let mayor = Number(arrayNumeros[0].trim());

    for (let i = 0; i <= arrayNumeros.length - 1; i++) {
        let num = Number(arrayNumeros[i].trim())

        if (!isNaN(num) && num > mayor) {
            mayor = num
        }
    }
    console.log(mayor)
    result.innerHTML = "el mayor numero es: " + mayor
}

function soloPares(numeros) {
    const result = document.getElementById("resultado7")

    const arrayNumeros = numeros.split(',')

    let pares = []

    for (let i = 0; i < arrayNumeros.length; i++) {
        let texto = arrayNumeros[i].trim()

        if (texto === "") continue

        let num = Number(texto)

        if (!isNaN(num) && num % 2 === 0) {
            pares.push(num)
        }
    }

    console.log(pares)
    result.innerHTML = "los numeros pares son: " + pares
}

function descripcionUsuario() {
    const usuario = {
        nombre: "Ana",
        edad: 20,
        activo: false
    }
    const result = document.getElementById("resultado8")

    result.innerHTML = usuario.nombre + " tiene " + usuario.edad
}

function activarUsuario() {
    const usuario = {
        nombre: "Ana",
        edad: 20,
        activo: false
    }
    const result = document.getElementById("resultado9")
    usuario.activo = true
    result.innerHTML = "estado usuario: " + usuario.activo
}

function calcularPrecio() {
    const productos = [

        { nombre: "Mouse", precio: 10 },
        { nombre: "Teclado", precio: 25 },
        { nombre: "Monitor", precio: 200 }
    ]
    const result = document.getElementById("resultado10")
    let resultado = productos[0].precio + productos[1].precio + productos[2].precio
    result.innerHTML = "precio total " + resultado
}

function map() {
    const usuarios = [

        { nombre: "Ana", edad: 17 },

        { nombre: "Juan", edad: 25 },

        { nombre: "Pedro", edad: 30 }

    ]
    const result = document.getElementById("resultado11")
    const nombres = usuarios.map(usuario => usuario.nombre)
    result.innerHTML = "nombres: " + nombres
}

function filter() {
    const usuarios = [

        { nombre: "Ana", edad: 17 },

        { nombre: "Juan", edad: 25 },

        { nombre: "Pedro", edad: 30 }

    ]
    const result = document.getElementById("resultado12")
    const mayoresDeEdad = usuarios.filter(usuario => usuario.edad >= 18)
    result.innerHTML = "mayores de edad: " + mayoresDeEdad.map(usuario => usuario.nombre)
}

function reduce() {
    const numeros = [1, 2, 3, 4, 5]
    const result = document.getElementById("resultado13")
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
    result.innerHTML = "suma total: " + suma
}

function Destructuring() {
    const producto = { nombre: "Notebook", precio: 1000 }
    const { nombre, precio } = producto
    const result = document.getElementById("resultado14")
    result.innerHTML = `Nombre: ${nombre}, Precio: ${precio}`
}

function SpreadOperator() {
    const producto1 = { nombre: "Notebook", precio: 1000 }
    const producto2 = { ...producto1, stock: 5 }
    const result = document.getElementById("resultado15")
    result.innerHTML = `Producto 1: ${producto1.nombre}, Precio: ${producto1.precio}, Stock: ${producto2.stock}`
}

function buscarProducto(productos, nombre) {
    let array = productos.split(",");
    console.log(array)
    const result = document.getElementById("resultado16")
    let encontrado = array.find(p => p.trim() == nombre);
    console.log(encontrado)
    if (encontrado != null) {
        result.innerHTML = "Producto encontrado: " + encontrado;
    } else {
        result.innerHTML = "No se encontró el producto";
    }
}



function ejecutarBusqueda() {

    let productos = document.getElementById("productos").value
    let nombre = document.getElementById("nombreBuscar").value
    let result = document.getElementById("resultado")

    let resultado = buscarProducto(productos, nombre)

    if (resultado) {
        result.innerHTML = "Producto encontrado: " + resultado
    } else {
        result.innerHTML = "Producto no encontrado"
    }
}

function ProductosCaros() {
    const productos = [
        { nombre: "Mouse", precio: 10 },
        { nombre: "Teclado", precio: 25 },
        { nombre: "Monitor", precio: 200 }
    ]
    const result = document.getElementById("resultado17")
    const productosCaros = productos.filter(producto => producto.precio > 50)
    result.innerHTML = "Productos caros: " + productosCaros.map(producto => producto.nombre) + " con precio: " + productosCaros.map(producto => producto.precio)
}

function promedio(numeros) {
    const arrayNumeros = numeros.split(',')
    let suma = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        let texto = arrayNumeros[i].trim()
        if (texto === "") continue
        let num = Number(texto)
        if (!isNaN(num)) {
            suma += num
        }
    }
    const promedio = suma / arrayNumeros.length
    const result = document.getElementById("resultado18")
    result.innerHTML = "promedio: " + promedio
}

function DevolverUsu() {
    const usuarios = [

        { id: 1, nombre: "Ana", edad: 20 },

        { id: 2, nombre: "Juan", edad: 15 },

        { id: 3, nombre: "Pedro", edad: 30 }

    ]

    const result = document.getElementById("resultado19")
    result.innerHTML = usuarios.map(usuarios => usuarios.nombre)
}

function obtenerUsuarioPorId(id) {
    const usuarios = [
        { id: 1, nombre: "Ana", edad: 20 },
        { id: 2, nombre: "Juan", edad: 15 },
        { id: 3, nombre: "Pedro", edad: 30 }
    ]

    const result = document.getElementById("resultado20")

    let usuarioElegido = usuarios.find(u => u.id === Number(id))

    if (usuarioElegido) {
        result.innerHTML = usuarioElegido.nombre
    } else {
        result.innerHTML = "Usuario no encontrado"
    }
}

function obtenerMayores() {
    const usuarios = [
        { id: 1, nombre: "Ana", edad: 20 },
        { id: 2, nombre: "Juan", edad: 15 },
        { id: 3, nombre: "Pedro", edad: 30 }
    ]

    const result = document.getElementById("resultado21")

    let usuariosMayores = usuarios.filter(u => u.edad >= 18)

    result.innerHTML = "Los Usuarios mayores de edad son: " + usuariosMayores.map(usuarios => usuarios.nombre)
}

function crearUsuario(nombre, edad) {
    const usuarios = [
        { id: 1, nombre: "Ana", edad: 20 },
        { id: 2, nombre: "Juan", edad: 15 },
        { id: 3, nombre: "Pedro", edad: 30 }
    ]

    const result = document.getElementById("resultado22")
    let nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: nombre,
        edad: Number(edad)
    }

    usuarios.push(nuevoUsuario)

    result.innerHTML = `El nuevo usuario se llama ${nombre} y tiene ${edad}`

}

