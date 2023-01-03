import express from "express";

const PORT = 5000;
const app = express();
const router = express.Router();

app.use(express.static("static"));
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

// Statistika tlačítek
router.post("/api", (req, res) => {
  res.json({ message: "test" });
});

app.use(router);
