class ListBodyMeasures {
  constructor() {
    this._bodyMeasures = [];
  }

  add(bodyMeasure) {
    this._bodyMeasures.push(bodyMeasure);
  }

  get bodyMeasures() {
    // Avoid unwanted changes of list returning a new list
    return [].concat(this.bodyMeasures);
  }
}
