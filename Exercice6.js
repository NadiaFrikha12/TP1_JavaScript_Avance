/*
Classe ES6
Créez une classe Etudiant avec : nom, note.
Ajoutez une méthode getMention() :
o ≥16 : Très bien
o ≥14 : Bien
o ≥10 : Passable
o sinon : Échec
Instanciez 3 étudiants et affichez leur mention.
*/

class Etudiant {
    constructor(nom, note){
        this.nom = nom;
        this.note = note; 
    }

    getMention() {
        if (this.note >= 16){
            return "Très bien";
        }
        else if (this.note >= 14){
            return "Bien";
        }else if (this.note >= 12){
            return "Passable";
        } else {
            return "Échec";
        }
    }
}

const etudiant1 = new Etudiant("Noor", 17);
const etudiant2 = new Etudiant("Mohammed", 15);
const etudiant3 = new Etudiant("Ahmed", 9);

console.log(`${etudiant1.nom} : ${etudiant1.getMention()}`); 
console.log(`${etudiant2.nom} : ${etudiant2.getMention()}`);
console.log(`${etudiant3.nom} : ${etudiant3.getMention()}`); 
