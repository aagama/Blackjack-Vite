/**
 * Funcion que retorna una carta
 * @param {Array<String>} deck Baraja, ejemplo = ['2C', '5S', '5D', '6C', '2S'....]
 * @returns {String} Retorna una carta de la baraja, la misma que dismiuye en una carta.
 */
export const pedirCarta = ( deck ) => {
    if(!deck || deck.length === 0){
        throw 'No hay cartas en la Baraja';
    }
    const carta = deck.pop();
    return carta;
}