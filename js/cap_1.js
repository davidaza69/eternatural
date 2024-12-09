const pantalla = document.querySelector("#num")
const btnAdd = document.querySelector("#btnAdd")
let count = 1

/* let todosCapitulos = JSON.parse( localStorage.getItem('todosCapitulos') )
localStorage.setItem('todosCapitulos', JSON.stringify( todosCapitulos )) */

console.log(JSON.parse(localStorage.todosCapitulos))

btnAdd.addEventListener( "click", function(){
    pantalla.textContent = count++

    if(count == 2){
        console.log('Habilitaste el cap 2')
        let cap2 = JSON.parse( localStorage.getItem('todosCapitulos') )
        cap2[1].habilitado = true
        localStorage.setItem( 'todosCapitulos', JSON.stringify(cap2) ) 
        console.log(cap2)
    }

} )

// video reproduccion
var PrimeraEscena = document.querySelector('#My-video1')

// otras variables
var CIRCULO1 = document.querySelector('.imagen2')

CIRCULO1.addEventListener("click", PrimeraEscena1)

function PrimeraEscena1() {
    CIRCULO1.classList.add('escondericono')
    PrimeraEscena.style.display = "block" /* dehabilita el display none del video */
    PrimeraEscena.play()
    
}

/* var PrimeraEscena2 = document.querySelector('#emma_camina')

// otras variables
var CIRCULO2 = document.querySelector('.imagen3')

CIRCULO2.addEventListener("click", PrimeraEscena2)

function PrimeraEscena2() {
    CIRCULO2.classList.add('escondericono2')
    
   
} */


