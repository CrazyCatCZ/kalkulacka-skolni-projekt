const express = require('express');

const PORT = 5000;
const app = express();

app.use(express.static('static'));
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));