
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

    const clearDisplay = () => {
        $("#input").val("")
    }

    const deleteKey = () => {
    let value = $("#input").val()
        $("#input").val(value.substring(0, value.length - 1))
    }

    const reverseSign = () => {
        $("#input").val($("input").val() * -1)
    }
    
    // Display input on screen
    $(".row > button").click(function() {
        console.log("test")
        const button = $(this);
        const buttonCanBeShown = (jQuery.inArray(button.val(), notShowableButtons)) == -1

        if (buttonCanBeShown) {
            let lastIndex = button.val()
            let penultimateIndex = characterOnIndex(1)
        
            if (canPressSign.includes(lastIndex) & canPressSign.includes(penultimateIndex)) {
                console.log('last index is sign')
            }
            else {
                console.log("test")
                let temp = $("#input").val();
                temp += lastIndex;
                $("#input").val(temp);
            }
        }
    })
    // Checks user input or evaluate
    $("#enterButton").click(function () {
        const input = $(this);
        const lastCharacter = input.val()
        const lastCharacterIsSign = canPressSign.includes(lastCharacter)

        if ($("#input").val() == '') {
            $("#input").val("Enter something...")
        }

        let result = eval($("#input").val())
        $("input").val(result)
    })
})
