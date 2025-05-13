

const formulariosContacto = document.querySelectorAll(".formulario_Contacto_js");

formulariosContacto.forEach((formulario) => {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nombre = formulario.querySelector('input[name="nombre"]').value;
        const apellido = formulario.querySelector('input[name="apellido"]').value;
        const email = formulario.querySelector('input[name="correo_electronico"]').value;
        const telefono = formulario.querySelector('input[name="telefono"]').value;
        const usuario = formulario.querySelector('input[name="usuario"]').value;
        const elegir_op = formulario.querySelector('select[name="elegir_op"]').value;

        if (!nombre || !apellido || !email || !telefono || !usuario || !elegir_op) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert(`¡Gracias, ${nombre} ${apellido}! Te contactaremos a ${email}.`);
    });
});

