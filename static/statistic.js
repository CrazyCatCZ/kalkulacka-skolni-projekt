const allButtons = document.querySelectorAll("button");
const localHost = "http://localhost:5000";

allButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const clickedButton = button.textContent;

    const response = await fetch(`${localHost}/api`, {
      method: "POST",
      body: JSON.stringify({
        clickedButton,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  });
});
