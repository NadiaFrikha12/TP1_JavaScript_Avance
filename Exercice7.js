/*
Tableaux avancés
À partir du tableau :
const notes = [12, 5, 17, 9, 20];
1. Calculez la moyenne (avec reduce).
2. Triez le tableau en ordre décroissant.
3. Filtrez les notes ≥10.
*/

const notes = [12, 5, 17, 9, 20];

const moyenne = notes.reduce((acc, note) => acc + note, 0) / notes.length;
console.log("Moyenne :", moyenne); // Moyenne : 12.6

const notesDecroissantes = [...notes].sort((a, b) => b - a);
console.log("Tri décroissant :", notesDecroissantes); // [20, 17, 12, 9, 5]

const notesSup10 = notes.filter(note => note >= 10);
console.log("Notes ≥10 :", notesSup10); // [12, 17, 20]
