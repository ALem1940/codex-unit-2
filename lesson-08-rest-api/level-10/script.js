// Level 10 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
const form = document.getElementById("sample-form");
const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: collect data, POST to echo server, parse response, and insert values into v1/v2/v3
  const data = {
    username: event.target.elements[0].value,
    email: event.target.elements[1].value
  };

  const dataString = JSON.stringify(data);

  const response = await fetch("https://api.jsoning.com/mock/public/users", {
    method: "POST",
    headers: { "Content-Type": "spplication/json" },
    body: dataString
  });


const result = await response.json();
const val1 = result.id;
const val2 = result.username;
const val3 = result.createdAt;

v1.innerText = val1;
v2.innerText = val2;
v3.innerText = val3;
}


if (form) form.onsubmit = handleSubmit;
