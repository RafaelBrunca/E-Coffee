let imagemPricipal = document.getElementById('imagemPrincipal');
let miniaturaUm = document.getElementById('miniaturaUm');
let miniaturaDois = document.getElementById('miniaturaDois');

miniaturaUm.addEventListener('click', function(){
    let srcImg = imagemPricipal.src;

    imagemPricipal.setAttribute('src', miniaturaUm.src);
    miniaturaUm.setAttribute('src', srcImg);
        
});

miniaturaDois.addEventListener('click', function(){
    let srcImg = imagemPricipal.src;

    imagemPricipal.setAttribute('src', miniaturaDois.src);
    miniaturaDois.setAttribute('src', srcImg);
        
});
