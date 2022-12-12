
$(document).ready(() => {
    const canPress = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "+", "-", "*", "/",
    ]
    const canPressSign = [
        "+", "-", "*", "/"
    ]
    
    const notShowableButtons = [
        $("#enterButton").val(), $("#clearButton").val(), $("#clearButton2").val(),
        $("#deleteButton").val(), $("#reverseSignButton").val()
    ]
    
    let characterOnIndex = (index) => {
      let value = $("#input").val()
      return value[value.length - index]
    }
    
    // Display input on screen
    $(".row > button").click(function() {
        const button = $(this);
        const buttonCanBeShown = (jQuery.inArray(button.val(), notShowableButtons)) == -1

        console.log(notShowableButtons, button.val())

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
