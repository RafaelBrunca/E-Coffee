const formulario = document.getElementById("formEndereco");
const cep = document.getElementById("cep");
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

//Preenche os campos de endereço do usuairo a partir do cep
cep.addEventListener("change", function() {
  const URL = `https://viacep.com.br/ws/${this.value}/json/`;
  const travarCampos = document.querySelectorAll(".respostaCEP");
  travarCampos.forEach(function(campo) {
    campo.setAttribute("disabled", "disabled");
  });

  fetch(URL).then((result) => {
    return result.json();
  })
  .then(data =>{
    rua.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(function() {
    travarCampos.forEach(function(campo) {
      campo.removeAttribute("disabled");
    });
  })
});

//Valida formulario de Endereço
formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  let valido = true;

  let camposObrigatorios = ["apelido", "cep", "rua", "numero", "bairro", "cidade", "estado"];
  camposObrigatorios.forEach(function(campo){
    let form = document.getElementById(campo);

    if(form.value.length == 0){
      form.style.backgroundColor = "#fffbc7";
      form.style.border = "1px solid red";

      valido = false;

    };

    form.addEventListener("blur", () => {
      if(form.value.length > 0){
        form.style.backgroundColor = "#ffff";
        form.style.border = "1px solid #CE5F20";
      };
    });

    if(valido == true){
        formulario.addEventListener = null;
        formulario.submit;
    };
  });
});