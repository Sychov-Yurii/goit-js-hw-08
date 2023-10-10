refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    
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