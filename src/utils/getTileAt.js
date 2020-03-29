import { LAYER } from '../consts/tiledMap';
import { gridToArrayPosition } from './convertPosition';

// returns null or the Sprite at layer position
export function getTileAt(state, {x, y, layerName}) {
  const layer = state.level.find(i => i.type === 'tilelayer' && i.name === layerName);
  if (!layer) { throw new Error(`Could not find tilelayer named "${layerName}"`)}

  const sprite = state[layerName].children.find(i => i.x === x && i.y === y);
  // const index = gridToArrayPosition(x, y);
  // console.log('getCollision', x, y);
  return sprite.data;
}
