export class BodyMeasure {
  constructor(userName, date, height, weight) {
    this._userName = userName;
    // Defensive programming, make new object instance immutable
    // when freeze cannot
    this._date = new Date(date.getTime());
    this._height = height;
    this._weight = weight;
    this._bodyMassIndex = this.calculateBMI(this._weight, this._height);
    // Make attributes immutable
    Object.freeze(this);
  }

  calculateBMI(weight, height) {
    weight = parseFloat(weight);
    height = parseFloat(height);
    let bodyMassIndex = (weight / (height * height)).toFixed(2);
    console.log(bodyMassIndex);
    return bodyMassIndex;
  }

  get userName() {
    return this._userName;
  }

  get date() {
    return new Date(this._date.getTime());
  }

  get weight() {
    return this._weight;
  }

  get height() {
    return this._height;
  }

  get bmi() {
    return this._bodyMassIndex;
  }
}
