// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')
const pTag = document.querySelector("p");

// TODO: log previous content and update nodes (iterate NodeList with forEach)
pTag.innerHTML = "<h2>Hello world!</h2>";


// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
