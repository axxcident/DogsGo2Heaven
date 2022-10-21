
// Vår funktion för text. (och/eller url text)
function showMessage(meddelande) {
  document.getElementById('randomDog').textContent = meddelande;
}

// let hund = "Hey now, you're a rockstar";
// let hund;
// fetch("http://dog-api.kinduff.com/api/facts", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
//   .then(responsen => { return responsen.json() })
//   .then(data => { console.log(data) })

// showMessage(hund);
// let dog_api = "https://dog-api.kinduff.com/api/facts";


let quackapi = "https://random-d.uk/api/v2/random";

/* let response = fetch(quackapi);
console.log("denna får vi som svar....... " + response) */

/* if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let jsoncontainer = response.json();
} else {
  alert("HTTP-Error: " + response.status);
} */


let nybild;

fetch(quackapi, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: "no-cors"
}).then(responsen => { return responsen.json })
  .then(data => { nybild = data.url });


getComputedStyle(document.documentElement)
  .getPropertyValue('--quack-url'); // #999999

document.documentElement.style
  .setProperty('--quack-url', nybild);




// MODE:NO-CORS försök
/* fetch(dog_api, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: "no-cors"
}).then(responsen => { return responsen.json })
.then(data => { console.log(data) }) */



// ASYNC kod försök
/* (async () => {
  const response = await fetch(dog_api, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: "no-cors"
  });
  const data = await response.json();
  console.log(data);
})() */
