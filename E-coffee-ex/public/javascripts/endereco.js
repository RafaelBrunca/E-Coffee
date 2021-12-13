let formulario = document.getElementById("formEndereco");
let cep = document.getElementById("cep");

//Preenche os campos de endereço do usuairo a partir do cep
cep.addEventListener("change", function() {
    let endereco = `https://viacep.com.br/ws/${cep.value}/json/`;
    fetch(endereco).then((data) => {
        return data.json();
    })
    .then(resultado =>{
        document.getElementById('rua').value = resultado.logradouro;
        document.getElementById('bairro').value = resultado.bairro;
        document.getElementById('cidade').value = resultado.localidade;
        document.getElementById('estado').value = resultado.uf;
    })
    .catch((err) => {
        console.log(err);
    })
});

//Valida formulario de Endereço
formulario.onsubmit = function(event) {
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
        form.style.border = "1px solid #8f8f9d";
      };
    });

    if(valido == true){
        formulario.onsubmit = null;
        formulario.submit;
    };
  });
};