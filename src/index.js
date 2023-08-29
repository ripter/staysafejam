import { Application, Assets } from 'pixi.js';

import { ACTION } from './consts/action';
import { dispatch } from './dispatch';
import { startWASD } from './playerControls';

// Starting Level
import level from './assets/level_1.json';

const WIDTH = 1024;
const HEIGHT = 576;
const RESOLUTION = 1;

// Create a Pixi Application
const app = window.app = new Application({ width: WIDTH, height: HEIGHT, resolution: RESOLUTION });
// Add the canvas that Pixi automatically created for you to the HTML document
window.elRoot.appendChild(app.view);

// Load our assets
const assTilesheet = await Assets.load('assets/colored.json');
console.log('assets', assTilesheet)
dispatch({
  type: ACTION.INIT,
  resources: { tilesheet: assTilesheet },
  tiledMap: level,
  app,
});

// Start listening for player input
startWASD();