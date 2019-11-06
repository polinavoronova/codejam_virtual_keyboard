export default class Key {
  constructor(values, DOMElement, isCapsOn) {
    this.values = values;
    this.DOMElement = DOMElement;
    this.isCapsOn = isCapsOn;

    this.currentLayoutIndex = 0;
    this.maxLayoutIndex = this.values.length - 1;

    this.setInitialValue(isCapsOn);
  }

  setInitialValue(isCapsOn) {
    if (isCapsOn) {
      this.DOMElement.innerHTML = this.getUppercase(false);
    } else {
      this.DOMElement.innerHTML = this.getLowercase(false);
    }
  }

  setCurrentValue(isCapsOn, isShiftOn) {
    if (isCapsOn) {
      if (isShiftOn) {
        this.DOMElement.innerHTML = this.getLowercase(isCapsOn);
      } else {
        this.DOMElement.innerHTML = this.getUppercase(isCapsOn);
      }
    } else if (isShiftOn) {
      this.DOMElement.innerHTML = this.getUppercase(isCapsOn);
    } else {
      this.DOMElement.innerHTML = this.getLowercase(isCapsOn);
    }
  }

  getLowercase(isCapsOn) {
    // no idea
    if (isCapsOn && !this.values[this.currentLayoutIndex].isLetter) {
      return this.values[this.currentLayoutIndex].upper;
    }
    return this.values[this.currentLayoutIndex].lower;
  }

  getUppercase(isCapsOn) {
    // no idea
    if (isCapsOn && !this.values[this.currentLayoutIndex].isLetter) {
      return this.values[this.currentLayoutIndex].lower;
    }

    return this.values[this.currentLayoutIndex].upper;
  }

  switchLayout(isCapsOn) {
    if (this.currentLayoutIndex === this.maxLayoutIndex) {
      this.currentLayoutIndex = 0;
    } else {
      this.currentLayoutIndex += 1;
    }

    this.setCurrentValue(isCapsOn, false);
  }
}
