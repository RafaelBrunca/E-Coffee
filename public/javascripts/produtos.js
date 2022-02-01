let formProduto = document.getElementById("formularioProduto");

let camposComVirgula = ["peso", "preco", "custo"];
camposComVirgula.forEach(function(campo) {
  let formatar = document.getElementById(campo);
  formatar.addEventListener("change", function() {
    this.value = this.value.replace(",", ".");
  })
});

formProduto.onsubmit = function(event) {
  event.preventDefault();

  let valido = true;

  let camposObrigatorios = ["nomeproduto", "sku", "codigobarras", "descricao", "infotecnica", "peso", "preco", "custo", "titulo", "palavrachave", "quantidade", "imagem"];
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
      formProduto.onsubmit = null;
      formProduto.submit();
    };
  });
};