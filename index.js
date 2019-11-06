import keyLayout from './keylayout';
import Keyboard from './keyboard';

function initKetboard() {
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';

  document.body.append(textArea);
  textArea.setAttribute('rows', 17);
  textArea.setAttribute('cols', 100);

  const virtualKeyboard = document.createElement('div');
  virtualKeyboard.className = 'virtual-keyboard';
  document.body.append(virtualKeyboard);

  const keyboard = document.createElement('div');
  keyboard.className = 'virtual-keyboard__keys';
  virtualKeyboard.appendChild(keyboard);

  /* eslint-disable no-unused-vars */
  const kb = new Keyboard(keyLayout, keyboard, false);
}

initKetboard();
