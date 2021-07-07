require('dotenv').config();
const express = require('express');
const { SERVER_PORT } = process.env;

const app = express();

app.get('/api/test', (req, res) => {
  res.status(200).send('this works');
});

app.listen(SERVER_PORT, () => console.log(`Running on Port ${SERVER_PORT}`));
