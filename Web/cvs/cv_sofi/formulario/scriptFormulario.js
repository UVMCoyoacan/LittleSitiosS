function enviarContacto() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var mailCel = document.getElementById('mailCel').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    if (!nombre || !apellido || !mailCel || !asunto || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
        return;
    }

    var mensajePersonalizado = `\nGRACIAS, ${nombre} ${apellido}.\n\n\n ATENDERE EN BREVE TU SOLICITUD DE: ${asunto}\n\n ME COMUNICARE PRONTO A:  ${mailCel}`;

    alert(mensajePersonalizado);

    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('mailCel').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('mensaje').value = '';

}