const input = document.getElementById("input");
const enterButton = document.getElementById("enterButton");
const clearButton = document.getElementById("clearButton");
const clearButton2 = document.getElementById("clearButton2");
const deleteButton = document.getElementById("deleteButton");
const squareButton = document.getElementById("squareButton");
const squareRootButton = document.getElementById("squareRootButton");
const reverseSignButton = document.getElementById("reverseSignButton");
const buttons = document
  .querySelector("#calculator")
  .querySelectorAll("button");

const numbers = ["0", "1", "2", "3", "5", "6", "7", "8", "9"];
const SQUARE = 2

const canPress = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
];

const canPressSign = ["+", "-", "*", "/"];

const notShowableButtons = [
  enterButton,
  clearButton,
  clearButton2,
  deleteButton,
  reverseSignButton,
  squareButton,
  squareRootButton
];

let characterOnIndex = (index) => {
  let value = input.value;
  return value[value.length - index];
};

// Display input on screen
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonCanBeShown = !notShowableButtons.includes(button);

    if (buttonCanBeShown) {
      let lastIndex = button.getAttribute("value");
      let penultimateIndex = characterOnIndex(1);

      console.log(lastIndex);

      const valueIsSignAndInputIsEmpty =
        canPressSign.includes(lastIndex) && input.value === "";
      const lastIndexIsSign =
        canPressSign.includes(lastIndex) &
        canPressSign.includes(penultimateIndex);

      if (lastIndexIsSign) {
        // Replace sign with the new one
        deleteKey();
      }

      if (!valueIsSignAndInputIsEmpty) {
        input.value += lastIndex;
      }
    }
  });
});

const clearDisplay = () => {
  input.value = "";
};

const deleteKey = () => {
  let value = input.value;
  input.value = value.substring(0, value.length - 1);
};

const reverseSign = () => {
  input.value = input.value * -1;
};

const square = () => {
  if (input.value === "") {
    input.placeholder = "Zadejte číslo..."
  }
  else {
    const value = eval(input.value)
    const result = Math.pow(value, SQUARE)
  
    input.value = result
  }

}

const squareRoot = () => {
  const value = eval(input.value)
  const result = Math.sqrt(value, SQUARE)

  input.value = result
}

clearButton.addEventListener("click", clearDisplay);
clearButton2.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteKey);
reverseSignButton.addEventListener("click", reverseSign);
squareButton.addEventListener("click", square);
squareRootButton.addEventListener("click", squareRoot)

// Checks user input or evaluate
enterButton.addEventListener("click", (event) => {
  const lastCharacter = input.value.slice(-1);
  const lastCharacterIsSign = canPressSign.includes(lastCharacter);

  if (input.value == "") {
    input.placeholder = "Zadeje číslo...";
  }

  if (lastCharacterIsSign) {
    input.value = input.value.slice(0, -1);
  }

  let result = eval(input.value);
  input.value = result;
});

// Writing with keyboard
document.addEventListener("keyup", (event) => {
  let key = event.key;

  if (canPress.includes(key) == true) {
    buttons.forEach((button) => {
      if (button.value == key) {
        button.click();
      }
    });
  } else if (key == "Backspace") {
    let value = input.value;
    input.value = value.substring(0, value.length - 1);
  }
});
