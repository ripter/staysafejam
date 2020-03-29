import { movePlayer } from './movePlayer';

// Update the game map, moving the player and triggering events.
export function updateMap(state, action) {
  movePlayer(state, action);
}
