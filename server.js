import express from "express";
import jsondb from "simple-json-db";

// Připojení databáze
const db = new jsondb("./data/statistic.json");

const PORT = 5000;
const app = express();
const router = express.Router();

app.use(express.static("static"));
app.use(express.json());
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

const DEFAULT_VALUE = 1;

// Statistika tlačítek
router.post("/api", (req, res) => {
  const { clickedButton } = req.body;

  const keyExistsInDb = db.has(clickedButton);

  if (keyExistsInDb) {
    // Zvýšit existující key o jedna
    const value = db.get(clickedButton);
    db.set(clickedButton, value + 1);
  } else {
    // Nastavit nový key s hodnotou 1
    db.set(clickedButton, DEFAULT_VALUE);
  }

  // Vrátit celou statistiku tlačítek
  res.json(db.JSON());
});

app.use(router);
