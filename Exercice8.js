/*
Simulez un téléchargement avec :
const wait = ms => new Promise(res => setTimeout(res, ms));
Affichez Début, attendez 2s, puis Fin.
*/

const wait = ms => new Promise(res => setTimeout(res, ms));

async function telechargement() {
  console.log("Début");
  await wait(2000); 
  console.log("Fin");
}

telechargement();
