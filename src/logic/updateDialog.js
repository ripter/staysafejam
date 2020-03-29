import { DIALOG } from '../consts/dialog';
import { FOCUS } from '../consts/options';
import { updateMessage } from './updateMessage';

// Update the dialog UI which takes focus over the map.
export function updateDialog(state) {
  const { currentDialogKey } = state;
  const dialogMeta = DIALOG[currentDialogKey];

  // When we lose the key, reset everything back to map.
  if (!dialogMeta) {
    state.focus = FOCUS.MAP;
    state.currentPage = -1;
    state.currentAvatar = null;
  }
  // Move to the next page in the current dialog
  else {
    // Keep Focus on us and move to the next page.
    state.focus = FOCUS.DIALOG;
    state.currentPage += 1;

    // if this is the last page, clear the key
    if (state.currentPage === dialogMeta.pages.length - 1) {
      state.currentDialogKey = null;
    }
  }


  // Display/clear the dialog.
  updateMessage(state, dialogMeta);
}
