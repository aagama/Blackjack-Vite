
/**
 * Funcion crea carta
 * @param {String} carta Ejemplo: '5C'
 * @returns {HTMLImageElement} Retorna Imagen HTML
 */

export const crearCartaHTML = ( carta ) => {

    if ( !carta ) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    return imgCarta;
}