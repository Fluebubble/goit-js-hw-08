const throttle = require('lodash.throttle');

const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: ""
};


const form = document.querySelector(".feedback-form");
const nameInputField = document.querySelector('[name="email"]');
const messageInputField = document.querySelector('[name="message"]');

// console.log(localStorage.getItem(STORAGE_KEY));

if (localStorage.getItem(STORAGE_KEY)) {
    parsedLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    nameInputField.value = parsedLocalStorage.email;
    messageInputField.value = parsedLocalStorage.message;

    console.log(parsedLocalStorage);
}


form.addEventListener("submit", onFormSubmit);

form.addEventListener("input", throttle(onFormChangeInput, 500));

function onFormChangeInput(e) {
    // console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target);

    if (e.target.name === "email") {
        formData.email = e.target.value;
    }
    if (e.target.name === "message") {
        formData.message = e.target.value;
    }    
    console.log(formData);

    jsonFormData = JSON.stringify(formData);
    console.log(jsonFormData);
    localStorage.setItem(STORAGE_KEY, jsonFormData)

}

function onFormSubmit(e) {
    e.preventDefault();
    nameInputField.value = "";
    messageInputField.value = "";
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

