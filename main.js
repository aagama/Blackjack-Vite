// Import our custom CSS
import './style.css';
// import crearDeck, { miNombre } from './usecases/crear-deck';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './src/blackjack/usecases';

/**
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Hearts 
 * 2S = Two of Spades 
 */

let deck = [];  // Baraja
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'K', 'Q'];
let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const bntNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');

btnDetener.disabled = true;
btnPedir.disabled = true;

// Eventos 

btnPedir.addEventListener('click', () => {   // Callback, funcion que se llama como argumento
    btnDetener.disabled = false;
    const carta = pedirCarta(deck);
    puntosJugador += valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCartaHTML( carta );
    divCartasJugador.append( imgCarta );
    
    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    } else if ( puntosJugador === 21){
        console.warn('21, genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});


bntNuevo.addEventListener('click', () => {

    console.clear();
    deck = crearDeck( tipos, especiales);

    btnPedir.disabled = false;

    puntosJugador     = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = puntosJugador;
    puntosHTML[1].innerText = puntosComputadora;

    divCartasJugador.innerHTML = '';    // Borrar las cartas
    divCartasComputadora.innerHTML = '';

});

