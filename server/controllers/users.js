const bcryptjs = require('bcryptjs');

async function getTestData(req, res) {
  const db = req.app.get('db');
  const testData = await db.test();
  res.status(200).json(testData);
}

async function register(req, res) {
  const { firstName, lastName, password, phoneNumber, email } = req.body;
  const db = req.app.get('db');
  const result = await db.user.find_user_by_username(email);
  if (result) {
    res.status(406).json('This email is already taken');
  }
  const salt = await bcryptjs.genSaltSync(10);
  const hash = await bcryptjs.hash(password, salt);

  const newUser = await db.user.register([
    firstName,
    lastName,
    hash,
    phoneNumber,
    email,
  ]);

  const user = newUser[0];
  req.session.user = {
    firstName: user.users_first_name,
    lastName: user.users_last_name,
    id: user.users_id,
    email: user.users_email,
    phoneNumber: user.phone_number,
  };
  res.status(200).json(req.session.user);
}

async function logout(req, res) {
  req.session.destroy();
  res.status(200).json('logged out');
}

module.exports = { getTestData, register };

//     INSERT INTO users
// (users_first_name, users_last_name, users_password, phone_number, users_email)
// VALUES
// ($1, $2, $3, $4, $5)
// returning *;
