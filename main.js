const div_de_la_imagem = document.querySelectorAll(".resaltar_elemento_js");

div_de_la_imagem.forEach((div_de_la_imagem) => { // foreach para recorrer cada div
    const imagen = div_de_la_imagem.querySelector("img"); // Busca la imagen dentro del div
    if (imagen) {
        div_de_la_imagem.addEventListener('mouseover', () => {
            imagen.style.filter = 'blur(2px)';
        });

        div_de_la_imagem.addEventListener('mouseout', () => {
            imagen.style.filter = 'blur(0px)';
        });
    }
});
