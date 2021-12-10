const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
let estilo = document.querySelector(".dropdown-menu-login");

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

      estilo.style.height = "328px";
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

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});