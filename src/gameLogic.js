import { loadAssets } from './logic/loadAssets';
import { loadTiledMap } from './logic/loadTiledMap';
import { loadMobs } from './logic/loadMobs';

import { ACTION } from './consts';

/**
 * Logic for the game.
 * Reducer function that returns the updated state object.
 * This *does mutate* the state.
*/
export function gameLogic(state, action) {
  console.log('action', action);

  switch (action.type) {
    case ACTION.INIT:
      loadAssets(state, action);
      loadTiledMap(state, action);
      loadMobs(state, action);
      break;
    default:
      console.log('unknown action', action);
      break;
  }

  return state;
}
