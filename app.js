

function showMessage(meddelande) {
  document.getElementById('randomDog').textContent = meddelande;
}

let hund = "Hey now, you're a rockstar";
// showMessage(hund);

// let hund;

// fetch("http://dog-api.kinduff.com/api/facts", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
//   .then(responsen => { return responsen.json() })
//   .then(data => { console.log(data) })

showMessage(hund);

let dog_api = "https://dog-api.kinduff.com/api/facts";
/*
(async () => {
  const response = await fetch(dog_api, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: "no-cors"
  });
  const data = await response.json();
  console.log(data);
})()
*/

let response = fetch(dog_api);
console.log("denna får vi som svar....... " + response)

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = response.json();
} else {
  alert("HTTP-Error: " + response.status);
}

/* fetch(dog_api, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: "no-cors"
}).then(responsen => { return responsen.json })
.then(data => { console.log(data) }) */


/* (async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  console.log(data)
})() */
