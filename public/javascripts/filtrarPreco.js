let filtro = document.querySelector('#option-preco');
let marca = document.querySelector('.bloco-marcas');
let produto = document.querySelectorAll(".marcaSelecionada");

filtro.addEventListener('change', async function(e){
    
    if(e.target.value == "maior para o menor"){
        
        let organizaProdutos = [];

        produto.forEach((item) =>{
            organizaProdutos.push(item)
        });
        
        let maiorPmenor= organizaProdutos.sort(function(a, b){
            return b.id-a.id
        });
        
        marca.innerHTML = null;

        for (let i=0; i< maiorPmenor.length; i++){
            
            let organizado = document.createElement('div');
            organizado.className = 'organizados';
            organizado.append(maiorPmenor[i]);
            produto.innerHTML = organizado.innerHTML

            marca.innerHTML += produto.innerHTML;
        };
    };

    if(e.target.value == "menor para o maior"){
        
        let organizaProdutos = [];

        produto.forEach((item) =>{
            organizaProdutos.push(item)
        });
        
        let menorPmaior= organizaProdutos.sort(function(a, b){
            return a.id-b.id
        });
        
        marca.innerHTML = null;

        for (let i=0; i< menorPmaior.length; i++){

            let organizado = document.createElement('div');
            organizado.className = 'organizados';
            organizado.append(menorPmaior[i]);
            produto.innerHTML = organizado.innerHTML

            marca.innerHTML += produto.innerHTML;
        };
    };
});