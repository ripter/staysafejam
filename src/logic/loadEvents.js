import { createContainer } from '../utils/createContainer';
import { createSpriteFromTileID } from '../utils/createSpriteFromTileID';
import { getRandomMob } from '../utils/getRandomMob';
import { EVENT_NAME, EVENT_TYPE, LAYER } from '../consts/tiledMap';

/**
 * Creates sprites for the moveable objects.
 * Mutates state
*/
export function loadEvents(state) {
  // Create a layer to hold all of the mobs
  createContainer(state, 'mobLayer');
  // get the events layer, it holds the spawn points.
  const { objects } = state.level.find((i) => i.type === 'objectgroup' && i.name === LAYER.EVENTS);

  //
  // Put custom properties directly on the object.
  objects.forEach((i) => {
    if (!Array.isArray(i.properties)) { return; }
    i.properties.forEach((p) => { i[p.name] = p.value; });
    delete i.properties;
  });


  //
  // Now spawn everyone!
  const spawnPoints = objects.filter((i) => i.type === EVENT_TYPE.SPAWN);
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
