const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    let validate = false;

    if (nameValue === '') {
        setError(name, 'El nombre es requerido');
        validate = false;
    } else {
        setSuccess(name);
        validate = true;
    }

    if (emailValue === '') {
        setError(email, 'El email es requerido');
        validate = false;
    } else if (!isEmail(emailValue)) {
        setError(email, 'Proporciona una cuenta de email válida (ejem@ejem.com)');
        validate = false;
    } else {
        setSuccess(email);
        validate = true;
    }

    if (subjectValue === '') {
        setError(subject, 'El asunto es requerido');
        validate = false;
    } else {
        setSuccess(subject);
        validate = true;
    }

    if (messageValue === '') {
        setError(message, 'El mensaje es requerido');
        validate = false;
    } else {
        setSuccess(message);
        validate = true;
    }

    return validate;
}