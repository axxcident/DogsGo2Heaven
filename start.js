
const texterna = document.querySelectorAll("#sloganet");

var ageLabels = ["20Y olds", "30Y olds", "40Y olds", "50Y olds", "60Y olds+"];
var age20 = 0;
var age30 = 0;
var age40 = 0;
var age50 = 0;
var age60 = 0;
var agesNum = [];

fetch("https://my.api.mockaroo.com/data.json", {
  headers: {
    "Accept": "application/json",
    "X-API-Key": "d04bfc30"
  }
}).then(response => response.text()).then(data => {
  let grejer = [];
  let inlägg = [];
  let ages = [];
  grejer = data.split("\n").slice(1)
  grejer.forEach(grej => {
    kolumn = grej.split(",");
    // Array med alla slogans
    inlägg.push(kolumn[4])
    //Array med alla åldrar - KOLLA OM DENNA FUNKAR SENARE
    ages.push(Number(kolumn[7]))
  })
  ages.forEach(age => {
    if (age < 30) {
      age20++
    }
    else if (age >= 30 && age < 40) {
      age30++
    }
    else if (age >= 40 && age < 50) {
      age40++
    }
    else if (age >= 50 && age < 60) {
      age50++
    }
    else if (age > 60) {
      age60++
    }
  })
  agesNum.push(age20);
  agesNum.push(age30);
  agesNum.push(age40);
  agesNum.push(age50);
  agesNum.push(age60);
  setInterval(() => {
    // let index = 0;
    let slump = parseInt((Math.random() * 90))
    console.log(slump)
    console.log("ändras inlägg?");
    texterna.forEach(sake => {
      sake.innerHTML = inlägg[slump];
      slump++
    })
  }, 7900);
  console.log(agesNum)
})


/* Statistiken */

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
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
      text: "World Wine Production 2018"
    }
  }
});

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
