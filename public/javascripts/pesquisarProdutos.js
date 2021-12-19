let pesquisa = document.getElementById('searchbar');
let barraDePesquisa = document.getElementById('pesquisa');

pesquisa.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch("/encontrarprodutos/"+barraDePesquisa.value).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    })
})