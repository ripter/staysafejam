
export const DIALOG = {
  // sign_1: 'Up ahead, The Castle.\nBehind, Death Forest',
  // basement_no: 'Hey! Stay out of my basement!',
  quest_find_ring: {
    pages: [
      'Help! I lost my wedding ring!\nThe Queen will hate me if I return home without it.',
      'Please help me',
    ],
    onConfirm: 'FIND_RING',
    onCancel: 'ANNOY_KING',
  },

  bring_king: {
    pages: [
      'My husband has been gone for days.\nI hope he is ok.',
    ],
    onConfirm: 'REWARD_QUEEN',
  },

  pull_weeds: {
    pages: [
      'Could you help me pull weeds?',
    ],
    onConfirm: 'REWARD_FARMER',
  },

  found_fancy_ring: {
    pages: [
      'I found a very fancy ring',
      'Is that the Royal Crest?',
      'Should I keep it?',
    ],
  },
};
