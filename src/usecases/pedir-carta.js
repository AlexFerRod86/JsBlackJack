/**
 * @param {string} deck /Ejemplo 'H10'
 * @returns una carta de la baraja y la descuenta
 */

export const pedirCarta = (deck) => {

 
  if ( !deck || deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}
