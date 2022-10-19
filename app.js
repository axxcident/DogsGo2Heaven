

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




// Funkar ej pga CORS....



/* fetch('http://dog-api.kinduff.com/api/facts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(responsen => { return responsen.json() })
  .then(data => { console.log(data) }) */
