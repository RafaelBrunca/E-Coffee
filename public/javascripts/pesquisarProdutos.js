let pesquisa = document.getElementById('formPesquisar');
let barraDePesquisa = document.getElementById('pesquisa');
let botaoPesquisa = document.getElementById('btn-pesquisar');


pesquisa.addEventListener('keyup', function() {

    if(barraDePesquisa.value.length >= 2){
        fetch("/encontrarprodutos/"+barraDePesquisa.value).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data)
        })
    };    
})

pesquisa.addEventListener('submit', function() {
    pesquisa.setAttribute('action', '/produto/encontrar/'+barraDePesquisa.value)
});