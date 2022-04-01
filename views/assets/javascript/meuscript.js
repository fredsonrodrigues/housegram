const input = document.querySelector('input#username');

input.classList.add('passou-por-cima');

window.onload = function () {
    const button = document.querySelector('button#login-button');
    button.disabled = false;
}

function validateInput() {
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log({user, password})
    if (user !== "" && password !== "") {
        const button = document.querySelector('button#login-button');
        button.disabled = false;
    }
}

function validateForm(event) {
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log({user, password})
    if (user === "" && password === "") {
        alert("Você precisa preencher os campos.")
        event.preventDefault();
    }
}