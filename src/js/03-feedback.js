import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';

const formData = {}
const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};
refs.form.addEventListener('submit', omFormSubmit);

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
});
populateTextarea();
function omFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};
function onTextareaInput(evt) {
    const message = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, message)
};
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.textarea.value;
    }
}