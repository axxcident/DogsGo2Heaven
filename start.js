/*
1. Selectorer för Buzzwords & statistik.
2. Fetch åt CSV fil och/eller API.
  - Lägger upp Buzzwords på Start-sidan.
3. Funktion/fetch som hämtar statistik data och populattar statistik.
*/

// 1.

// Selector för alla BuzzWords på start-sidan.
const texterna = document.querySelectorAll("#sloganet");

// Variabler menat åt statistiken.
// Deklarerade som "var" för att jag använder dem inan/utanför funktionerna.
var ageLabels = ["20Y olds", "30Y olds", "40Y olds", "50Y olds", "60Y olds+"];
var age20 = 0;
var age30 = 0;
var age40 = 0;
var age50 = 0;
var age60 = 0;
var agesNum = [];

// 2.

// CSV fetchen eller API fetchen. Samma data oavsett.
/* fetch("testData.csv")
  .then(response => response.text())
  .then(data => {.... */


/* fetch("https://my.api.mockaroo.com/data.json", {
  headers: {
    "Accept": "application/json",
    "X-API-Key": "d04bfc30"
  }
}).then(........) */

fetch("https://my.api.mockaroo.com/data.json", {
  headers: {
    "Accept": "application/json",
    "X-API-Key": "d04bfc30"
  }
}).then(response => response.text())
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

// 3.

/* Statistiken */
// Data hämtad/gjord i Mockaroo
// ifall Mockaroo API inte funkar så använd CSV med samma data.
/*
  const datan = await fetch("testData.csv");
 */
// Hämtar Integer-ålder & Boolean-medlem. Plussar++ "age" ifall villkor uppfylls.
// age används sedan till Chart.

const getTestData = async function () {
  const datan = await fetch("https://my.api.mockaroo.com/data.json", {
    headers: {
      "Accept": "application/json",
      "X-API-Key": "d04bfc30"
    }
  });
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
        text: "Sample of members ages in ADG2H"
      },
      scales: {
        yAxes: [{ ticks: { min: 0, max: 20 } }],
      }
    }
  });
}

getTestData();
