const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.value);
  });
});
