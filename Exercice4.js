/*
Spread Operator
Fusionnez deux tableaux : [1,2,3] et [4,5,6] avec ....
Faites une copie d’un objet puis modifiez une valeur.
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const fusion = [...arr1, ...arr2];

console.log("Fusion :", fusion); // [1, 2, 3, 4, 5, 6]


const user = { name: "Noor", age: 10 };
const userCopy = { ...user, age: 21 }; 

console.log("Original:", user);     // { name: "Noor", age: 20 }
console.log("Copie:", userCopy); // { name: "Noor", age: 21 }
