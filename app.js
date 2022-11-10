// ATT GÖRA: lägg till beskrivning på allt
// Gör numrerad lista.

// Kod för att publicera inlägg:
const formular = document.getElementById("post-formularet");
const pubKnappen = document.getElementById("post-publishing");
// const textfalt = document.getElementById("post-typing");
const flowet = document.querySelector("body > main > section");

// Funktion som kan spara flera inlägg[lista] i sessionStorage. Returnar oxå lista.
let postList = function (textPost = null) {
  let lista = [];
  if (textPost !== null) {
    if (JSON.parse(sessionStorage.getItem('mypost')) !== null && !Array.isArray(JSON.parse(sessionStorage.getItem('mypost')))) {
      lista.push(textPost);
      lista.push(JSON.parse(sessionStorage.getItem('mypost')));
      sessionStorage.setItem('mypost', JSON.stringify(lista));
    } else if (JSON.parse(sessionStorage.getItem('mypost')) !== null && Array.isArray(JSON.parse(sessionStorage.getItem('mypost')))) {
      lista.push(textPost);
      for (let i = 0; i < JSON.parse(sessionStorage.getItem('mypost')).length; i++) {
        lista.push(JSON.parse(sessionStorage.getItem('mypost'))[i])
      }
      sessionStorage.setItem('mypost', JSON.stringify(lista));
    } else {
      sessionStorage.setItem('mypost', JSON.stringify(textPost));
      lista.push(textPost);
    }
  }
  // return lista;
}

// knsk uppdatera datan variabeln längre ner?
let datan = JSON.parse(sessionStorage.getItem('info'));

// Kod för att visa tidigare inlägg. För användare.
if (datan !== null && sessionStorage.getItem('mypost') !== null) {
  let oldPosts = JSON.parse(sessionStorage.getItem('mypost'));
  console.log(typeof oldPosts)
  console.log(oldPosts)
  let userBild = datan.profileDogPic;
  let namnet = datan.firstName;
  let efternamnet = datan.lastName;
  // markerar översta noden m QS.
  oldPosts.forEach(post => {
    let nyArtikel = document.createElement('article');
    nyArtikel.setAttribute("class", "inlagg");
    let toppen = document.querySelector("body > main > section > article:nth-child(2)");
    nyArtikel.innerHTML = `
    <img class="user-inlagg" src="${userBild}" alt="user profile picture" width="50" height="50">
    <h5 class="post-name">${namnet} ${efternamnet}</h5>
    <p class="post-text">
      ${post}
    </p>
    `;
    flowet.insertBefore(nyArtikel, toppen);
  })
}


