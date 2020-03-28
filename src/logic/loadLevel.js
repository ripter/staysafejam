import * as PIXI from 'pixi.js';

/**
 * Loads the level, creating sprites as needed.
*/
export function loadLevel(state, {stage, resources, level: levelMap}) {
  const tiles = resources.tilesheet;
  const level = levelMap.layers[0];
  const { width, height } = level;

  // Level data
  state.level = level;
  state.stage = stage;

  // Create a container to hold the background.
  state.backgroundLayer = new PIXI.Container();
  stage.addChild(state.backgroundLayer);

  console.log('textures', tiles.textures);
  state.level.data.forEach((tileID, index) => {
    console.log('tileID', tileID);
    const sprite = new PIXI.Sprite(tiles.textures[tileID-1]);
    sprite.y = (0|index / width) * 16;
    sprite.x = (0|index % width) * 16;

    state.backgroundLayer.addChild(sprite);
  });


}
