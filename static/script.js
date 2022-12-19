
$(document).ready(() => {
    const SQUARE = 2

    const canPress = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "+", "-", "*", "/",
    ]
    const canPressSign = [
        "+", "-", "*", "/"
    ]
    
    const notShowableButtons = [
        $("#enterButton").val(), $("#clearButton").val(), $("#clearButton2").val(),
        $("#deleteButton").val(), $("#reverseSignButton").val(), $("#inverseButton").val(),
        $("#percentButton").val(), $("#squareButton").val(), $("#squareRootButton").val()
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
        let temp = $("#input").val();
        temp = temp * -1;

        $("#input").val(temp);
    }

    const square = () => {
        let temp = $("#input").val();
        temp = eval(temp)
        temp = Math.pow(temp, SQUARE)
  
        $("#input").val(temp);
    }

    const squareRoot = () => {
        let temp = $("#input").val();
        temp = eval(input.value)
        temp = Math.sqrt(temp, SQUARE)

        $("#input").val(temp);
    }

    const reciprocate = () => {
        let temp = $("#input").val();
        temp = eval(input.value)
        temp = 1 / temp

        $("#input").val(temp);
    }
    
    const calculatePercetage = () => {
        alert("Pro toto tlačítka nebyla do zatím přidaná funkcionalita")
    }

    // Display input on screen
    $(".row > button").unbind().click(function() {
        const button = $(this);
        const buttonCanBeShown = (jQuery.inArray(button.val(), notShowableButtons)) == -1

        if (buttonCanBeShown) {
            let lastIndex = button.val()
            let penultimateIndex = characterOnIndex(1)

            const valueIsSignAndInputIsEmpty =
                canPressSign.includes(lastIndex) && $("#input").val === "";
            const lastIndexIsSign =
                canPressSign.includes(lastIndex) &
                canPressSign.includes(penultimateIndex);

            if (lastIndexIsSign) {
                deleteKey()
            }
            if (!valueIsSignAndInputIsEmpty) {
                let temp = $("#input").val();
                temp += lastIndex;
                $("#input").val(temp);
            }
        }
    })

    $("#clearButton, #clearButton2").click(clearDisplay)
    $("#deleteButton").click(deleteKey)
    $("#reverseSignButton").click(reverseSign)
    $("#squareButton").click(square)
    $("#squareRootButton").click(squareRoot)
    $("#inverseButton").click(reciprocate)
    $("#percentButton").click(calculatePercetage)
    
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
