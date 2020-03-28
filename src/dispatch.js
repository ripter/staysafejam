import { gameLogic } from './gameLogic';
import { render } from './render';

const state = {};
// put state on the window for easy debugging.
window.gameState = state;

export function dispatch(action) {
  console.group('Dispatch');
  // Update the state
  gameLogic(state, action);
  // re-render
  render(state);
  console.groupEnd();
}
