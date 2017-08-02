// Define map
const myMap = L.map('map');

// Define icon
const coffeeCup = L.icon({
  iconUrl: 'https://taniarascia.github.io/coffee/images/coffee.png',
  shadowUrl: '',
  iconSize: [35, 65]
});

// Define basemap
var myBasemap = L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
  maxZoom: 20,
  attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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

  const rogersPark = data.cafes.filter(function (cafe) {
    // Get the length of as many responses equal a neighborhood name
    return cafe.neighborhood === 'Rogers Park'
  }).length;

  const edgewater = data.cafes.filter(function (cafe) {
    // Get the length of as many responses equal a neighborhood name
    return cafe.neighborhood === 'Edgewater'
  }).length;

  const andersonville = data.cafes.filter(function (cafe) {
    // Get the length of as many responses equal a neighborhood name
    return cafe.neighborhood === 'Andersonville'
  }).length;

  const ravenswood = data.cafes.filter(function (cafe) {
    // Get the length of as many responses equal a neighborhood name
    return cafe.neighborhood === 'Ravenswood'
  }).length;

  const uptown = data.cafes.filter(function (cafe) {
    // Get the length of as many responses equal a neighborhood name
    return cafe.neighborhood === 'Uptown'
  }).length;

  const wickerPark = data.cafes.filter(function (cafe) {
    // Get the length of as many responses equal a neighborhood name
    return cafe.neighborhood === 'Wicker Park'
  }).length;

  const bucktown = data.cafes.filter(function (cafe) {
    // Get the length of as many responses equal a neighborhood name
    return cafe.neighborhood === 'Bucktown'
  }).length;

  console.log(rogersPark);

  var hoodsArray = [
    "Rogers Park",
    "Edgewater",
    "Andersonville",
    "Ravenswood",
    "Uptown",
    "Wicker Park",
    "Bucktown",
  ];

  // Fix this later
  // https://stackoverflow.com/questions/12712056/count-occurences-of-each-item-in-json

  const title = document.getElementById('neighborhoods');
  let p = document.createElement("p");

  for (var i = 0; i < hoodsArray.length; i += 1) {
    const p = document.createElement("p");
    p.innerHTML = hoodsArray[i];
    title.appendChild(p);
  }
}

request.send();