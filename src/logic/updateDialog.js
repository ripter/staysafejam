import { MESSAGES } from '../consts/dialog';


// Updates the Dialog with a new message.
export function updateDialog(state, {key, avatar}) {
  if (!state.dialog) { return; }
  const message = MESSAGES[key];
  const elText = state.dialog.getChildByName('message');
  const elAvatar = state.dialog.getChildByName('avatar');
  let textureAvatar;

  if (!key) {
    elAvatar.visible = false;
    elText.visible = false;
  }
  else {
    textureAvatar = state.resources.tilesheet.textures[avatar];
    elAvatar.texture = textureAvatar;
    elText.text = message;
    elAvatar.visible = true;
    elText.visible = true;
  }

}
