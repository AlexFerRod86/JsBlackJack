import { pedirCarta,valorCarta,crearCartaHTML} from "./";
/**
 * 
 * @param {HTMLElement} puntosHTML elemento HTML para ver puntos
 * @param {number} puntosMinimos 
 * @param {Array} deck ejemplo 'H2' 
 */



// turno de la computadora
 export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck, crearCartaHTML ) => {

  let puntosComputadora = 0 ;


  if (!puntosMinimos) throw new error ('puntosMinimos hace falta')
  if (!deck) throw new error ('deck hace falta')
  if (!puntosHTML) throw new error ('puntosHTML hace falta')
  do {
      const carta = pedirCarta(deck);

      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML.innerText = puntosComputadora;
      
      // <img class="carta" src="assets/cartas/2C.png">
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
      imgCarta.classList.add('carta');
      divCartasComputadora.append( imgCarta );

      if( puntosMinimos > 21 ) {
          break;
      }

  } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

  setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
          alert('Computadora gana')
      } else if( puntosComputadora > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 500);
}


