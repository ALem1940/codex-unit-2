function greet() {
  console.log("Hello world!");
}

// TODO: Declare named functions then assign them as methods on the exported object.
// Example:
// function greet(name) { return 'Hi ' + name }
// const user = { name: 'Ava' }
// user.greet = greet
// export default user
const salutations= {
  formal: "Hello",
  informal:"What's up?"
};

salutations.foreign = "Hola";
salutations.greet= greet;

salutations.greet();
  /* TODO: add name */

export default salutations;
