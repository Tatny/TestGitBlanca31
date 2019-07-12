// //if(*condicion*){
//     bloque de codigo 
// }


// if(condicion){
//     console.log(':D')
// }else{
//     console.log(':C')
// }

// if('computadora'=== 'Computadora'){
//     console.log('Son identicos')
// }else{
//     console.log('Algo anda mal')
// }

// if('10'=== 10){
//     console.log('son identicos')
// }else[
//     console.log('algo anda mal')
// ]

// let edad=prompt('Ingresa tu edad')
// Number(edad)
// if(edad>= 18){
//     console.log('Entra al sitio')
// }else{
//     console.log('Llama a tus padres')
// }



// let edad = prompt('Ingresa tu edad')
// if(edad < 16){
//     console.log('No puedes sacar tu licencia')
// }else if (edad >=16 || edad === 17){
//     console.log('Puedes sacar tu permiso')
// }else{
//     console.log('Puedes conducir')
// }

// let num = prompt('ingresa un numero')
// if(num % 2 === 0){
//     console.log(num +' '+'es par')
// }else[
//     console.log(num +' '+ 'en impar')
// ]

let player1=prompt('Elige: piedra, papel o tijera')
let player2=prompt('Elige: piedra, papel o tijera')
if(player1=== player2){
    console.log('Es un empate:')
}else if(player1==='piedra'&& player2==='tijera'){
    console.log('Gana Player1')
}else if(player1==='piedra'&& player2==='papel'){
    console.log('Gana Player2')
}else if(player1==='papel'&& player2==='tijera'){
    console.log('Pierde Player1')
}else if(player1==='papel'&& player2==='piedra'){
    console.log('Gana Player1')
}else if(player1==='tijera'&& player2==='piedra'){
    console.log('Pierde Player1')
}else if(player1==='tijera'&& player2==='papel'){
    console.log('Gana Player1')
}else{
    console.log('No entendi, vuelve a intentarlo')
}

