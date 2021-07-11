require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {
  getTestData,
  register,
  login,
  logout,
  updateUserInformation,
  updatePassword,
  userDatabaseReset,
} = require('./controllers/users.js');
const {
  addNewTrip,
  changeTripName,
  deleteTrip,
  resetTripData,
} = require('./controllers/trip.js');
const {} = require('./controllers/toDoList.js');
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

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(express.json());

//  Middleware to check if the user has a session.

function isLoggedIn(req, res, next) {
  if (!req.session.user) {
    res.status(401).json('Please log in');
  }
  next();
}

const USER_API = '/api/users';

// Create new users
app.post(`${USER_API}/register`, register);
// Logging in users
app.get(`${USER_API}/login`, login);
// Update user information
app.put(`${USER_API}`, isLoggedIn, updateUserInformation);
app.put(`${USER_API}/password`, isLoggedIn, updatePassword);
//  Log out
app.post(`${USER_API}/logout`, logout);
// To reset the userdatabase for testing
app.delete(`${USER_API}/reset`, userDatabaseReset);

// Trip endpoints
const TRIP_API = `/api/trip`;
const TO_DO_LIST_API = `/api/toDoList`;
const PEOPLE_API = `/api/people`;
// adding new trip, people and todo list, should send things on body
app.post(`${TRIP_API}`, addNewTrip);
// app.post();
// app.post();
// // getting trip, people and todo list
// // might want to think about addin a querey or param to search
// app.get();
// app.get();
// app.get();
// chaning trip, people and todo list
// mark?ing a todo list item as done
app.put(`${TRIP_API}`, changeTripName);
// app.put();
// app.put();
// deleting trip, people and todo list
app.delete(`${TRIP_API}`, deleteTrip);
app.delete(`${TRIP_API}/reset`, resetTripData);
// app.delete();
// app.delete();
// // Picture endpoints

// const PICTURE_API = '/api/picture';

app.get('/api/test', getTestData);

app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`));
