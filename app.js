// ATT GÖRA: lägg till beskrivning på allt
// Gör numrerad lista.

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

// Hämta Hundbild NR 1
/* let hundelement = document.querySelector('#dogHome');
// Fetching image or gif.
fetch('https://random.dog/woof.json')
  .then(responsen => responsen.json())
  .then(result => {
    sessionStorage.setItem('dogpicture', JSON.stringify(result.url));
  }); */

// Hämta Hundbild-funktionen NR 2
const getDog = function () {
  fetch('https://random.dog/woof.json')
    .then(dogResponse => dogResponse.json())
    .then(dogResult => {
      console.log("Är gif: " + !dogResult.url.includes("jpg"))
      if (dogResult.url.includes("gif") || dogResult.url.includes("mp4")) {
        getDog()
      } else {
        sessionStorage.setItem('dogpicture', JSON.stringify(dogResult.url));
        console.log("Är bild: " + dogResult.url.includes("jpg"))
      }
    })
}
getDog();
let hundelement = document.querySelector('#dogHome');
let hundbilden = JSON.parse(sessionStorage.getItem('dogpicture'));
hundelement.setAttribute('src', hundbilden);


// Formulär -koden. Become a member:
let formen = document.getElementById("medlem-formular");
let FnamnInfo = document.getElementById("firstName");
let EnamnInfo = document.getElementById("lastName");
let konsent = document.getElementById("consent");
let submitKnappen = document.getElementById("send");
let refreshKnappen = document.getElementById("refresh");
// +hundelement

//Displaya bli medlem-inputs DENNA FÖR PROFIL-SIDAN.
let mottagaren = document.getElementById("form-tagaren");
let profilbild = document.getElementById("dogprofile");


// Kollar ifall profildata finns. Kör på båda sidor.
let datan = JSON.parse(sessionStorage.getItem('info'));
console.log("Har profildata laddats up? " + datan);
if (datan !== null) {
  // LÄGG TILL HÄR:
  // - ta bort modal-knapp. style.dipslay = "none";
  // - lägg till profil-knapp. Embedda profil-länk i knapp.
  //
  mottagaren.innerText = `Hej du måste vara ${datan.firstName} ${datan.lastName}`;
  profilbild.setAttribute("src", datan.profileDogPic)
  // profilbild.style.backgroundImage = `url(${datan.profileDogPic})`;

} else {
  mottagaren.innerText = ''
}

// REFRESH knappen.
refreshKnappen.addEventListener('click', () => {
  getDog();
  hundbilden = JSON.parse(sessionStorage.getItem('dogpicture'));
  hundelement.setAttribute('src', hundbilden);
})

// lyssna efter att allt i <form> är ifyllt och kryssat.
submitKnappen.disabled = true;

konsent.addEventListener('input', event => {
  if (event.target.checked !== true) {
    submitKnappen.disabled = true;
  } else if (event.target.checked === true) {
    if (FnamnInfo.value === "" || EnamnInfo.value === "") {
      submitKnappen.disabled = true;
    } else if (FnamnInfo.value !== "" && EnamnInfo.value !== "") {
      submitKnappen.disabled = false;
    }
  }
})
FnamnInfo.addEventListener('input', event => {
  if (event.target.value === "") {
    submitKnappen.disabled = true;
  } else if (event.target.value !== "") {
    if (konsent.checked === false || EnamnInfo.value === "") {
      submitKnappen.disabled = true;
    } else if (konsent.checked === true && EnamnInfo.value !== "") {
      submitKnappen.disabled = false;
    }
  }
})
EnamnInfo.addEventListener('input', event => {
  if (event.target.value === "") {
    submitKnappen.disabled = true;
  } else if (event.target.value !== "") {
    if (FnamnInfo.value === "" || konsent.checked === false) {
      submitKnappen.disabled = true;
    } else if (FnamnInfo.value !== "" && konsent.checked === true) {
      submitKnappen.disabled = false;
    }
  }
})

// Lagra data från formulär.
formen.addEventListener('submit', () => {
  sessionStorage.setItem('info', JSON.stringify({
    firstName: `${FnamnInfo.value}`,
    lastName: `${EnamnInfo.value}`,
    profileDogPic: `${hundbilden}`
  }))
});
