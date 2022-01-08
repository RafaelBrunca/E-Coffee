let formLogin = document.getElementById("formularioLogin");

formLogin.addEventListener('submit', function(event) {
  event.preventDefault();

  let valido = true;

  if(this.querySelectorAll(".error")){
    this.querySelectorAll(".error").forEach((divError) => {
        divError.remove();
    });
  };

  let camposObrigatorios = ["userInput", "senhaInput"];
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
});