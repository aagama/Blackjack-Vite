/**
 * Funcion que crea Nueva Baraja
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'K', 'Q']
 * @returns {Array<String>} Retorna nuevo Deck de cartas
 */

export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {
    
    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) {
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    }
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) {
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    }

    let deck = [];  // Baraja
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push( i + tipo );
        }
    }
    tiposEspeciales.forEach(especial => {
        tiposDeCarta.forEach(tipo => {
            deck.push(especial+tipo);
        });
    });

    deck.sort(() => Math.random() - 0.5);  //Baraja las cartas de forma aleatoria
    console.log(deck);
    return deck;

}

// export default crearDeck;