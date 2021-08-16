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
  }
  addRecord(event) {
    event.preventDefault();
    console.log(this._inputName);
    let dateHelper = new DateHelper();
    let bodyMeasure = new BodyMeasure(
      this._inputName.value,
      // Spread operator
      dateHelper.stringToDate(this._inputDate.value),
      this._inputHeight.value,
      this._inputHeight.value
    );

    console.log(bodyMeasure);
  }
}

function callback(event) {
  // Prevent reload page on submit
  event.preventDefault();
  let formFields = {
    userName: document.querySelector("#form-name"),
    date: document.querySelector("#form-date"),
    weight: document.querySelector("#form-weight"),
    height: document.querySelector("#form-height"),
  };

  let bodyMeasure = new BodyMeasure(
    formFields.userName.value,
    new Date(formFields.date.value),
    formFields.height.value,
    formFields.weight.value
  );

  let tableBody = document.querySelector("#imc-tbody");
  let tr = document.createElement("tr");

  [
    bodyMeasure.userName,
    bodyMeasure.date,
    bodyMeasure.weight,
    bodyMeasure.height,
    bodyMeasure.bmi,
  ].forEach((value) => {
    let td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  });

  tableBody.appendChild(tr);

  this.reset();
  formFields.userName.focus();
}

function updateImcTable() {
  let formObject = document.querySelector("form");
  let bodyMeasureController = new BodyMeasureController();
  formObject.addEventListener("submit", bodyMeasureController.addRecord);
}

function setupListeners() {
  updateImcTable();
}

setupListeners();
