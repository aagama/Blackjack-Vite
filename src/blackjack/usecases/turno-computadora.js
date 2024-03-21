import { pedirCarta, valorCarta, crearCartaHTML } from "./";


/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML Elememnto HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elememnto HTML para mostrar las cartas
 * @param {Array<String>} deck Baraja de cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] )=>{
    
    if (!puntosMinimos) throw new Error('Se requieren los puntos minimos');
    if (!puntosHTML) throw new Error('Se requiere el argumento puntosHTML');
    if (!divCartasComputadora) throw new Error('Se requiere el argumento divCartasComputadora');


    let puntosComputadora = 0;
    do {
        const carta = pedirCarta( deck );
        puntosComputadora += valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML( carta );

        divCartasComputadora.append( imgCarta );
       
        if ( puntosMinimos > 21 ) {
            break;
        }

    } while ( (puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21) && (puntosComputadora != 21) );

    setTimeout(() => {   // Logica para determinar el ganador o empate
        puntosMinimos === puntosComputadora  ? alert('Esto es un empate'):
        puntosMinimos > 21 ? alert('Gana la Computadra'):
        puntosComputadora > 21 ? alert('Felicidades, Ganaste'): 
        puntosMinimos > puntosComputadora ? alert('Felicidades, Ganaste'): alert('Gana la computadora');                  
    }, 100);
}