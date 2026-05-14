// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
const result = document.getElementById("result");


async function handleSubmit(event) {
  event.preventDefault();
  // TODO: collect values via form.elements[0].value, form.elements[1].value, form.elements[2].value
  // build a data object and post it with fetch; then set result.innerText explaining how data is attached
  const data = {
    username: form.nextElementSibling[0].value,
    email: form.nextElementSibling[1].value
  };

  const out = document.getElementById("data");
  out.innerText = JSON.stringify(data, null, 2);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  console.log("Server replied:", result);
}
  


if (form) form.onsubmit = handleSubmit;
