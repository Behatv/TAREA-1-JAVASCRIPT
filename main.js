//PAGINA INICIO

const botones = document.querySelectorAll(".boton_click_js");

botones.forEach((boton) => {
    boton.addEventListener('click', (evento) => {
        evento.preventDefault();
        console.log("se hizo click en el boton");
    });
});

const div_de_la_imagem_inicio = document.querySelectorAll(".imagen_desaparece_js");

div_de_la_imagem_inicio.forEach((div_de_la_imagem_inicio) => {
    const imagen = div_de_la_imagem_inicio.querySelector("img"); // Busca la imagen dentro del div
    if (imagen) {
        imagen.addEventListener('load', () => {
        });

        setTimeout(() => {
            imagen.src = imagen.dataset.src;
        }, 5000);
    }
});


// PAGINA NOSOTROS
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

const formulario_Nosotros = document.querySelectorAll(".formulario_Nosotros_js");

formulario_Nosotros.forEach((formulario_Nosotros) => {
    const input_formulario = formulario_Nosotros.querySelector("input");
    if (input_formulario){
        formulario_Nosotros.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Evita la recarga de la página
            const email = formulario_Nosotros.querySelector('input[name="correo_electronico"]').value;
            console.log('Enviando:', { email });
        });
    }
    
});


const formulario_Nosotros2 = document.querySelectorAll(".formulario_Nosotros_js");

formulario_Nosotros2.forEach((formulario_Nosotros2) => {
    const input_formulario2 = formulario_Nosotros2.querySelector("input");
    if (input_formulario2){
        const capturar_teclas_input = document.querySelectorAll(".capturar_teclas_input_js");
        const teclaDiv = document.querySelector(".div_tecla_js");
        if (capturar_teclas_input){
            formulario_Nosotros2.addEventListener('keydown', (evento) => {
                teclaDiv.textContent = `Tecla presionada: ${evento.key}`;
            });
        }  
    }      
});



