
/**
 * Funcion que devuelve el valor de la carta
 * @param {String} carta Ejemplo: 'AS'
 * @returns {Number} Retorna el valor numerico de la carta: 10
 */
export const valorCarta = ( carta ) => {
    // const valor = carta.substring(0, carta.length - 1);
    if( !carta || carta.length === 0 ){
        throw 'No hay carta para obtener su valor';
    }
    const valor = carta.slice( 0, carta.length - 1 );
    return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;
}