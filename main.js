let persona = {
    name: 'DANIEL',
    edad: 29,
    hobbies: ['leer', 'cantar', 'bailar', 'ver peliculas'],
    medidas: {
        superior:{
            cuello: 20,
            hombros: 70
        },
        inferior:{
            piernas: [70, 30, 20]
        }
    },
    casado: false,
    nombreDePropiedad: 'ahora si funciona'
}

persona.name = 'jorge'

// console.log(persona)

// console.log(persona.medidas.inferior)
// console.log(persona['medidas'].inferior)

function mostrarPropiedad(nombreDePropiedad){
    console.log(persona[nombreDePropiedad])
}

// mostrarPropiedad('hobbies')

// for(let propiedad in persona){
//     console.log(persona[propiedad])
// }

// ['leer', 'cantar', 'bailar', 'ver peliculas']

//forEach itera cada elemento y ejecuta cierto código por cada uno de ellos

//map, itera cada elemento y ejecuta cierto código por cada uno de ellos y retorna un nuevo array con la misma longitud

// nuevoArray y nuevoArray2 son iguales pero cuando la función tiene solo una linea de código, se borran las {} y el return
let nuevoArray = persona.hobbies.map((hobby)=>{
    return hobby.toUpperCase()
})

let nuevoArray2 = persona.hobbies.map(hobby => hobby.toUpperCase())

let nombres = ['jorge', 'juan', 'david', 'diego', 'elena', 'gustavo']

let nuevosNombres = nombres.filter((nombre)=>nombre.length>5)
let nuevosNombres2 = nombres.filter((nombre)=>nombre.startsWith('ju'))
let nuevosNombres3 = nombres.filter((nombre)=>nombre.endsWith('o'))
let nuevosNombres4 = nombres.filter((nombre)=>nombre==='control remoto')


// console.log(nuevosNombres3)

let nombresOrdenados = nombres
.sort()
.map((nombre)=>{console.log(nombre)})
// console.log(nombresOrdenados)






















// let frutas = ['banana', 'manzana', 'piña']

// frutas.forEach()

















// persona.edad
// persona['edad']

// for(const propiedad in persona){
//     console.log(persona[propiedad])
// }

// console.log(persona.length)

// let libros = []

// // agregarLibro('papelucho', 'marcela paz')
// // agregarLibro('biblia', 'dios')
// // agregarLibro('papelucho', 'marcela paz')
// // agregarLibro('papelucho', 'marcela paz')
// // agregarLibro('papelucho', 'marcela paz')
// // agregarLibro('papelucho', 'marcela paz')

// // mostrarLibros(libros)

// function obtenerPropiedad(propiedad){
//     console.log(persona[propiedad])
// }


// const mostrarenPantalla = (parametro)=>{
//     console.log(parametro)
//     //
//     //
//     //
//     //
// }

// mostrarenPantalla('hola')

// function mostrarV2 (text){
//     console.log(text)
// }

// mostrarV2('hola v2')

// let numeros = [2,3,4,5,6]

// const nuevosNumeros = numeros.map((numero) => numero + 2)

// console.log(nuevosNumeros)