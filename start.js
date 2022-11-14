
// Selector för alla BuzzWords på start-sidan.
const texterna = document.querySelectorAll("#sloganet");

// Selecta namn under BuzzWords. (Som skapas av JS, inte HTML).
// var dummyNames = document.querySelectorAll("#namesake");
// var spanNames = [];

// Variabler menat åt statistiken.
// Deklarerade som "var" för att jag använder dem inan/utanför funktionerna.
var ageLabels = ["20Y olds", "30Y olds", "40Y olds", "50Y olds", "60Y olds+"];
var age20 = 0;
var age30 = 0;
var age40 = 0;
var age50 = 0;
var age60 = 0;
var agesNum = [];

// Funktion & forEach loop som populattar <span> m fejk-namn.
// const getName = async function () {
//   const nameData = await fetch('https://randomuser.me/api/?results=50&inc=name', {
//     headers: {
//       "Accept": "application/json"
//     }
//   });
//   const nameObj = await nameData.json();
//   for (let i = 0; i < 50; i++) {
//     spanNames.push(nameObj.results[i].name.first)
//     spanNames.push(nameObj.results[i].name.last)
//   }
//   return nameObj.results[i].name.first + " " + nameObj.results[i].name.last

//   /*   Noden.innerHTML += nameObj.results[0].name.first;
//     Noden.innerHTML += " ";
//     Noden.innerHTML += nameObj.results[0].name.last; */
// }

/* fetch("https://randomuser.me/api/?results=50&inc=name")
.then(promise => promise.json())
.then(resultatet => {
  var spanNames = [];
  for (let i = 0; i < 50; i++) {
    spanNames.push(resultatet.results[i].name.first)
    spanNames.push(resultatet.results[i].name.last)
  }
}) */

// getName()
// console.log(spanNames);

/* setInterval(() => {
  console.log("körs denna?")
  dummyNames.forEach(namn => {
    namn.innerHTML += `<br>${getName(namn)}`;
  });
}, 9500); */

/* fetch("https://my.api.mockaroo.com/data.json", {
  headers: {
    "Accept": "application/json",
    "X-API-Key": "d04bfc30"
  }
}).then(........) */

fetch("testData.csv")
  .then(response => response.text())
  .then(data => {
    let grejer = [];
    let inlägg = [];
    grejer = data.split("\n").slice(1)
    grejer.forEach(grej => {
      kolumn = grej.split(",");
      // Array med alla slogans
      inlägg.push(kolumn[4])
    })

    setInterval(() => {
      // Välj slump siffra och använd som index åt att plocka BuzzWord.
      let slump = parseInt((Math.random() * 90))
      console.log(slump)
      console.log("ändras inlägg?");
      texterna.forEach(sake => {
        sake.innerHTML = `"${inlägg[slump]}"`;
        slump++
      })
    }, 9500);
  });





/* Statistiken */
// Data hämtad/gjord i Mockaroo
// Kan fetcha men använder CSV just nu. får error 429 när jag fetchar.

// Hämtar Integer-ålder & Boolean-medlem. Plussar++ data menat åt BARS i Chart.
// Till sist skapas new Chart("myChart", ...

const getTestData = async function () {
  const datan = await fetch("testData.csv");
  const löftet = await datan.text();

  const table = löftet.split("\n").slice(1);
  let members = [];
  let ages = [];
  table.forEach(rad => {
    kolumn = rad.split(",");
    ages.push(Number(kolumn[7]));
    members.push(kolumn[3])
  });

  for (let i = 0; i < 100; i++) {
    if (ages[i] < 30 && members[i] == "true") {
      age20++
    }
    else if (ages[i] >= 30 && ages[i] < 40 && members[i] == "true") {
      age30++
    }
    else if (ages[i] >= 40 && ages[i] < 50 && members[i] == "true") {
      age40++
    }
    else if (ages[i] >= 50 && ages[i] < 60 && members[i] == "true") {
      age50++
    }
    else if (ages[i] > 60 && members[i] == "true") {
      age60++
    }
  }
  agesNum.push(age20);
  agesNum.push(age30);
  agesNum.push(age40);
  agesNum.push(age50);
  agesNum.push(age60);
  console.log(agesNum);

  var xValues = ageLabels;
  var yValues = agesNum;
  var barColors = ["red", "green", "blue", "orange", "brown"];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Sample of members across different ages groups"
      },
      scales: {
        yAxes: [{ ticks: { min: 0, max: 20 } }],
      }
    }
  });
}

getTestData();





/*
const getMock = async function () {
  const datan = await fetch("https://my.api.mockaroo.com/data.json", {
    headers: {
      "Accept": "application/json",
      "X-API-Key": "d04bfc30"
    }
  });
  const löftet = await datan.text();

  const table = löftet.split("\n").slice(1);

  let listan = [];

  table.forEach(rad => {
    kolumn = rad.split(",");
    listan.push(kolumn[4]);

  })
  let publicera = listan.slice(0, 100)
}
getMock(); */
