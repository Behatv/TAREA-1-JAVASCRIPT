const formulario_Contacto = document.querySelectorAll(".formulario_Contacto_js");

formulario_Contacto.forEach((formulario_Contacto) => {
    const input_formulario = formulario_Contacto.querySelector("input");
    if (input_formulario){
        formulario_Contacto.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Evita la recarga de la página
            const nombre = formulario_Contacto.querySelector('input[name="nombre"]').value;
            const apellido = formulario_Contacto.querySelector('input[name="apellido"]').value;
            const email = formulario_Contacto.querySelector('input[name="correo_electronico"]').value;

            console.log(`¡Gracias, ${nombre} ${apellido}! Te contactaremos a ${email}.`);

        });
    }
    
});

