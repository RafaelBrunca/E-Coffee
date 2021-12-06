const usuarioInput = document.querySelector(".userInput");
const senhaInput = document.querySelector(".senhaInput");

//Valida campo de usuario vazio
usuarioInput.addEventListener("blur",() => {
    if(usuarioInput.value == ''){ 
        usuarioInput.style.backgroundColor = "#fffbc7";
        usuarioInput.style.border = "1px solid red";
    } else {
        usuarioInput.style.backgroundColor = "#ffff";
        usuarioInput.style.border = "1px solid #8f8f9d";
    };
});

//Valida campo de senha vazia
senhaInput.addEventListener("blur",() => {
    if(senhaInput.value == ''){ 
        senhaInput.style.backgroundColor = "#fffbc7";
        senhaInput.style.border = "1px solid red";
    } else {
        senhaInput.style.backgroundColor = "#ffff";
        senhaInput.style.border = "1px solid #8f8f9d";
    };
});