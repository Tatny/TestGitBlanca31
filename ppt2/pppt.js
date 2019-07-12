let botonbp = document.getElementById("bp");
let botonbpp = document.getElementById("bpp");
let botonbt = document.getElementById("bt");
let botonbp2 = document.getElementById("bp2");
let botonbpp2 = document.getElementById("bpp2");
let botonbt2 = document.getElementById("bt2");

let mostrarG1 =document.getElementById("G1")
let mostrarG2 =document.getElementById("G2")
let mostrare = document.getElementById("e")
let mostrarnada = document.getElementById("nada")

let player1 = 0
let player2 = 0


function resultado (){
    botonbp = 1
}

const click = () => {
    if(player1 === botonbp && player2 === botonbp2){
        mostrare.innerHTML = "Empate"
    }else if(player1 === botonbp && player2 === botonbpp2){
        mostrarG2.innerHTML ="Gana player 2"
    }else if(player1 === botonbp && player2 === botonbt2){
        mostrarG1.innerHTML ="Gana player 1"
    }else if(player1 === botonbpp && player2 === botonbp2){
        mostrarG1.innerHTML ="Gana player 1"
    }else if(player1 === botonbpp && player2 === botonbpp2){
        mostrare.innerHTML = "Empate"
    }else if(player1 === botonbpp && player2 === botonbpt2){
        mostrarG2.innerHTML ="Gana player 2"
    }else if(player1 === botonbt && player2 === botonbp2){
        mostrarG2.innerHTML ="Gana player 2"
    }else if(player1 === botonbt && player2 === botonbpp2){
        mostrarG1.innerHTML ="Gana player 1"
    }else if(player1 === botonbt && player2 === botonbpt2){
        mostrare.innerHTML = "Empate"
    }else{
        mostrarnada.innerHTML = "No entendi"
    }
}

botonbp.addEventListener('click', click)
