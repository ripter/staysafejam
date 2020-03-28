import { createState } from './createState';
import { gameLogic } from './gameLogic';
import { render } from './render';

let state = createState();

export function dispatch(action) {
  console.group('Dispatch');
  // Update the state
  gameLogic(state, action);
  // re-render
  render(state);
  console.groupEnd();
}
