/*
– Destructuring
À partir de l’objet :
const user = { name: "Noor", age: 10, city: "Tunis" };
Extrayez name et age dans deux variables.
*/

const user = { name: "Noor", age: 10, city: "Tunis" };

const { name, age } = user;

console.log(name); // "Noor"
console.log(age);  // 10
