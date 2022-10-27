
// Vår funktion för text. (och/eller url text) KNSK TA BORT DENNA FUNKTION
/* function showMessage(meddelande) {
  document.getElementById('randomDog').textContent = meddelande;
}
let inslag = "woof woof";
showMessage(inslag); */


let hundelement = document.querySelector('#dogHome')

console.log(hundelement.getAttribute('src'))

// Fetching image or gif.
fetch('https://random.dog/woof.json')
  .then(response => response.json())
  .then(result => {
    hundelement.setAttribute('src', result.url)
  });

console.log(hundelement.getAttribute('src'))
