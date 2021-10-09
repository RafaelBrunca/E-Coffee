const bcrypt = require("bcrypt");

const users = [
  {
    id: 1,
    name: "Guilherme Mantz",
    email: "guimantz@hotmail.com",
    password: "$2b$12$Evh73DQwhUwp1SaW5Mxy7eHkDEg2rxfPFjN7AHpNSdKJcywv81/BK",
  },
];

function login(email, password) {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return false;
  }

  const comparePassword = bcrypt.compareSync(password, user.password);
  if (!comparePassword) {
    return false;
  }

  return user;
}

module.exports = {
  login: login,
};