let signUpButton = document.getElementById("signUp");
let signInButton = document.getElementById("signIn");
let container = document.getElementById("container");
let dropdown = document.querySelector(".dropdown-menu-login");
let cadastro = document.querySelector(".body-login .container");

//Valida campos no DropDown de Login
let loginDropDown = document.querySelector(".nav-item .formDropdown");

loginDropDown.onsubmit = function(event) {
  event.preventDefault();

  let valido = true;

  if(this.querySelectorAll(".error")){
    this.querySelectorAll(".error").forEach((divError) => {
        divError.remove();
    });
  };

  let obrigatorios = ["dropemail", "droppassword"];
  obrigatorios.forEach((campo) => {
    let campoDropdown = document.getElementById(campo);

    if(campoDropdown.value.length == 0){
      campoDropdown.style.backgroundColor = "#fffbc7";
      campoDropdown.style.border = "1px solid red";

      let error = document.createElement("div");
      error.className = "error";
      error.innerText = "Este campo é obrigatório"
      campoDropdown.parentElement.append(error);
      valido = false;

      dropdown.style.height = "328px";
    };

    campoDropdown.addEventListener("blur", () => {
      if(campoDropdown.value.length > 0){
        campoDropdown.style.backgroundColor = "#ffff";
        campoDropdown.style.border = "1px solid #8f8f9d";
      };
    });
  });

  if(valido == true){
    loginDropDown.onsubmit = null;
    loginDropDown.submit();
  };
};

//Valida campos na pagina de login
let formLogin = document.getElementById("formularioLogin");

formLogin.onsubmit = function(event) {
  event.preventDefault();

  let valido = true;

  if(this.querySelectorAll(".error")){
    this.querySelectorAll(".error").forEach((divError) => {
        divError.remove();
    });
  };

  let camposObrigatorios = ["loginemail", "loginsenha"];
  camposObrigatorios.forEach((campo) => {
    let formCampo = document.getElementById(campo);

    if(formCampo.value.length == 0){
      formCampo.style.backgroundColor = "#fffbc7";
      formCampo.style.border = "1px solid red";

      let error = document.createElement("div");
      error.className = "error";
      error.innerText = "Este campo é obrigatório"
      formCampo.parentElement.append(error);

      valido = false;
    };

    formCampo.addEventListener("blur", () => {
      if(formCampo.value.length > 0){
        formCampo.style.backgroundColor = "#ffff";
        formCampo.style.border = "1px solid #8f8f9d";
      };
    });
  });

  if(valido == true){
    formLogin.onsubmit = null;
    formLogin.submit();
  };
};

// Valida campos de cadastro
let formCadastro = document.getElementById("formCadastro");

formCadastro.onsubmit = function(event) {
  event.preventDefault();

  let valido = true;

  let camposObrigatorios = ["nome", "sobrenome", "telefone", "cpf", "email", "senha", "confirmasenha" ];
  camposObrigatorios.forEach(function(campo){
    let form = document.getElementById(campo);

    if(form.value.length == 0){
      form.style.backgroundColor = "#fffbc7";
      form.style.border = "1px solid red";

      let error = document.createElement("div");
      error.className = "error";
      error.innerText = "Este campo é obrigatório";
      form.parentElement.append(error);

      valido = false;

      cadastro.style.minHeight = "669px";
    };

    form.addEventListener("blur", () => {
      if(form.value.length > 0){
        form.style.backgroundColor = "#ffff";
        form.style.border = "1px solid #8f8f9d";
      };
    });

    if(valido == true){
      formCadastro.onsubmit = null;
      formCadastro.submit;
    };
  });
};

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});