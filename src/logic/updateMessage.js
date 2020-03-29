import { MESSAGES } from '../consts/dialog';

export function updateMessage(state, { key, avatar }) {
  const elText = state.dialog.getChildByName('message');
  const elAvatar = state.dialog.getChildByName('avatar');
  const elIconWait = state.dialog.getChildByName('iconWait');
  const message = MESSAGES[key];
  let textureAvatar;

  if (!key) {
    elAvatar.visible = false;
    elText.visible = false;
    elIconWait.visible = false;
  }
  else {
    textureAvatar = state.resources.tilesheet.textures[avatar];
    elAvatar.texture = textureAvatar;
    elText.text = message;
    elAvatar.visible = true;
    elText.visible = true;
    elIconWait.visible = true;
  }
}
