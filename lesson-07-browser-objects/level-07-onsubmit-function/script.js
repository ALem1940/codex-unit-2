// Level 07 — onsubmit function starter
// TODO: implement a named handler that accepts event and logs a short explanation
// TODO: assign the handler to form.onsubmit (use the form's id in the HTML)
const form = document.querySelector("#sample-form");

function handleSubmit(event) {
  // TODO: accept event and log a message mentioning 'onsubmit'
  event.preventDefault();
  console.log("onsubmit handler called");
}

form.onsubmit = handleSubmit;




