import { gameLogic } from './gameLogic';
// import { render } from './render';
import { FOCUS } from './consts/options';

// default state.
const state = {
  solidary: 0,
  focus: FOCUS.DIALOG,
  currentPage: -1,
};
// put state on the window for easy debugging.
window.gameState = state;

export function dispatch(action) {
  // console.group('Dispatch');
  // Update the state
  gameLogic(state, action);
  // re-render
  // render(state);
  // console.groupEnd();
}
