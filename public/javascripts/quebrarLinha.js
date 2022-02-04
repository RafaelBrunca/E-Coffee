let descricaoProduto = document.querySelectorAll("#text-product");

for(let i = 0; i < descricaoProduto.length; i++){
    descricaoProduto[i].innerHTML = descricaoProduto[i].innerHTML.replace(/#/gi, "</br>");
};