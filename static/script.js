
$(document).ready(() => {
    const canPress = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "+", "-", "*", "/",
    ]
    const canPressSign = [
        "+", "-", "*", "/"
    ]
    
    const notShowableButtons = [
        $("#enterButton"), $("clearButton"), $("clearButton2"),
        $("deleteButton"), $("revereverseSignButton")
    ]

    // Display input on screen
    $("#calculator > button").bind("click", function() {
        console.log("test")
            const buttonCanBeShown = !notShowableButtons.includes(button)

            if (buttonCanBeShown) {
                let lastIndex = button.getAttribute('value')
                let penultimateIndex = characterOnIndex(1)
        
                if (canPressSign.includes(lastIndex) & canPressSign.includes(penultimateIndex)) {
                    console.log('last index is sign')
                }
                else {
                    $("#input").val(lastIndex)
                }
            }

        })
    })