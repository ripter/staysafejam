import { loadAssets } from './logic/loadAssets';
import { loadEvents } from './logic/loadEvents';
import { loadTiledMap } from './logic/loadTiledMap';
import { movePlayer } from './logic/movePlayer';
import { createDialogUI } from './logic/createDialogUI';
import { updateDialog } from './logic/updateDialog';

import { ACTION } from './consts/action';

/**
 * Logic for the game.
 * Reducer function that returns the updated state object.
 * This *does mutate* the state.
*/
export function gameLogic(state, action) {
  console.log('action', action);

  // reset the dialog message.
  updateDialog(state, {key: null, avatar: null});

  switch (action.type) {
    case ACTION.INIT:
      loadAssets(state, action);
      loadTiledMap(state, action);
      loadEvents(state, action);
      createDialogUI(state);
      break;
    case ACTION.MOVE_NORTH:
    case ACTION.MOVE_SOUTH:
    case ACTION.MOVE_EAST:
    case ACTION.MOVE_WEST:
      movePlayer(state, action);
      break;
    default:
      console.log('unknown action', action);
      break;
  }

  return state;
}
