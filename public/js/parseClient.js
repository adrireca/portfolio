// const app_id = process.env.PARSE_APPLICATION_ID;
// const js_key = process.env.PARSE_JAVASCRIPT_KEY;
// const host_url = process.env.PARSE_HOST_URL;

// Parse.initialize(app_id, js_key);
// Parse.serverURL = host_url;

import { app_id, js_key, host_url } from './config.js';

Parse.initialize(app_id, js_key);
Parse.serverURL = host_url;


async function createMessageForm() {
    let message = new Parse.Object('Message_form');

    message.set("name", document.getElementById("name").value);
    message.set("email", document.getElementById("email").value);
    message.set("subject", document.getElementById("subject").value);
    message.set("message", document.getElementById("message").value);

    try {
        // Call the save method, which returns the saved object if successful
        message = await message.save();
        if (message !== null) {
            alert(
                `¡Gracias por contactar! Pronto recibirás una respuesta.`
            );
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
    /* Limpia campos del formulario. */
    document.querySelector(".contact-form").reset();
}

// Add on click listener to call the create parse user function
document.getElementById("btn_form").addEventListener("click", async function (e) {
    e.preventDefault();
    createMessageForm();
});

const confirmModal = () => {
    html = `
        <div class="modal fade show" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" style="display: block;" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalCenterTitle">¡Gracias por contactar!</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Pronto recibirás una respuesta.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    return html;
}