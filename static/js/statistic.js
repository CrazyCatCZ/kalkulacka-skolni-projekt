const allButtons = document.querySelectorAll("button");
const localHost = "http://localhost:5000";

const table = document.querySelector("table");
const tbody = document.querySelector("table tbody");

const generateTable = (data) => {
  // Resetovat tabulku
  tbody.textContent = "";
  table.style.display = "table";

  Object.keys(data).forEach((key) => {
    const row = document.createElement("tr");
    const button = document.createElement("td");
    const value = document.createElement("td");

    button.textContent = key;
    value.textContent = data[key];

    row.appendChild(button);
    row.appendChild(value);
    tbody.appendChild(row);
  });
};

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
    generateTable(data);
  });
});
