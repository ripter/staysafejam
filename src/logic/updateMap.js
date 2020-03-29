import { movePlayer } from './movePlayer';
import { getVelocity } from '../utils/getVelocity';
import { getObjectEventAt } from '../utils/getObjectEventAt';
import { getCollisionAt } from '../utils/getCollisionAt';


// Update the game map, moving the player and triggering events.
export function updateMap(state, action) {
  const { player, tileWidth, tileHeight } = state;
  const velocity = getVelocity(state, action);
  // get the position indicated by velocity
  const nextPosition = {
    x: player.x + (velocity.x * tileWidth),
    y: player.y + (velocity.y * tileHeight),
  };
  // Find the tiles/object at the next position.
  const collision = getCollisionAt(state, nextPosition);
  const eventObject = getObjectEventAt(state, nextPosition);

  if (collision.tileID === 0 && (!eventObject || !eventObject.doesCollide)) {
    movePlayer(state, nextPosition);
  }

  // console.log('velocity', velocity);
  // console.log('collision', collision);
  // console.log('eventObject', eventObject);
  // movePlayer(state, action);
}
