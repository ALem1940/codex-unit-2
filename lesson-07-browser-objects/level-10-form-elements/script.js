// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value
const form = document.querySelector("form");
form.onsubmit = handleSubmit;


function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  formTag.elements.email;
  console.log(formTag.elements.message.value);
  console.log("form submit scaffold");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
