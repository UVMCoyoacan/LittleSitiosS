function enviarMensaje() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
  
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Gracias, <strong>${nombre}</strong>, por tu mensaje:</p>
                           <p>"${mensaje}"</p>
                           <p>Te contactaremos a <strong>${correo}</strong> pronto.</p>`;
  
    // Limpia los campos manualmente sin usar .reset()
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';
  }
  