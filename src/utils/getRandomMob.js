import { MOBS } from '../consts/mobs';

// Returns a random MOB meta with matching type.
export function getRandomMob( type ) {
  const list = MOBS.filter(i => i.type.includes(type));
  return list[0| Math.random() * list.length];
}
