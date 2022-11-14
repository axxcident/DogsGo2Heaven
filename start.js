
const texterna = document.querySelectorAll("#sloganet");

fetch("https://my.api.mockaroo.com/data.json", {
  headers: {
    "Accept": "application/json",
    "X-API-Key": "d04bfc30"
  }
}).then(response => response.text()).then(data => {
  let grejer = [];
  let inlägg = [];
  grejer = data.split("\n").slice(1)
  grejer.forEach(grej => {
    kolumn = grej.split(",");
    // console.log(kolumn[4])
    inlägg.push(kolumn[4])
  })
  setInterval(() => {
    // let index = 0;
    let slump = parseInt((Math.random() * 90))
    console.log(slump)
    console.log("ändras inlägg?");
    texterna.forEach(sake => {
      sake.innerHTML = inlägg[slump];
      slump++
    })
  }, 8000);
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
