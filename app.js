

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

let dog_api = "http://dog-api.kinduff.com/api/facts";

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
