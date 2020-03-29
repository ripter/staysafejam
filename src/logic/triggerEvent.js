import { EVENT_TYPE } from '../consts/tiledMap';
import { updateDialog } from './updateDialog';

// Trigger a map event
export function triggerEvent(state, eventObject) {
  const { type, name } = eventObject;
  console.log('trigger event', eventObject);
  switch (type) {
    case EVENT_TYPE.DIALOG:
      state.currentDialogKey = name;
      state.currentAvatar = state.resources.tilesheet.textures[eventObject.avatar];
      updateDialog(state);
      break;
    default:
  }
}
