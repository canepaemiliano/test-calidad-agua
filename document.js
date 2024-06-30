document.getElementById('request-test').addEventListener('click', function() {
    document.getElementById('form-section').style.display = 'block';
    this.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    
    alert(`Gracias, ${name}. Hemos recibido tu solicitud y pronto nos pondremos en contacto contigo.`);
    
    // Aquí puedes agregar el código para enviar los datos del formulario al servidor.
    
    // Reinicia el formulario
    document.getElementById('contact-form').reset();
});
