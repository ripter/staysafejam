import { ACTION } from '../consts/action';

// Moves the player in the world space.
// mutates state.
export function movePlayer(state, {type, useBoost}) {
  const { player, tileWidth, tileHeight } = state;
  const speed = useBoost ? 5 : 1;

  switch(type) {
    case ACTION.MOVE_NORTH:
      player.y -= tileHeight * speed;
      break;
    case ACTION.MOVE_SOUTH:
      player.y += tileHeight * speed;
      break;
    case ACTION.MOVE_EAST:
      player.x += tileHeight * speed;
      break;
    case ACTION.MOVE_WEST:
      player.x -= tileHeight * speed;
      break;
    default:
      // ignore
  }
}
