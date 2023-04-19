
import { shuffle } from 'underscore'
/**
 * funcion crea una baraja nueva
 * @param {Array <string>} tiposDeCartas Ejemplo ['C','D','H','S']
 * @param {Array <string>} tiposEspeciales Ejemplo ['A','J','Q','K']

 * @returns {Array<string>} retorna la baraja nueva
 */

export const crearDeck = (tiposDeCartas,tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas === 0) throw new error('TiposDeCartas es obligatorio');
     
        
    

    let deck = [];
 
  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of tiposDeCartas ) {
          deck.push( i + tipo);
      }
  }

  for( let tipo of tiposDeCartas ) {
      for( let esp of tiposEspeciales ) {
          deck.push( esp + tipo);
      }
  }
  // console.log( deck );
  deck = shuffle( deck );
  // console.log( deck )
  return deck;
}
