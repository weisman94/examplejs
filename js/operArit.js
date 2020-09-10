function sumar(){
//Recibir los Datos
let numeroU = parseInt(document.getElementById("nUno").value)
let numeroD = parseInt(document.getElementById("nDos").value)

//procesar los datos
let resultado = numeroU + numeroD

//Entregar los resultados
document.getElementById("resulOperacion").innerHTML = resultado
}

//calcular Area Triangulo
function triangulo(){
    //Recibir los Datos
    let numeroU = parseInt(document.getElementById("base").value)
    let numeroD = parseInt(document.getElementById("alt").value)
    
    //procesar los datos
    let resultado = numeroU * numeroD /2
    
    //Entregar los resultados
    document.getElementById("resulttrian").innerHTML = resultado
    }

//calcular Area Circulo

function circulo(){
    //Recibir los Datos
    let numeroU = parseInt(document.getElementById("radio").value)
    var pi = 3.1415927
    
    //procesar los datos
    let resultado = parseFloat(pi * numeroU * numeroU ) 
    
    //Entregar los resultados
    document.getElementById("resultcir").innerHTML = resultado
    }
