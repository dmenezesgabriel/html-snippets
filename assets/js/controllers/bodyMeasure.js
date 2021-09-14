import { BodyMeasure } from "../models/bodyMeasure.js";
import { ListBodyMeasures } from "../models/listBodyMeasure.js";
import { Message } from "../models/message.js";
import { BodyMeasuresView } from "../views/bodyMeasure.js";
import { MessageView } from "../views/message.js";
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
    this._listBodyMeasures = new ListBodyMeasures();
    this._bodyMeasuresView = new BodyMeasuresView($("#bodyMeasuresView"));
    this._messageView = new MessageView($("#messageView"));
    this._message = new Message();
    // Avoid this pointing to event listener with bind
    this.formObject.addEventListener("submit", this.addRecord.bind(this));
  }

  _createBodyMeasure() {
    return new BodyMeasure(
      this._inputName.value,
      // Spread operator
      DateHelper.stringToDate(this._inputDate.value),
      this._inputHeight.value,
      this._inputWeight.value
    );
  }

  addRecord(event) {
    event.preventDefault();
    // Create model instance
    let bodyMeasure = this._createBodyMeasure();
    this._listBodyMeasures.add(bodyMeasure);
    // Create model instance
    this._message.text = "Body Measure added with success";
    console.log(this._message);
    console.log(this._messageView);

    // update view
    this._messageView.update(this._message);
    this._bodyMeasuresView.update(this._listBodyMeasures);
    this._clearForm();
  }

  _clearForm() {
    this.formObject.reset();
    this._inputName.focus();
  }
}

let bodyMeasureController = new BodyMeasureController();
