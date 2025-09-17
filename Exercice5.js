/*
Objet simple
Créez un objet livre avec titre, auteur, année.
Ajoutez une méthode getInfo() qui retourne une phrase descriptive.
*/

const livre = {
  titre: "Harry Potter à l'école des sorciers",
  auteur: "J.K. Rowling",
  annee: 1997,

  getInfo: function() {
    return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}.`;
  }
};

console.log(livre.getInfo());