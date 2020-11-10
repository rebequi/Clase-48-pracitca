botonReiniciar = document.getElementById ("restart")
botonNuevo = document.getElementById ("new-game")

alert ('Bienvenidx!')

const grilla = document.querySelector(".grilla")

const crearGrilla = (ancho, alto) => {
  const anchoDeGrilla = 50 * ancho
  grilla.style.width = `${anchoDeGrilla}px`
  const obtenerNumeroAlAzar = () => {
  return Math.floor((Math.random() * 10 ))  
  }

  const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊','🥝','🥥','🍒', '🍋']


  const obtenerFrutaAlAzar = (items) => {
    return items[obtenerNumeroAlAzar()]
  }

  const listaDeFrutas = []

  for (let i = 0; i < alto * ancho; i++) {
    listaDeFrutas[i] = obtenerFrutaAlAzar(items)
  }

  grilla.innerHTML = ''
  for (let i = 0; i < listaDeFrutas.length; i++) {
    grilla.innerHTML += `<div>${listaDeFrutas[i]}</div>`
  }
}

botonNuevo.onclick =()=>{
  let dificultad = prompt(`Selecciona una dificutad: Facil, medio o Dificil`)
    if (dificultad == 'facil') {
        crearGrilla(6,6)
    }
    if (dificultad == 'medio') {
        crearGrilla(8,8)
    }
    if (dificultad == 'dificil') {
        crearGrilla(10,10)
    }

}

crearGrilla(6, 6)




// ================= ============================ Clase de hoy >>>>>>>>>>

// const items = ['🍉', '🍐', '🍌', '🍇', '🍓', '🍒']

//     const obtenerNumeroAlAzar = (array) => {
//       return Math.floor (Math.random()*array.length)
//     }
    
//     const generarGrilla = (filas, columnas, items) => {
//       console.log ("posicion 0 de items", items[obtenerNumeroAlAzar(items)])
//       let grilla = []
//       for (let i = 0; i< filas; i++) {
//       grilla [i] = []
//       for (let j = 0; j < columnas; j++) {
//         grilla [i][j] = items [obtenerNumeroAlAzar(items)]
        
//         }
//       }
//       return grilla
//     }
    
//     console.log((generarGrilla(3, 3, items))
