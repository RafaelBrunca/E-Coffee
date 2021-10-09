let usuarioQualquer = "Guilherme"

const loginModel = require("../models/login");

const { validationResult } = require("express-validator");

function get(request, response) {
  if(request.session.user) {
    return response.redirect('/');
  }
}
function login(request, response) {
  const validationErrors = validationResult(request);
  if (!validationErrors.isEmpty()) {
    return response.render("index", {
      error: false,
      created: false,
      exists: false,
      validationErrors: validationErrors.errors,
      empty: false,
    });
  }

  const { email, password } = request.body;

  const user = loginModel.login(email, password);

  if (!user) {
    return response.render("carrinho", {
      error: true,
      created: false,
      exists: false,
      validationErrors: [],
      empty: false,
      usuarioQualquer
    });
  } else {
    request.session.user = {
      userid: user.id,
      name: user.name,
      email: user.email,
    };
    response.redirect("/");
  }
  
}

module.exports = {
  get,
  login,
};