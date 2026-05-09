// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')
const pTag = document.querySelector("#content");

// TODO: log previous content and update nodes (iterate NodeList with forEach)
pTag.innerHTML = "<h2>the innerText/innerHTML is used to change text content on the page! one changes the text and the other makes changes to the html</h2>";


// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
