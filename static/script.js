
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
    
    let characterOnIndex = (index) => {
      let value = $("#input").val()
      return value[value.length - index]
    }
    
    // Display input on screen
    $(".row > button").click(function() {
        const button = $(this);
        const buttonCanBeShown = !notShowableButtons.includes(button)

        if (buttonCanBeShown) {
            let lastIndex = button.val()
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
