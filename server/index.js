require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

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
const {
  addToDoListItem,
  updateToDoListItem,
  deleteToDoListItem,
  createToDoList,
  resetToDo,
} = require('./controllers/toDoList.js');
const {
  addPeople,
  updatesPeople,
  deletePeople,
  createsPeopleList,
  updatePeopleList,
  resetPeople,
} = require('./controllers/people.js');
const {
  uploadImage,
  getImage,
  deleteImage,
} = require('./controllers/images.js');
// const { IAM } = require('aws-sdk');  Dont think i need this
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

const IMAGE_API = '/api/image';

app.post(IMAGE_API, upload.single('image'), uploadImage);
app.get(`${IMAGE_API}/:key`, getImage);
app.delete(`${IMAGE_API}/:key`, deleteImage);

const USER_API = '/api/users';
const TRIP_API = `/api/trip`;
const TO_DO_LIST_API = `/api/todolist`;
const PEOPLE_API = `/api/people`;

//reset endpoint only for testing do not normally use
app.delete(`${USER_API}/reset`, userDatabaseReset);
app.delete(`${TRIP_API}/reset`, resetTripData);
app.delete(`${TO_DO_LIST_API}/reset`, resetToDo);
app.delete(`${PEOPLE_API}/reset`, resetPeople);
app.get('/api/test', getTestData);
//See above

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

// Trip endpoints
app.use(isLoggedIn);
app.post(`${TRIP_API}`, addNewTrip);
app.put(`${TRIP_API}`, changeTripName);
app.delete(`${TRIP_API}`, deleteTrip);

app.post(`${TO_DO_LIST_API}`, createToDoList);
app.post(`${TO_DO_LIST_API}/item`, addToDoListItem);
app.put(`${TO_DO_LIST_API}/item`, updateToDoListItem);
app.delete(`${TO_DO_LIST_API}/item`, deleteToDoListItem);

app.post(`${PEOPLE_API}`, addPeople);
app.post(`${PEOPLE_API}/list`, createsPeopleList);
app.put(`${PEOPLE_API}`, updatesPeople);
app.put(`${PEOPLE_API}/list`, updatePeopleList);
app.delete(`${PEOPLE_API}`, deletePeople);

// adding new trip, people and todo list, should send things on body
// // getting trip, people and todo list
// // might want to think about addin a querey or param to search
// app.get();
// app.get();
// app.get();
// chaning trip, people and todo list
// mark?ing a todo list item as done
// deleting trip, people and todo list

// // Picture endpoints

// const PICTURE_API = '/api/picture';

app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`));
