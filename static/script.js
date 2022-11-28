const input = document.getElementById("input")
const buttons = document.querySelector("#calculator").querySelectorAll("button")

const canPress = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "+", "-", "*", "/",
]

const canPressSign = [
    "+", "-", "*", "/"
]

let characterOnIndex = (index) => {
  let value = input.value
  return value[value.length - index]
}

// Display input on screen
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let lastIndex = button.getAttribute('value')
        let penultimateIndex = characterOnIndex(1)

        if (canPressSign.includes(lastIndex) & canPressSign.includes(penultimateIndex)) {
            console.log('last index is sign')
        }
        else {
            input.value += lastIndex
        }
    })
})