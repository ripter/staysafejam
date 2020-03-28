import * as PIXI from 'pixi.js';

/**
 * Returns a new Game State.
*/
export function createState() {
  return {
    stage: null,
    level: null,
    backgroundLayer: null,
  };
}