// kod för att skriva inlägg i flödet. För användare eller ej.
formular.addEventListener("submit", event => {
  // Hindrar sidan från att ladda om.
  event.preventDefault();
  // Skapar String värde.
  let textfalt = document.getElementById("post-typing").value;
  // Skapa nytt inlägg
  let nyArtikel = document.createElement('article');
  nyArtikel.setAttribute("class", "inlagg");
  // skapa inlägg beroende på om sessionStorage "info" har skapats elr ej.
  if (datan !== null) {
    let userBild = datan.profileDogPic;
    let namnet = datan.firstName;
    let efternamnet = datan.lastName;
    nyArtikel.innerHTML = `
    <img class="user-inlagg" src="${userBild}" alt="user profile picture" width="50" height="50">
    <h5 class="post-name">${namnet} ${efternamnet}</h5>
    <p class="post-text">
      ${textfalt}
    </p>
    `;
    //lägg upp på Session för att spara inlägg ifall användare finns.
    postList(textfalt);
  } else {
    nyArtikel.innerHTML = `
    <img class="npc-user" src="img/npc.png" alt="non-playable character" width="50" height="50">
    <h5 class="post-name">John Doe</h5>
    <p class="post-text">
      ${textfalt}
    </p>
    `;
  }
  // markerar översta noden m QS.
  let toppen = document.querySelector("body > main > section > article:nth-child(2)");
  // Slänger in nytt inlägg i flödet.
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

// Hämta Hundbild-funktionen
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
let konsent = document.getElementById("consent"); // funkar ihop med andra inputs i formuläret.
let homeTown = document.getElementById("hometown");
let nrOfDogs = document.getElementById("nrofdogs");
let submitKnappen = document.getElementById("send");
let refreshKnappen = document.getElementById("refresh");
// +hundelement
// profilknappen på båda sidor. Ska byta ut CTA-knappen.
let profileLink = document.getElementById("profilelink");
let ctaKnappen = document.querySelector(".cta-knappen");

//Displaya bli medlem-inputs DENNA FÖR PROFIL-SIDAN.
// knsk strax överflödig. Kolla dessa noder.
let mottagaren = document.getElementById("form-tagaren");
let profilbild = document.getElementById("dogprofile");


// Kollar ifall profildata finns. lägger upp profilknapp.
// lägger också upp profildata ifall man är på profilsidan. lägg till antal inlägg?
console.log("Har profildata laddats up? " + datan);
if (datan !== null) {
  profileLink.style.display = "flex";
  profileLink.setAttribute("src", datan.profileDogPic)
  ctaKnappen.style.display = "none";

  mottagaren.innerHTML = `
  <dl>
    <dt>Namn:</dt>
    <dd>${datan.firstName} ${datan.lastName} <input type="submit" value="Ändra"></dd>
    <dt>Hemstad:</dt>
    <dd>${datan.hometown} <input type="submit" value="Ändra"></dd>
    <dt>Owner of x dogs:</dt>
    <dd>${datan.nrofdogs} <input type="submit" value="Ändra"></dd>
  </dl>
  `
} else {
  mottagaren.innerHTML = ''
}

// REFRESH knappen.
refreshKnappen.addEventListener('click', () => {
  getDog();
  hundbilden = JSON.parse(sessionStorage.getItem('dogpicture'));
  hundelement.setAttribute('src', hundbilden);
})

// lyssna efter att allt i <form> är ifyllt och kryssat. Kan utökas.
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



// onsubmit test funkade ej
/* const myFunction = function () {
  sessionStorage.setItem('info', JSON.stringify({
    firstName: `${FnamnInfo.value}`,
    lastName: `${EnamnInfo.value}`,
    hometown: `${homeTown.value}`,
    nrofdogs: `${nrOfDogs.value}`,
    profileDogPic: `${hundbilden}`
  }))
  console.log("körs cityPoster? om denna syns, ja!")
  cityPoster();
} */

// själva knappen: submitKnappen
// själva formuläret: formen
// formen.addEventListener('click', () => {

// Lagra data från formulär. lägg upp data i Cities.
/* formen.addEventListener('submit', event => {
  sessionStorage.setItem('info', JSON.stringify({
    firstName: `${FnamnInfo.value}`,
    lastName: `${EnamnInfo.value}`,
    hometown: `${homeTown.value}`,
    nrofdogs: `${nrOfDogs.value}`,
    profileDogPic: `${hundbilden}`
  }))
  // event.preventDefault();
  // let cityStad = homeTown.value;
  // let cityNum = nrOfDogs.value;

  // fetch('https://avancera.app/cities/', {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({ name: `${cityStad}`, population: Number(`${cityNum}`) })
  // })

  // Denna körs aldrig med "submit". be om hjälp.
  // console.log("körs cityPoster? om denna syns, ja!")
  // cityPoster();
}); */

// Funktion som lägger stad och nummer i cities-tjänsten.
function cityPoster() {
  console.log("TITTA HIT, cityposter körs");

  sessionStorage.setItem('info', JSON.stringify({
    firstName: `${FnamnInfo.value}`,
    lastName: `${EnamnInfo.value}`,
    hometown: `${homeTown.value}`,
    nrofdogs: `${nrOfDogs.value}`,
    profileDogPic: `${hundbilden}`
  }))
  // let hemstaden = JSON.parse(sessionStorage.getItem('info')).hometown;
  // let antalhund = JSON.parse(sessionStorage.getItem('info')).nrofdogs;
  // console.log(`Finns Hometown? ${hemstaden}`);
  // console.log(`Finns antalhund? ${antalhund}`);
  let cityStad = homeTown.value;
  let cityNum = nrOfDogs.value;

  fetch('https://avancera.app/cities/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: `${cityStad}`, population: Number(`${cityNum}`) })
  }).then(response => console.log(response))

  setInterval(document.location.reload(), 6000);

}

// själva knappen: submitKnappen
// själva formuläret: formen

// formen.addEventListener("submit", cityPoster());

// Funkar inte. Be om hjälp.
// formen.addEventListener("submit", () => {
//   cityPoster();
// })
