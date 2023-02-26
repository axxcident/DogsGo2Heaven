/*
1. Selectorer och funktioner för att publicera inlägg:

1.1 Selectorer
1.2 Funktion som sparar en användares inlägg i Web Storage.
1.3 Kod som visar gamla inlägg på profilsidan.
1.4 Kod som publicerar inlägg i flödet.

2. Flödet & dummy-inlägg:

2.1 Funktion & forEach loop som populattar fejk-inlägg m skämt från API.
2.2 Funktion & forEach loop som populattar fejk-inlägg m fejk-namn från API.


3. Kod som lyssnar efter profil-data skapat i Modal/Form/cta för att bli medlem:

3.1 Funktion getDog() som hämtar en hundbild från API.
3.2 Selectorer för modal / form / profil.html.
3.3 Kod som kollar ifall profil data finns ifall TRUE:
  - Skapar profilknapp och byter ut den mot cta-knapp.
  - skapar / populattar profil.html med profildata + styling.

4. Profilsida:

4.1 Selectorer för profil- edit knappar.
4.2 Funktioner för profil- edit knappar.
    - addEventListener:s åt knappar.
    - Funktioner som ändrar Web storage profil-data.
    - funktioner som ändrar data i cities-tjänsten.

5. Modal/Form/cta

5.1 Refresh-knapp som hämtar ny hundbild som man kan välja som profilbild.
5.2 AddEventListeners som lyssnar efter att allt i <form> är ifyllt och kryssat.
5.3 Funktion i <form> som:
  - lägger upp värden i Web Storage.
  - lägger stad och nummer i cities-tjänsten.
*/

// 1.

// FÖr online bruk
import 'css/main.css';

// Selectorer som behövs för att publicera inlägg:
const formular = document.getElementById("post-formularet");
const pubKnappen = document.getElementById("post-publishing");
const flowet = document.querySelector("body > main > section");

// Funktion som kan spara ett eller flera inlägg i sessionStorage.
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
}

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

// Sparar användarID för inlägg i cities tjänsten.
if (datan !== null) {
  var IDet = "temporärt";
  fetch('https://avancera.app/cities/', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
    .then(data => IDet = data[data.length - 1].id);
  console.log("IDet fetchen har körts.")
  console.log(typeof IDet + IDet)
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
  // markerar/selectar översta noden m QS.
  let toppen = document.querySelector("body > main > section > article:nth-child(2)");
  // Slänger in nytt inlägg i flödet.
  flowet.insertBefore(nyArtikel, toppen);
});


// 2.

// Selecta <p>s för slumpskämt i flödet.
let dummyTexts = document.querySelectorAll("#jokeText");

// Funktion & forEach loop som populattar fejk-inlägg m skämt från getJoke().
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

// Selecta <h5>s för slumpnamn i flödet.
let dummyNames = document.querySelectorAll("#fejknamn");

// Funktion & forEach loop som populattar fejk-inlägg m fejk-namn.
const getName = async function (Noden) {
  const nameData = await fetch('https://randomuser.me/api/?inc=name', {
    headers: {
      "Accept": "application/json"
    }
  });
  const nameObj = await nameData.json();
  Noden.innerHTML = nameObj.results[0].name.first;
  Noden.innerHTML += " ";
  Noden.innerHTML += nameObj.results[0].name.last;
}
dummyNames.forEach(namn => {
  namn = getName(namn);
});

// 3.

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
// profilknappen på båda sidor. Ska byta ut CTA-knappen mot en profilknapp.
let profileLink = document.getElementById("profilelink");
let ctaKnappen = document.querySelector(".cta-knappen");

//Displaya bli medlem-inputs DENNA FÖR PROFIL-SIDAN.
let mottagaren = document.getElementById("form-tagaren");

