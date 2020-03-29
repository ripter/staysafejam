import { ACTION } from '../consts/action';
import { getObjectEventAt } from '../utils/getObjectEventAt';
import { getTileAt } from '../utils/getTileAt';
import { LAYER } from '../consts/tiledMap';
import { spriteToGridPositon } from '../utils/convertPosition';
import { updateDialog } from './updateDialog';

// Moves the player in the world space.
// mutates state.
export function movePlayer(state, {type, useBoost}) {
  const { player, tileWidth, tileHeight } = state;
  const speed = useBoost ? 5 : 1;
  const vel = {x: 0, y: 0};

  // Set velocity based on action type
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

  // if there is no collision (id 0)
  // allow the player to move into the space.
  if (collision.tileID === 0) {
    player.position.copyFrom(newPosition);
  }

  // If the tile has an event, regardless of movement, trigger it.
  // Events are triggered by attempting to move into them.
  const eventObject = getObjectEventAt(state, newPosition);
  if (eventObject) {
    updateDialog(state, {
      key: eventObject.name,
      avatar: eventObject.avatar,
    });
  }
}
