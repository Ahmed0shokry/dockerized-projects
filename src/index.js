const express = require('express');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();

DB_USER_NAME = 'root';
DB_USER_PASSWORD = 'example';
DB_HOST = 'mongo';
DB_PORT = '27017';
DB_URL = `mongodb://username:password@host:port/database?options...`;
mongoose.connect(`mongodb://${DB_USER_NAME}:${DB_USER_PASSWORD}@${DB_HOST}:${DB_PORT}`)
    .then( ()  => { console.log('mongo DB is connected')})
    .catch((err) => {console.log('failed to connect to mongo DB : ' , err)});

app.get('/', (req, res) => {
  res.send('Hello World shokry test');
});

app.listen(PORT, () => { console.log("Server is running on port " + PORT) });