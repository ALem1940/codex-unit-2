// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget
//const form = document.getElementById("sample-form");
//form.onsubmit = handleSubmit;

function handleSubmit(event) {
  // TODO: call event.preventDefault() when experimenting
  event.preventDefault();
  const form = event.target;
  console.log("event.target is the element that originally sent the event.",form);
  // TODO: const form = event.target; use form.elements to access inputs
  debugger;
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
