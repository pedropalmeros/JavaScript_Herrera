/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck  = [] // se puede cambiar de tipo de dato y/o contenedor.
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0;
let puntosComputadora = 0;


// REFERENCIAS HTML. 
let btnPedir = document.querySelector('#btnPedir'); 
let btnDetener = document.querySelector('#btnDetener');

let textPuntosJugador = document.querySelectorAll('small')[0];
let textPuntosComputadora = document.querySelectorAll('small')[1];
let divJugadorCartas = document.querySelector('#jugador-cartas');
let divComputadoraCartas = document.querySelector('#computadora-cartas'); 


// Esta función crea un nuevo deck o una nueva baraja. 
const crearDeck = () =>{
    for(let i = 2; i<=10; i++){
        //deck.push(i+'C');
        for(let tipo of tipos){
            deck.push(i+tipo);
        }
    }
    for(let esp of especiales){
        for(let tipo of tipos){
            deck.push(esp+tipo);
        }
    }
    //console.log({deck});
    deck = _.shuffle(deck);
    //console.log({deck});
}




// Esta función me permite tomar una carta.
const pedirCarta = () => {

    if( parseInt(deck.length) == 0 ){
        throw 'No hay cartas en el deck';
    }else{
        ///console.log('Si hay cartas en el deck');
    }
    const carta = deck.pop();
    //console.log(deck);
    //(carta);
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1); 
    return (isNaN(valor)) ? ((valor === 'A') ? 11:10) : 
                  valor * 1;
}

crearDeck();


// Turno de la computador
// se debe de activar cuando:
//  -> Se desactive btnPedir.
//  -> Se presione el botón detener;
const turnoComputadora = ( puntosMinimos ) => {
    // do {


    // }while();
    do{
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        textPuntosComputadora.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png>
        const imgCarta = document.createElement('img'); 
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta'); 
        divComputadoraCartas.append(imgCarta);

        if( puntosMinimos > 21){
            break;
        }
    } while ( (puntosComputadora<puntosMinimos) &&  (puntosMinimos <= 21 ) );
}


// EVENTOS 
btnPedir.addEventListener('click',()=>{
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    textPuntosJugador.innerText = puntosJugador; 

    ///////////// SE PUEDE METER EN UNA FUNCIÓN IMPRIME CARTA 
    // <img class="carta" src="./assets/cartas/2C.png>
    // Creando la carta en memoria. 
    const imgCarta = document.createElement('img');
    //cartasSrc = `./assets/cartas/${carta}.png`
    imgCarta.src = `./assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    //Insertando la carta en el html
    divJugadorCartas.append(imgCarta);
    /////////////////////////////////////////////////////////////

    if(puntosJugador > 21){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true; 
        turnoComputadora(puntosJugador);
        btnDetener.disabled = true;
    }
    else if( puntosJugador === 21){
        console.warn('21, genial!');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
        btnDetener.disabled = true;
    }
});


btnPedir.addEventListener('click',()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);


});


