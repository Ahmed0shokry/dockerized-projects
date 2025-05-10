const express = require('express');
const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World shokry 223323555ed');
});

app.listen(PORT, () => { console.log("Server is running on port " + PORT) });