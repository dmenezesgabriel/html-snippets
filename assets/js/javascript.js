function typeExample() {
  let divTypeOff = document.querySelector("#typeOfExample");
  let number = 1;
  console.log("Scripts setup");

  divTypeOff.innerHTML = `Type of ${number} is ${typeof number}`;
}

function conversionExample() {
  let divTypeOff = document.querySelector("#ConversionExample");
  let textNumber = "10";
  console.log("Scripts setup");

  divTypeOff.innerHTML = `Type of ${textNumber} is ${typeof textNumber} <br>`;
  divTypeOff.innerHTML += `${textNumber} ${typeof textNumber} * 2 = ${
    textNumber * 2
  } <br>`;

  textNumber = parseInt(textNumber);

  divTypeOff.innerHTML += `Type of ${textNumber} is ${typeof textNumber} after parseInt<br>`;
}

function inputDivExample() {
  let nameInput = document.querySelector("#nameInputDiv");
  let buttonInputDiv = document.querySelector("#buttonInputDiv");
  let inputDiv = document.querySelector("#inputDiv");

  buttonInputDiv.onclick = function () {
    inputDiv.innerHTML = "Your name is " + nameInput.value;
  };
}

function mouseOverExample() {
  let divSquare = document.querySelector("#square");

  divSquare.onmouseover = () => {
    divSquare.style.backgroundColor = "#008000";
  };

  divSquare.onmouseout = () => {
    divSquare.style.backgroundColor = "";
  };
}

function cepValidationExample() {
  let cepInput = document.querySelector("#cepInput");
  let cepValidationMessage = document.querySelector("#cepValidationMessage");

  cepInput.onblur = () => {
    let cepRegex = new RegExp("^[0-9]{5}-[0-9]{3}$");
    if (cepRegex.test(cepInput.value) == true) {
      cepInput.style.borderColor = "#008000";
      cepValidationMessage.style.color = "#008000";
      cepValidationMessage.innerHTML = "Valid Postal Code!";
    } else {
      cepInput.style.borderColor = "#FF0000";
      cepValidationMessage.style.color = "#FF0000";
      cepValidationMessage.innerHTML = "Invalid Postal Code!";
    }
  };

  cepInput.onfocus = () => {
    cepInput.style.borderColor = "";
    cepValidationMessage.style.color = "";
    cepValidationMessage.innerHTML = "";
  };
}

function setup() {
  typeExample();
  conversionExample();
  inputDivExample();
  mouseOverExample();
  cepValidationExample();
}

window.onload = setup;
