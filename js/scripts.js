var myMap = L.map('map');

var coffeeCup = L.icon({
  iconUrl: './images/coffee.png',
  shadowUrl: '',
  iconSize: [35, 65]
});

var myBasemap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
  maxZoom: 16
});

myBasemap.addTo(myMap);

myMap.setView([41.939948, -87.650673], 12);

var everybodysCoffee = L.marker([41.965053, -87.653876], {
  icon: coffeeCup
}).addTo(myMap);


var elMeson = L.marker([42.002439, -87.672339], {
  icon: coffeeCup
}).bindPopup(`
<h2>El Meson</h2>
<p><b>Neighborhood:</b> Roger's Park</p>
<p><b>Ambiance:</b> Great!</p>
<p><b>Flavor:</b> Great!</p>
`).openPopup().addTo(myMap);

var metropolisCafe = L.marker([41.994363, -87.657267], {
  icon: coffeeCup
}).addTo(myMap);

var wormhole = L.marker([41.908415, -87.674605], {
  icon: coffeeCup
}).addTo(myMap);

var ipsento = L.marker([41.918639, -87.687247], {
  icon: coffeeCup
}).addTo(myMap);

var twoHeartedQueen = L.marker([41.943305, -87.659280], {
  icon: coffeeCup
}).addTo(myMap);

var zanzibar = L.marker([41.983792, -87.656773], {
  icon: coffeeCup
}).addTo(myMap);

var kopiTravelersCafe = L.marker([41.978614, -87.668150], {
  icon: coffeeCup
}).addTo(myMap);

var oromoCafe = L.marker([41.966873, -87.687116], {
  icon: coffeeCup
}).addTo(myMap);

var laColombe = L.marker([41.884110, -87.651949], {
  icon: coffeeCup
}).addTo(myMap);

var growlingRabbit = L.marker([41.990243, -87.660534], {
  icon: coffeeCup
}).addTo(myMap);

var maidenVoyage = L.marker([41.961729, -87.670624], {
  icon: coffeeCup
}).addTo(myMap);

var satelliteCafe = L.marker([41.961898, -87.654172], {
  icon: coffeeCup
}).addTo(myMap);