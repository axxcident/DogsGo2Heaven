// ATT GÖRA: lägg till beskrivning på allt

// Kod för att publicera inlägg:
const formular = document.getElementById("formularet");
const pubKnappen = document.getElementById("post-publishing");
// const textfalt = document.getElementById("post-typing");
const flowet = document.querySelector("body > main > section");

// när man klickar på knapp ska formulär-noden köra detta.
formular.addEventListener("submit", event => {
  // Hindrar sidan från att ladda om. KNSK ta bort och göra AEL knapp så att inläggstext försvinner.
  event.preventDefault();
  // Skapar String värde.
  let textfalt = document.getElementById("post-typing").value;
  // Skapa nytt inlägg
  let nyArtikel = document.createElement('article');
  nyArtikel.setAttribute("class", "inlagg");
  nyArtikel.innerHTML = `
  <i class="fa fa-user fa-2x"></i>
  <h5 class="post-name">John Doe</h5>
  <p class="post-text">
    ${textfalt}
  </p>
  `;
  // markera överst
  let toppen = document.querySelector("body > main > section > article:nth-child(2)");
  // släng in nytt inlägg
  flowet.insertBefore(nyArtikel, toppen);
});

fetch("http://localhost:3000/jokes", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(responsen => responsen)
  .then(res => console.log(res))

// Kan jag hämta skämt från APIn? NEJ. Jag behöver json-server.
/* fetch('https://icanhazdadjoke.com/', {
  method: "GET",
  headers: {
    'Content-Type': 'text/plain'
  }
})
  .then(response => response)
  .then(result => { databasen["jokes"] = result }); */


// HÄMTA HUNBDBILDER
/* let hundelement = document.querySelector('#dogHome')
// Fetching image or gif.
fetch('https://random.dog/woof.json')
  .then(response => response.json())
  .then(result => {
    hundelement.setAttribute('src', result.url)
  }); */


// Funktion för text. (och/eller url text) KNSK TA BORT DENNA FUNKTION
/* function showMessage(meddelande) {
  document.getElementById('randomDog').textContent = meddelande;
}
let inslag = "woof woof";
showMessage(inslag); */
