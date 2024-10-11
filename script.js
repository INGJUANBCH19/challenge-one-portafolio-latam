document.addEventListener('DOMContentLoaded', function() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const submitBtn = document.getElementById('submitBtn');

    // Función para verificar si todos los campos están llenos y válidos
    function verificarCampos() {
        const nombreValido = nombre.value.trim() !== '' && nombre.value.length <= 50;
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
        const mensajeValido = mensaje.value.trim() !== '' && mensaje.value.length <= 300;

        // Activar o desactivar el botón de envío según la validez de los campos
        if (nombreValido && emailValido && mensajeValido) {
            submitBtn.disabled = false; // Habilitar el botón
        } else {
            submitBtn.disabled = true; // Deshabilitar el botón
        }
    }

    // Escuchar los eventos de entrada en los campos
    nombre.addEventListener('input', verificarCampos);
    email.addEventListener('input', verificarCampos);
    mensaje.addEventListener('input', verificarCampos);

    // Validación y envío del formulario
    document.getElementById('formularioContacto').addEventListener('submit', function(event) {
        const nombreValor = nombre.value.trim();
        const emailValor = email.value.trim();
        const mensajeValor = mensaje.value.trim();

        // Mostrar errores si el formulario es inválido
        if (submitBtn.disabled) {
            event.preventDefault(); // Prevenir el envío si hay campos incorrectos
        } else {
            // El formulario está listo para ser enviado (puedes agregar lógica de envío aquí)
            alert('Formulario enviado con éxito!');
        }
        
    });
    document.getElementById('formularioContacto').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío normal del formulario
    
        // Lógica para enviar el formulario a Formspree
        this.submit(); // Envía el formulario a Formspree
    
        // Limpiar los campos del formulario
        nombre.value = '';
        email.value = '';
        mensaje.value = '';
    });
});

/* Botones Ver repositorio y ver demo */
