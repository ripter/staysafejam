import * as PIXI from 'pixi.js';

import { createContainer } from '../utils/createContainer';
import { createSpriteFromTileID } from '../utils/createSpriteFromTileID';
import { LAYER } from '../consts/tiledMap';

/**
 * Loads the level, creating sprites as needed.
 * Mutates state
*/
export function loadTiledMap(state, {tiledMap}) {
  const { stage, resources } = state;
  const { tileheight: tileHeight, tilewidth: tileWidth } = tiledMap;
  const tiles = resources.tilesheet;

  console.log('tiledMap', tiledMap);
  //
  // Save shortcuts to requred data.
  state.level = tiledMap.layers;
  state.tileWidth = tileWidth;
  state.tileHeight = tileHeight;
  // find the background tileset layer.
  const bgLayer = state.level.find(i => i.type === 'tilelayer' && i.name === LAYER.BACKGROUND);
  const { width, height } = bgLayer;

  //
  // Create a container to hold the background sprites.
  createContainer(state, 'backgroundLayer');

  //
  // Create a sprite in the backgroundLayer for each tile in the level data.
  bgLayer.data.forEach((tileID, index) => {
    const sprite = createSpriteFromTileID(state, tileID);
    sprite.y = (0|index / width) * tileHeight;
    sprite.x = (0|index % width) * tileWidth;
    state.backgroundLayer.addChild(sprite);
  });
}
