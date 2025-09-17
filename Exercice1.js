/*
Déclarez 3 variables avec var, let, const.
Montrez la différence de portée dans un bloc {}.
Prévoir une question piège : que se passe-t-il si on réaffecte une const ?
*/

var a = 10;
let b = 20;
const c = 30;

{
  var a = 100;  
  let b = 200;  
  const c = 300; 
  
  console.log("Dans le bloc :");
  console.log("a =", a); // 100
  console.log("b =", b); // 200
  console.log("c =", c); // 300
}

console.log("Hors du bloc :");
console.log("a =", a); // 100
console.log("b =", b); // 20 
console.log("c =", c); // 30  

const x = 5;
x = 10; //TypeError: Assignment to constant variable.

