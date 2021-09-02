class ListBodyMeasures {
  constructor() {
    this._bodyMeasures = [];
  }

  add(bodyMeasure) {
    this._bodyMeasures.push(bodyMeasure);
  }

  get bodyMeasures() {
    return this._bodyMeasures;
  }
}

//pg 18
