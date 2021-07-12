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

function setup() {
  typeExample();
  conversionExample();
  inputDivExample();
}

window.onload = setup;
