import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]')
const message = document.querySelector('[name="message"]');

addText();
const formData = {
  [email.name]: email.value,
  [message.name]: message.value,
};

localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));


form.addEventListener('input', throttle(() => {
    formData[email.name] = email.value;
    formData[message.name] = message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}, 500))

form.addEventListener('submit', evt => {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY)
    
})


function addText() {
    const values = localStorage.getItem(LOCALSTORAGE_KEY);
      const text = JSON.parse(values);
      if (!text) {
        return;
      }
      email.value = text.email;
      message.value = text.message;  
}