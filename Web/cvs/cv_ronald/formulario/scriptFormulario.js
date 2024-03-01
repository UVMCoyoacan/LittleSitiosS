document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        const confirmacion = confirm("¿Estás seguro de enviar el formulario?");

        if (confirmacion) {
            // Si el usuario confirma, se envía el formulario
            form.submit();
        } else {
            // Si el usuario cancela, no se envía el formulario
            // Aquí puedes agregar cualquier otra acción que desees realizar
            console.log("Envío de formulario cancelado.");
        }
    });
});
