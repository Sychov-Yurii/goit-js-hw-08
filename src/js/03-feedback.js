import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const refs = {
    form: document.querySelector('.feedback-form'),
};

const { email, message } = refs.form.elements;

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle (onFormInput), 500)
populateTextarea();

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    saveFormDataToLocalStorage(formData);
}

function onFormSubmit (evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData = {};
}

function saveFormDataToLocalStorage(formData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea () {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        email.value = savedMessage.email || '';
        message.value = savedMessage.message || '';
    }
}