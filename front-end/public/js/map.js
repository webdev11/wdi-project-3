// If you're adding a number of markers, you may want to drop them on the map
// consecutively rather than all at once. This example shows how to use
// window.setTimeout() to space your markers' animation.

var cities = [
  {name: "london", lat: 51.507351, lng: -0.127758},
  {name: "manchester", lat: 53.480759, lng: -2.242631},
  {name: "birmingham", lat: 52.497, lng: 13.396}
];

var markers = [];
var map;
var choice;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: choice
  });
}

function drop() {
  clearMarkers();
  for (var i = 0; i < cities.length; i++) {
    addMarkerWithTimeout(cities[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

