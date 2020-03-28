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
  const tiles = resources.tilesheet;

  //
  // Save shortcuts to requred data.
  state.level = tiledMap.layers;
  state.tileWidth = tiledMap.tilewidth;
  state.tileHeight = tiledMap.tileheight;

  //
  // Load all the tile layers as sprites in containers
  Object.values(LAYER).forEach(layerName => {
    const layer = state.level.find(i => i.type === 'tilelayer' && i.name === layerName);
    if (!layer) { return; } // ignore objectgroups
    const { width, height } = layer;

    // Create a container to hold the background sprites.
    createContainer(state, layerName);

    // Create a sprite for each tile.
    layer.data.forEach((tileID, index) => {
      const sprite = createSpriteFromTileID(state, tileID);
      sprite.y = (0|index / width) * state.tileHeight;
      sprite.x = (0|index % width) * state.tileWidth;
      state[layerName].addChild(sprite);
    });
  });
}
