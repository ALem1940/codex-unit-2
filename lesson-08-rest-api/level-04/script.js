// Level 04 starter script
// TODO: Await fetch and call response.json() to parse the body.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;


async function handleSubmit(event) {
  event.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = response.json();
  const pTag = document.getElementById("result");
  // TODO: fetch and parse JSON, then set result.innerText with a short explanation
}


