import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form')
addText();

form.addEventListener('input', throttle(evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    console.log(formData)
}, 500))

form.addEventListener('submit', evt => {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY)

})


function addText() {
    const values = localStorage.getItem(LOCALSTORAGE_KEY);
    if (values) {
    const text = JSON.parse(values);
    form.email.value = text.email;
    form.message.value = text.message;
    }
}