// import { app_id, js_key, host_url } from './config.js';
import { validateInputs } from './validation.js';

const app_id = "UgiSe69sTu9YQigZDcYMeFI6dTs1l7DlMrjXMWB2";
const js_key = "G8b7XtnZvPHKKUbGtkTRAN8FvAX8U5KTsjrtdMoa";
const host_url = "https://parseapi.back4app.com/";

Parse.initialize(app_id, js_key);
Parse.serverURL = host_url;

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


document.getElementById("btn_form").addEventListener("click", async function (e) {
    e.preventDefault();

    if (validateInputs()) {
        createMessageForm();
    }
});

async function createMessageForm() {
    let message_object = new Parse.Object('Message_form');
    let spinner = document.getElementById("spinner");

    message_object.set("name", name.value);
    message_object.set("email", email.value);
    message_object.set("subject", subject.value);
    message_object.set("message", message.value);

    try {
        // Call the save method, which returns the saved object if successful
        message_object = await message_object.save();
        if (message_object !== null) {
            /* Muestra spinner. */
            spinner.style.display = "flex";
            
            showBootstrapAlert('success', '¡Gracias por contactar! Pronto recibirás una respuesta.');
            // alert(
            //     `¡Gracias por contactar! Pronto recibirás una respuesta.`
            // );
        }
    } catch (error) {
        showBootstrapAlert('danger', `Error: ${error.message_object}`);
        // alert(`Error: ${error.message_object}`);
    }
    /* Limpia campos del formulario. */
    document.querySelector(".contact-form").reset();
    
    /* Oculta spinner. */
    spinner.style.display = "none";
}


function showBootstrapAlert(type, message) {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', `alert-${type}`, 'mt-3', 'mb-0', 'text-center', 'alert-dismissible', 'fade', 'show');
    alertElement.innerHTML = `
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        <strong>${message}</strong>
    `;

    const alertContainer = document.getElementById('alert');
    alertContainer.appendChild(alertElement);

    // setTimeout(() => {
    //     alertElement.remove();
    // }, 5000);
}