// Kollar ifall profildata finns & lägger upp profilknapp ifall TRUE.
// lägger också upp profildata ifall man är på profilsidan.
console.log("Har profildata laddats up? " + datan);
if (datan !== null) {
  profileLink.style.display = "flex";
  profileLink.setAttribute("src", datan.profileDogPic)
  ctaKnappen.style.display = "none";

  mottagaren.innerHTML = `
  <dl>
    <dt>Namn:</dt>
    <dd>${datan.firstName}<input type="button" id="editName" value="Ändra" class="btn btn-primary"></dd>
    <dt>Efternamn:</dt>
    <dd>${datan.lastName}<input type="button" id="editLastName" value="Ändra" class="btn btn-primary"></dd>
    <dt>Hemstad:</dt>
    <dd>${datan.hometown}<input type="button" id="editHome" value="Ändra" class="btn btn-primary"></dd>
    <dt>Owner of x dogs:</dt>
    <dd>${datan.nrofdogs}<input type="button" id="editNrDogs" value="Ändra" class="btn btn-primary"></dd>
  </dl>
  `;
  // Fixar styling på profil-sidan.
  let grej = document.querySelectorAll("#form-tagaren > dl > dd");
  grej.forEach(dd => {
    dd.style.display = "flex";
  })
  grej.forEach(dd => {
    dd.style.justifyContent = "space-between"
  })
  grej.forEach(dd => {
    dd.style.alignItems = "center"
  })
  grej.forEach(dd => {
    dd.style.padding = "4px"
  })

} else {
  mottagaren.innerHTML = ''
}

//Selecta Edit-knappar.
let editNamn = document.getElementById("editName");
let editLastN = document.getElementById("editLastName");
let editHem = document.getElementById("editHome");
let editNrDogs = document.getElementById("editNrDogs");

// funktion för att ändra stad i Cities tjänsten
const homePUTen = async function (nytt) {
  await fetch(`https://avancera.app/cities/${IDet}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nytt,
      population: Number(`${datan.nrofdogs}`),
      id: `${IDet}`
    })
  })
}
// funktion för att ändra population i Cities tjänsten
const dogPUTen = async function (nytt) {
  await fetch(`https://avancera.app/cities/${IDet}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: `${datan.hometown}`,
      population: Number(nytt),
      id: `${IDet}`
    })
  })
}

// AddEventListener:s för Edit knapparna
editNamn.addEventListener("click", () => {
  let nytt = prompt("Vad heter du?");
  update({ firstName: nytt });
  setInterval(document.location.reload(), 3000);
})
editLastN.addEventListener("click", () => {
  let nytt = prompt("Vad är ditt efternamn?");
  update({ lastName: nytt });
  setInterval(document.location.reload(), 3000);
})
editHem.addEventListener("click", () => {
  let nytt = prompt("Vart bor du?");
  console.log(IDet);
  update({ hometown: nytt });
  homePUTen(nytt)
  alert("Uppdaterar..")
  document.location.reload()
})

editNrDogs.addEventListener("click", () => {
  let nytt = Number(prompt("Hur många hundar har du egentligen?"));
  update({ nrofdogs: nytt });
  dogPUTen(nytt)
  alert("Uppdaterar..")
  document.location.reload()
})

// Denna funktion är inte min kod. Lämnar denna kommentar åt dig Richard.
// En funktion som uppdaterar ett enskilt värde i Web Storage.
// https://stackoverflow.com/questions/54460512/update-value-on-sessionstorage-object
function update(value) {
  let prevData = JSON.parse(sessionStorage.getItem('info'));
  Object.keys(value).forEach(function (val, key) {
    prevData[val] = value[val];
  })
  sessionStorage.setItem('info', JSON.stringify(prevData));
}

// 5.

// REFRESH knappen i profil-Modalen. Hämtar ny hundbild som man kan välja som profilbild.
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

// Funktion i <form> som:
// 1. lägger upp värden i Web Storage.
// 2. lägger stad och nummer i cities-tjänsten.
async function cityPoster() {
  sessionStorage.setItem('info', JSON.stringify({
    firstName: `${FnamnInfo.value}`,
    lastName: `${EnamnInfo.value}`,
    hometown: `${homeTown.value}`,
    nrofdogs: `${nrOfDogs.value}`,
    profileDogPic: `${hundbilden}`
  }))
  let cityStad = homeTown.value;
  let cityNum = nrOfDogs.value;

  await fetch('https://avancera.app/cities/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: `${cityStad}`, population: Number(`${cityNum}`) })
  }).then(response => {
    if (response.status == 201) {
      setInterval(document.location.reload(), 6000)
    }
  })
}
