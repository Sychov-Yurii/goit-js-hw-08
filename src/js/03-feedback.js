import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('input', e => {

    formData[e.target.name] = e.target.value;
    console.log(formData); 
    saveFormDataToLocalStorage();
})
populateTextarea();

function onFormSubmit (evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function onFormInput (evt) {
    const message = evt.target.value;
    saveFormDataToLocalStorage();
}

function saveFormDataToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea () {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        formData = JSON.parse(savedMessage);
        refs.textarea.value = formData.textarea;
    }
}