const input = document.getElementById("input")
const enterButton = document.getElementById("enterButton")
const clearButton = document.getElementById("clearButton")
const clearButton2 = document.getElementById("clearButton2")
const buttons = document.querySelector("#calculator").querySelectorAll("button")

const canPress = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "+", "-", "*", "/",
]

const canPressSign = [
    "+", "-", "*", "/"
]

const notShowableButtons = [
    enterButton, clearButton, clearButton2
]


let characterOnIndex = (index) => {
  let value = input.value
  return value[value.length - index]
}

// Display input on screen
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonCanBeShown = !notShowableButtons.includes(button)

        if (buttonCanBeShown) {
            let lastIndex = button.getAttribute('value')
            let penultimateIndex = characterOnIndex(1)
    
            if (canPressSign.includes(lastIndex) & canPressSign.includes(penultimateIndex)) {
                console.log('last index is sign')
            }
            else {
                input.value += lastIndex
            }
        }

    })
})

const clearDisplay = () => {
  input.value = ""
}

//Clears display
clearButton.addEventListener('click', clearDisplay)
clearButton2.addEventListener('click', clearDisplay)

// Checks user input or evaluate
enterButton.addEventListener('click', (event) => {
    if (input.value == '') {
        input.placeholder = 'Enter something'
    }

    else {
        let result = eval(input.value)
        input.value = result
    }
})

