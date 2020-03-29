import { createDialogUI } from './logic/createDialogUI';
import { createSolidaryUI } from './logic/createSolidaryUI';
import { loadAssets } from './logic/loadAssets';
import { loadEvents } from './logic/loadEvents';
import { loadTiledMap } from './logic/loadTiledMap';
import { updateDialog } from './logic/updateDialog';
import { updateMap } from './logic/updateMap';

import { ACTION } from './consts/action';
import { FOCUS } from './consts/options';

/**
 * Logic for the game.
 * Reducer function that returns the updated state object.
 * This *does mutate* the state.
*/
export function gameLogic(state, action) {
  // console.log('action', action);

  switch (action.type) {
    case ACTION.INIT:
      loadAssets(state, action);
      loadTiledMap(state, action);
      loadEvents(state, action);
      createDialogUI(state);
      createSolidaryUI(state);
      break;
    case ACTION.CONFIRM:
    case ACTION.CANCEL:
    case ACTION.MOVE_NORTH:
    case ACTION.MOVE_SOUTH:
    case ACTION.MOVE_EAST:
    case ACTION.MOVE_WEST:
      if (state.focus === FOCUS.DIALOG) {
        updateDialog(state, action);
      }
      else {
        updateMap(state, action);
      }
      break;
    default:
      console.log('unknown action', action);
      break;
  }

  return state;
}
