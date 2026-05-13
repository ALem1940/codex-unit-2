// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: use async/await to call fetch('https://api.jsoning.com/mock/public/users') and then set result.innerText
  const response = await fetch("https://postman-echo.com/get");
  const pTag = document.getElementById("result");
  pTag.innerText = "Async marks a function as asynchronous or takes time. Await is used to wait for fetch to finish. It pauses execution."
}

if (form) form.onsubmit = handleSubmit;
