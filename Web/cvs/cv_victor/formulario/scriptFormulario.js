document.getElementById('showFormBtn').addEventListener('click', function() {
  var formContainer = document.getElementById('formContainer');
  formContainer.innerHTML = '';

  var form = document.createElement('form');
  form.action = './formulario/display.html';
  form.method = 'GET';

  var nameField = document.createElement('input');
  nameField.type = 'text';
  nameField.name = 'nombre';
  nameField.placeholder = 'Nombre';
  form.appendChild(nameField);

  var emailField = document.createElement('input');
  emailField.type = 'email';
  emailField.name = 'correo';
  emailField.placeholder = 'Correo';
  form.appendChild(emailField);

  var messageField = document.createElement('textarea');
  messageField.name = 'mensaje';
  messageField.placeholder = 'Mensaje';
  form.appendChild(messageField);

  var submitBtn = document.createElement('input');
  submitBtn.type = 'submit';
  submitBtn.value = 'Enviar';
  form.appendChild(submitBtn);

  formContainer.appendChild(form);
});