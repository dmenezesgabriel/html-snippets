import { BodyMeasure } from "../models/bodyMeasure.js";
import { DateHelper } from "../helpers/date.js";

class BodyMeasureController {
  constructor() {
    // First class function
    // Bind adds to the document context
    let $ = document.querySelector.bind(document);
    this._inputName = $("#form-name");
    this._inputDate = $("#form-date");
    this._inputWeight = $("#form-weight");
    this._inputHeight = $("#form-height");
    this.formObject = $("form");
    // Avoid this pointing to event listener with bind
    this.formObject.addEventListener("submit", this.addRecord.bind(this));
  }
  addRecord(event) {
    event.preventDefault();
    console.log(this._inputName);
    let bodyMeasure = new BodyMeasure(
      this._inputName.value,
      // Spread operator
      DateHelper.stringToDate(this._inputDate.value),
      this._inputHeight.value,
      this._inputWeight.value
    );
    let tableBody = document.querySelector("#imc-tbody");
    let tr = document.createElement("tr");
    [
      bodyMeasure.userName,
      DateHelper.dateToString(bodyMeasure.date),
      bodyMeasure.weight,
      bodyMeasure.height,
      bodyMeasure.bmi,
    ].forEach((value) => {
      let td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);

    this.formObject.reset();
    this._inputName.focus();
  }
}

let bodyMeasureController = new BodyMeasureController();
