// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value
const form = document.querySelector("form");
form.onsubmit = handleSubmit;
const output = document.getElementById("output");

function handleSubmit(event) {
  event.preventDefault();
  const form= event.target;
  form.elements.email;
  const message = formTag.elements.message.value;
  console.log("form submit scaffold");
  output.innerText = message;
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
