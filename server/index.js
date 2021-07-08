require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;

const app = express();

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set('db', dbInstance);
  console.log('The database is running');
});

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.status(200).send('this works');
});

app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`));
