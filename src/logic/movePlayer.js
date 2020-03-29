import { ACTION } from '../consts/action';
import { getTileAt } from '../utils/getTileAt';
import { LAYER } from '../consts/tiledMap';
import { spriteToGridPositon } from '../utils/convertPosition';

// Moves the player in the world space.
// mutates state.
export function movePlayer(state, {type, useBoost}) {
  const { player, tileWidth, tileHeight } = state;
  const speed = useBoost ? 5 : 1;
  const vel = {x: 0, y: 0};

  switch(type) {
    case ACTION.MOVE_NORTH:
      vel.y = -1;
      break;
    case ACTION.MOVE_SOUTH:
      vel.y = 1;
      break;
    case ACTION.MOVE_EAST:
      vel.x = 1;
      break;
    case ACTION.MOVE_WEST:
      vel.x = -1;
      break;
    default:
      // ignore
  }

  // Get the new sprite position when we move by velocity.
  const newPosition = {
    x: player.x + (vel.x * tileWidth * speed),
    y: player.y + (vel.y * tileHeight * speed),
  }
  const collision = getTileAt(state, {
    ...newPosition,
    layerName: LAYER.COLLISION,
  });

  // 0 is empty, aka no collision
  if (collision.tileID === 0) {
    // Move the player by velocity
    player.position.copyFrom(newPosition);
  }
}
