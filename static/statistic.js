const allButtons = document.querySelectorAll("button");
const localHost = "http://localhost:5000";

allButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const clickedButton = button.textContent;

    await fetch(`${localHost}/api`, {
      method: "POST",
      body: JSON.stringify(clickedButton),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });
});
