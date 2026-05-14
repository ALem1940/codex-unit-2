// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
const result = document.getElementById("result");
form.onsubmit = handleSubmit;


async function handleSubmit(event) {
  event.preventDefault();
  const data1 = {
    username: form.nextElementSibling.username.value,
    email: form.nextElementSibling.email.value
  };
  // TODO: collect values via form.elements (e.g. form.elements['username'].value)
  // Build a `data` object whose keys match the input `name` attributes.
  // NOTE: intentionally do NOT JSON.stringify the data here; attach the raw object to `body` to expose an error for students to debug.
  // Example (student task):
  // const data = { username: form.elements['username'].value, email: form.elements['email'].value };
  const response = await fetch('https://api.jsoning.com/mock/public/users', { method: 'POST', body: data });
  result.innerText = 'Posted — inspect response in console or check for errors.';
}


