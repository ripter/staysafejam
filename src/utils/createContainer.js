import { Container } from 'pixi.js';

/**
 * Helper to destory/create a new PIXI.Container on state.
 * Mutates state
*/
export function createContainer(state, name) {
  // if the container already exists, destory it.
  if (state[name]) {
    state.stage.removeChild(state[name]);
    state[name].destroy();
  }
  state[name] = new Container();
  state.stage.addChild(state[name]);
}
