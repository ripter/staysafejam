import * as PIXI from 'pixi.js';

import { createContainer } from '../utils/createContainer';
import { createSpriteFromTileID } from '../utils/createSpriteFromTileID';

const WIDTH = 50;
const HEIGHT = 6;

export function createDialogUI(state) {
  const { tileWidth, tileHeight } = state;
  createContainer(state, 'dialog');

  //
  // Position the dialog near the bottom center.
  state.dialog.y = 576 - (16 * HEIGHT) - 16;
  state.dialog.x = 16 * 7;

  //
  // build the dialog out of sprites.
  for (let x=0; x < WIDTH; x++) {
    for (let y=0; y < HEIGHT; y++) {
      let tileID = 1; // filler

      // if it's an edge, use the right edge piece
      if (x === 0 && y === 0) { tileID = 625; }
      else if (x === 0 && y === HEIGHT-1) { tileID = 689}
      else if (x === WIDTH-1 && y === 0) { tileID = 627; }
      else if (x === WIDTH-1 && y === HEIGHT-1) { tileID = 691; }
      else if (y === 0) { tileID = 626; }
      else if (y === HEIGHT-1) { tileID = 690; }
      else if (x === 0) { tileID = 657; }
      else if (x === WIDTH-1) { tileID = 659; }

      const sprite = createSpriteFromTileID(state, tileID);
      sprite.x = x * tileWidth;
      sprite.y = y * tileHeight;
      state.dialog.addChild(sprite);
    }
  }

  //
  // Add the Avatar
  const sprite = createSpriteFromTileID(state, 345);
  sprite.x = 16;
  sprite.y = 16;
  sprite.scale.set(4);
  sprite.name = 'avatar';
  state.dialog.addChild(sprite);

  //
  // Add The text
  const message = new PIXI.Text('I love Xiaoyan ❤️', {
    fontFamily : 'Arial',
    fontSize: 24,
    fill : 0xcfc6b8,
    align : 'center'
  });
  message.x = 16 * 6;
  message.y = 16 * 1;
  state.dialog.addChild(message);
}
