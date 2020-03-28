import * as PIXI from 'pixi.js';

/**
 * Loads the level, creating sprites as needed.
 * Mutates state
*/
export function loadTiledMap(state, {tiledMap}) {
  const { stage, resources } = state;
  const { tileheight: tileHeight, tilewidth: tileWidth } = tiledMap;
  const tiles = resources.tilesheet;

  //
  // Save refrence to the level layers.
  state.level = tiledMap.layers;
  // find the background tileset layer.
  const bgLayer = state.level.find(i => i.type === 'tilelayer' && i.name === 'background');
  const { width, height } = bgLayer;

  //
  // Create a container to hold the background sprites.
  if (state.backgroundLayer) {
    state.backgroundLayer.destroy();
  }
  state.backgroundLayer = new PIXI.Container();
  stage.addChild(state.backgroundLayer);

  //
  // Create a sprite in the backgroundLayer for each tile in the level data.
  bgLayer.data.forEach((tileID, index) => {
    // tildID comes from Tiled, which uses a 1 based index, so we need ot -1 to get the real index.
    const sprite = new PIXI.Sprite(tiles.textures[tileID-1]);
    sprite.y = (0|index / width) * tileHeight;
    sprite.x = (0|index % width) * tileWidth;
    state.backgroundLayer.addChild(sprite);
  });
}
