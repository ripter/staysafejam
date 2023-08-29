
export function gridToArrayPosition(state, { x, y }) {
  return (y * state.tileWidth) + x;
}

export function arrayToGridSprite(state, { index, width }) {
  return {
    x: (0 | index % width) * state.tileWidth,
    y: (0 | index / width) * state.tileHeight,
  };
}
