import * as PIXI from 'pixi.js';

/**
 * Loads the level, creating sprites as needed.
*/
export function loadLevel(state, {stage, resources, level: tiledMap}) {
  const tiles = resources.tilesheet;
  const { tileheight: tileHeight, tilewidth: tileWidth } = tiledMap;
  const level = tiledMap.layers[0];
  const { width, height } = level;

  // Level data
  state.level = level;
  state.stage = stage;

  // Create a container to hold the background.
  state.backgroundLayer = new PIXI.Container();
  stage.addChild(state.backgroundLayer);

  // Create a sprite in the backgroundLayer for each tile in the level data.
  state.level.data.forEach((tileID, index) => {
    // tildID comes from Tiled, which uses a 1 based index, so we need ot -1 to get the real index.
    const sprite = new PIXI.Sprite(tiles.textures[tileID-1]);
    sprite.y = (0|index / width) * tileHeight;
    sprite.x = (0|index % width) * tileWidth;
    state.backgroundLayer.addChild(sprite);
  });
}
