import { loadLevel } from './logic/loadLevel';
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
      loadLevel(state, action);
      break;
    default:
      console.log('unknown action', action);
  }

  console.log('updated state', state);
  return state;
}
