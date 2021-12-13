let formProduto = document.getElementById("formularioProduto");

formProduto.onsubmit = function(event) {
  event.preventDefault();

  let valido = true;

  let camposObrigatorios = ["nomeproduto", "sku", "codigobarras", "descricao", "infotecnica", "peso", "preco", "custo", "titulo", "palavrachave", "imagem", "estoque"];
  camposObrigatorios.forEach(function(campo){
    let form = document.getElementById(campo);

    if(form.value.length == 0){
      form.style.backgroundColor = "#fffbc7";
      form.style.border = "1px solid red";

      form.value = "Campo Obrigatório"

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
      formProduto.submit;
    };
  });
};