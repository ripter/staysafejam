import * as PIXI from 'pixi.js';

import { createContainer } from '../utils/createContainer';
import { createSpriteFromTileID } from '../utils/createSpriteFromTileID';
import { getRandomMob } from '../utils/getRandomMob';
import { LAYER, EVENT_TYPE, EVENT_NAME } from '../consts/tiledMap';

/**
 * Creates sprites for the moveable objects.
 * Mutates state
*/
export function loadEvents(state, {stage, resources}) {
  const tiles = resources.tilesheet;
  // get the events layer, it holds the spawn points.
  const { objects } = state.level.find(i => i.type === 'objectgroup' && i.name === LAYER.EVENTS);
  // Get all the spawn points so we can spawn mobs there!
  const spawnPoints = objects.filter(i => i.type === EVENT_TYPE.SPAWN);

  //
  // Create a layer to hold all of the mobs
  createContainer(state, 'mobLayer');

  //
  // Now spawn everyone!
  spawnPoints.forEach((point) => {
    const { name, x, y } = point;
    const mobMeta = getRandomMob(name);
    const sprite = createSpriteFromTileID(state, mobMeta.tileID);
    sprite.x = x;
    sprite.y = y;
    sprite.name = name;
    state.mobLayer.addChild(sprite);
  });

  // Save a refrence to the player
  state.player = state.mobLayer.getChildByName(EVENT_NAME.PLAYER);
}
