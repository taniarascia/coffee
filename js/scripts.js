// Define map
const myMap = L.map('map');

// Define icon
const coffeeCup = L.icon({
  iconUrl: 'https://taniarascia.github.io/coffee/images/coffee.png',
  shadowUrl: '',
  iconSize: [35, 65]
});

// Define basemap
var myBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
  maxZoom: 16
});
// Add basemap to map id
myBasemap.addTo(myMap);

// Set center of the map
myMap.setView([41.939948, -87.650673], 12);

// Make an XMLHttpRequest to the JSON data
const request = new XMLHttpRequest();
request.open('GET', 'https://taniarascia.github.io/coffee/js/map.json', true);
request.onload = function () {
  // begin accessing JSON data here
  const data = JSON.parse(this.response);

  let cafes = data.cafes.map(function (cafe) {
    L.marker([cafe.lat, cafe.long], {
      icon: coffeeCup
    }).bindPopup(`
        <h2>${cafe.name}</h2>
        <p><b>Neighborhood:</b> ${cafe.neighborhood}</p>
        <p><b>Ambiance:</b> ${cafe.ambiance}</p>
        <p><b>Flavor:</b> ${cafe.flavor}</p>
        <p><b>Comments:</b> ${cafe.comments}</p>
    `).openPopup().addTo(myMap);
  });

  // Is there a better way to do this?

  const rogersPark = data.cafes.filter(function (cafe) {
    return cafe.neighborhood === 'Rogers Park'
  }).length;

  const edgewater = data.cafes.filter(function (cafe) {
    return cafe.neighborhood === 'Edgewater'
  }).length;

  const andersonville = data.cafes.filter(function (cafe) {
    return cafe.neighborhood === 'Andersonville'
  }).length;

  const ravenswood = data.cafes.filter(function (cafe) {
    return cafe.neighborhood === 'Ravenswood'
  }).length;

  const uptown = data.cafes.filter(function (cafe) {
    return cafe.neighborhood === 'Uptown'
  }).length;
  
  const lakeview = data.cafes.filter(function (cafe) {
    return cafe.neighborhood === 'Lakeview'
  }).length;

  const wickerPark = data.cafes.filter(function (cafe) {
    return cafe.neighborhood === 'Wicker Park'
  }).length;

  const bucktown = data.cafes.filter(function (cafe) {
    return cafe.neighborhood === 'Bucktown'
  }).length;

  // Fix this later
  // https://stackoverflow.com/questions/12712056/count-occurences-of-each-item-in-json

  const title = document.getElementById('neighborhoods');
  let h3 = document.createElement("h3");
  h3.innerHTML = "Neighborhood Count";
  title.appendChild(h3);
  let p = document.createElement("p");

  const hoodsArray = [{
      name: "Rogers Park",
      number: rogersPark,
    },
    {
      name: "Edgewater",
      number: edgewater,
    },
    {
      name: "Andersonville",
      number: andersonville,
    },
    {
      name: "Ravenswood",
      number: ravenswood,
    },
    {
      name: "Uptown",
      number: uptown,
    },
    {
      name: "Lakeview",
      number: lakeview,
    },
    {
      name: "Bucktown",
      number: bucktown,
    },
    {
      name: "Wicker Park",
      number: wickerPark,
    },

  ];

  for (hoods of hoodsArray) {
    const p = document.createElement("p");
    p.innerHTML = `<b>${hoods.name}</b> `;
    p.innerHTML += hoods.number;
    title.appendChild(p);
  }
}

request.send();