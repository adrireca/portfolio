const contactForm = document.querySelector('.contact-form');
let fullName = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: fullName.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = () => {
        console.log(xhr.responseText);

        if(xhr.responseText == 'success') {
            alert('Email sent.');

            resetForm();
        } else {
            alert('Form soon operational!');
        }
    }

    xhr.send(JSON.stringify(formData));

});

/* Resetea formulario de contacto. */
const resetForm = () => {
    fullName.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
}