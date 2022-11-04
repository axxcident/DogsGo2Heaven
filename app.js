// ATT GÖRA: lägg till beskrivning på allt

// Kod för att publicera inlägg:
const formular = document.getElementById("post-formularet");
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
  // markerar översta noden m QS.
  let toppen = document.querySelector("body > main > section > article:nth-child(2)");
  // Slänger in nytt inlägg.
  flowet.insertBefore(nyArtikel, toppen);
});

// Selecta <p> för funktionen.
let dummyTexts = document.querySelectorAll("#jokeText");

// Funktion för att populatta Nod som heter jokeText.
const getJoke = async function (Noden) {
  const jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  Noden.innerHTML = jokeObj.joke;
}

dummyTexts.forEach(kul => {
  kul = getJoke(kul);
});

// Hämta Hundbild
let hundelement = document.querySelector('#dogHome');
// Fetching image or gif.
fetch('https://random.dog/woof.json')
  .then(responsen => responsen.json())
  .then(result => {
    sessionStorage.setItem('dogpicture', JSON.stringify(result.url));
  });

let hundbilden = JSON.parse(sessionStorage.getItem('dogpicture'));
hundelement.setAttribute('src', hundbilden);

// Formulär -koden. Become a member:
let formen = document.getElementById("medlem-formular");
let FnamnInfo = document.getElementById("firstName");
let EnamnInfo = document.getElementById("lastName");
let konsent = document.getElementById("consent");
// +hundelement

//Displaya bli medlem-inputs DENNA FÖR PROFIL-SIDAN.
let mottagaren = document.getElementById("form-tagaren");
let profilbild = document.getElementById("dogprofile");

let datan = JSON.parse(sessionStorage.getItem('info'));
console.log(datan);
if (datan !== null) {
  mottagaren.innerText = `Hej du måste vara ${datan.firstName} ${datan.lastName}`;
  profilbild.setAttribute("src", datan.profileDogPic)
  // profilbild.style.backgroundImage = `url(${datan.profileDogPic})`;

} else {
  mottagaren.innerText = ''
}

// Lagra/Hämta/Visa data från formulär.
formen.addEventListener('submit', () => {
  // event.preventDefault();
  //Lagra data
  sessionStorage.setItem('info', JSON.stringify({
    firstName: `${FnamnInfo.value}`,
    lastName: `${EnamnInfo.value}`,
    profileDogPic: `${hundbilden}`
  }))

  //Hämta data
  let datan = JSON.parse(sessionStorage.getItem('info'));

  //Visa data
  // mottagaren.innerText = `Hej du måste vara ${datan.firstName} ${datan.lastName}`;
});



// Funktion för text. (och/eller url text) KNSK TA BORT DENNA FUNKTION
/* function showMessage(meddelande) {
  document.getElementById('randomDog').textContent = meddelande;
}
let inslag = "woof woof";
showMessage(inslag); */

// Reserv-fetch (FUNGERAR) för pappa-skämtsidan.
/* fetch('https://icanhazdadjoke.com/', {
  method: "GET",
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => { console.log(result.joke) }); */
