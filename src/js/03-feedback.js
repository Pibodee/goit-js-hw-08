import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form')
addText();

form.addEventListener('input', throttle(evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}, 500))

form.addEventListener('submit', evt => {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    localStorage.removeItem(LOCALSTORAGE_KEY)
    
})


function addText() {
    const values = localStorage.getItem(LOCALSTORAGE_KEY);
    if (values) {
        const text = JSON.parse(values);
        if(text.email){form.email.value = text.email;}
        else { form.email.value = '' }
         if (text.message) {
           form.message.value = text.message;
         } else {
           form.message.value = '';
         }
    }
}