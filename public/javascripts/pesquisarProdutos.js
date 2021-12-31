let pesquisa = document.getElementById('formPesquisar');
let barraDePesquisa = document.getElementById('pesquisa');
let botaoPesquisa = document.getElementById('btn-pesquisar');

pesquisa.addEventListener('keyup', function() {

    if(barraDePesquisa.value.trim().length >= 2){

        fetch("/encontrarprodutos/"+barraDePesquisa.value.trim()).then(function(response) {
            return response.json();
            
        }).then(function(data) {
            data.forEach(function(item) {
                let encontrados = true;

                if(item.length == 0){
                    encontrados = false;
                };

                if(encontrados == true){
                    let produtosEncontrados = document.createElement('div');
                    produtosEncontrados.className = 'produtos_encontrados';
                    pesquisa.parentElement.append(produtosEncontrados);

                    for(let i=0; i<item.length; i++){
                    
                        let link = document.createElement('a');
                        link.className = "linkProduto";
                        link.href = '/produto/'+item[i].id_produto;
                        produtosEncontrados.append(link);
    
                        let imagem = document.createElement('img');
                        imagem.src = '/'+item[i].imagem;
                        imagem.style.height = '115px';
                        imagem.style.width = '115px';
                        link.append(imagem);
    
                        let nome = document.createElement('p');
                        nome.className = 'nome';
                        nome.innerText = item[i].nome_produto;
                        link.append(nome);
                    };
                };
            })
        })
    };

    document.querySelector('body').onclick = function () {
        if(document.querySelector(".produtos_encontrados")){
            document.querySelector(".produtos_encontrados").remove();
        };    
    };

    if(document.querySelectorAll(".produtos_encontrados")){
        document.querySelectorAll(".produtos_encontrados").forEach((div) => {
            div.remove();
        });
    };
});

pesquisa.addEventListener('submit', function(e) {
    e.preventDefault();
    let valido = false;

    if(barraDePesquisa.value.trim().length > 0) {
        pesquisa.setAttribute('action', '/produto/encontrar/'+barraDePesquisa.value.trim());
        valido = true;
    };

    if(valido == true) {
        pesquisa.addEventListener = null;
        pesquisa.submit();
    };
});