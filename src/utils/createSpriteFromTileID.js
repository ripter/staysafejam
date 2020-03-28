import * as PIXI from 'pixi.js';

// returns a new PIXI sprite from the tileID
export function createSpriteFromTileID(state, tileID) {
  const { tilesheet } = state.resources;
  // tildID comes from Tiled, which uses a 1 based index, so we need ot -1 to get the real index.
  return new PIXI.Sprite(tilesheet.textures[tileID-1]);
}
