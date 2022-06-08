///////////////////////////////////////////////////////////////
/////////////// CALCULATOR INITIAL VALUES /////////////////////
///////////////////////////////////////////////////////////////

let memoryValue = 0;
let calcDisplay = "0";
let firstInputValue = "";
let secondInputValue = "";
let operator = "";
let preRoundedValue = "";

let displayStrip = document.createElement("div");
displayStrip.innerHTML = `${calcDisplay}`;
document.getElementById("display").appendChild(displayStrip);

allClear.addEventListener("click", function () {
  displayStrip.innerHTML = "0";
  memoryValue = 0;
  firstInputValue = "";
  secondInputValue = "";
  operator = "";
});

///////////////////////////////////////////////////////////////
/////////////// CALCULATOR FUNCTIONS //////////////////////////
///////////////////////////////////////////////////////////////

function operate(firstInputValue, operator, secondInputValue) {
  if (operator === "add") {
    calcDisplay = Number(firstInputValue) + Number(secondInputValue);
  }
  if (operator === "subtract") {
    calcDisplay = firstInputValue - secondInputValue;
  }
  if (operator === "multiply") {
    calcDisplay = firstInputValue * secondInputValue;
  }
  if (operator === "exponent") {
    calcDisplay = firstInputValue ** secondInputValue;
  }
  if (operator === "divide") {
    if (secondInputValue === 0) {
      calcDisplay = "DECLINED";
    } else calcDisplay = firstInputValue / secondInputValue;
  }
  return calcDisplay;
}

///////////////////////////////////////////////////////////////
/////////////// GET NUMERICAL INPUT ///////////////////////////
///////////////////////////////////////////////////////////////

function getButtonValue(number) {
  if (displayStrip.innerHTML === "0") {
    displayStrip.innerHTML = number;
  } else displayStrip.innerHTML += number;
}

one.addEventListener("click", function () {
  getButtonValue(1);
});
two.addEventListener("click", function () {
  getButtonValue(2);
});
three.addEventListener("click", function () {
  getButtonValue(3);
});
four.addEventListener("click", function () {
  getButtonValue(4);
});
five.addEventListener("click", function () {
  getButtonValue(5);
});
six.addEventListener("click", function () {
  getButtonValue(6);
});
seven.addEventListener("click", function () {
  getButtonValue(7);
});
eight.addEventListener("click", function () {
  getButtonValue(8);
});
nine.addEventListener("click", function () {
  getButtonValue(9);
});
zero.addEventListener("click", function () {
  getButtonValue(0);
});
decimal.addEventListener("click", function () {
  if (displayStrip.innerHTML.includes(".")) {
    displayStrip.innerHTML = "DECLINED";
  } else if (displayStrip.innerHTML === 0) {
    displayStrip.innerHTML = "0.";
  } else displayStrip.innerHTML += ".";

  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
  // if operator is defined allow two periods
});

///////////////////////////////////////////////////////////////
/////////////// GET OPERATOR INPUT ////////////////////////////
///////////////////////////////////////////////////////////////

clear.addEventListener("click", function () {
  displayStrip.innerHTML = 0;
  firstInputValue = "";
  secondInputValue = "";
  operator = "";
});

changePositive.addEventListener("click", function () {
  displayStrip.innerHTML = displayStrip.innerHTML * -1;
});

memory.addEventListener("click", function () {
  if (memoryValue !== 0) {
    displayStrip.innerHTML += memoryValue;
  } else memoryValue = displayStrip.innerHTML;
});

divide.addEventListener("click", function () {
  checkForOperator();
  operator = "divide";
  firstInputValue = displayStrip.innerHTML;
  displayStrip.innerHTML = `${displayStrip.innerHTML} / `;
});
multiply.addEventListener("click", function () {
  checkForOperator();
  operator = "multiply";
  firstInputValue = displayStrip.innerHTML;
  displayStrip.innerHTML = `${displayStrip.innerHTML} X `;
});
subtract.addEventListener("click", function () {
  checkForOperator();
  operator = "subtract";
  firstInputValue = displayStrip.innerHTML;
  displayStrip.innerHTML = `${displayStrip.innerHTML} - `;
});
add.addEventListener("click", function () {
  checkForOperator();
  operator = "add";
  firstInputValue = displayStrip.innerHTML;
  displayStrip.innerHTML = `${displayStrip.innerHTML} + `;
});
exponent.addEventListener("click", function () {
  checkForOperator();
  operator = "exponent";
  firstInputValue = displayStrip.innerHTML;
  displayStrip.innerHTML = `${displayStrip.innerHTML} ^ `;
});

enterButton.addEventListener("click", function () {
  secondInputValue = displayStrip.innerHTML.split(" ").pop();
  if (firstInputValue === "" || operator === "" || secondInputValue === "") {
    displayStrip.innerHTML = "DECLINED";
  } else preRoundedValue = operate(firstInputValue, operator, secondInputValue);
  displayStrip.innerHTML = roundDecimal(preRoundedValue);
});

///////////////////////////////////////////////////////////////
/////////////// CHECK FOR MULTIPLE OPERATORS //////////////////
///////////////////////////////////////////////////////////////

function checkForOperator() {
  if (operator !== "") {
    secondInputValue = displayStrip.innerHTML.split(" ").pop();
    let newValue = operate(firstInputValue, operator, secondInputValue);
    operate();
    displayStrip.innerHTML = newValue;
    operator = "";
    firstInputValue = newValue;
    console.log(firstInputValue);
  }
}

///////////////////////////////////////////////////////////////
/////// FUNCTION TO ROUND ANSWERS TO 5 DECIMAL POINTS /////////
///////////////////////////////////////////////////////////////

function roundDecimal(inputNumber) {
  if (Number.isInteger(inputNumber)) {
    return inputNumber;
  } else return Number(inputNumber.toFixed(5));
}
