import { FOCUS } from '../consts/options';
import { ACTION } from '../consts/action';
import { updateMessage } from './updateMessage';

// Update the dialog UI which takes focus over the map.
export function updateDialog(state, action) {

  // clear the message and switch focus back to the map
  updateMessage(state, {key: null});
  state.focus = FOCUS.MAP;
}
