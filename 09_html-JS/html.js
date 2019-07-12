//  let h1 = document.getElementById('titulo')
//  let h2 = document.getElementById('subtitulo')
//  let boton = document.getElementById('boton')
//  let input =  document.getElementById('input')
//  let mostrar =  document.getElementById('mostrar')

//  const cambiar = () =>{
//     titulo.innerHTML = "Estoy cambiando una funcion"
//     subtitulo.innerHTML = "algo"
//  }

//  const mostrarInput = () =>{
//     let texto = input.value
//     mostrar.innerHTML = texto
//  }

//  boton.addEventListener('click', mostrarInput)
//  boton.addEventListener('click', cambiar)

let inputname = document.getElementById('name')
let inputtel = document.getElementById('tel')
let inputcs = document.getElementById('cs')
// let out=changeCase.toUppercase((cs))

let mostrarname = document.getElementById('nombre')
let mostrartel = document.getElementById('telefono')
let mostrarcs = document.getElementById('consin')

   


let boton = document.getElementById('boton')
let card =  document.getElementById("card")

const action =() =>{
    let textoname = inputname.value
    let textotel = inputtel.value
    let textocs = inputcs.value
    

    if (textocs==='SI'){
        // console.log(':D')
        mostrarcs.innerHTML = ':)'
    }else if (textocs==='NO'){
        // console.log(':(')
        mostrarcs.innerHTML = ':('

    }else{
        // console.log(eso no te pedi)
        mostrarcs.innerHTML = 'eso no te pedi'
    }
    card.classList.remove('desaparecer')

    mostrarname.innerHTML = textoname
    mostrartel.innerHTML = textotel
    mostrarcs.innerHTML = textocs
}

boton.addEventListener('click', action)
