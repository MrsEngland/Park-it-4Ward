// HTML script
// <p><button onclick="geoFindMe()">Show my location</button></p>
// <div id="out"></div>


// window.onload = function() {
//     var startPos;
//     navigator.geolocation.getCurrentPosition(function(position) {
//         console.log(position);
//   };
// };

function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}
// If the position data changes (either by device movement or if more accurate geo information arrives), 
// you can set up a callback function that is called with that updated position information. This is done 
// using the watchPosition() function, which has the same input parameters as getCurrentPosition(). 
// The callback function is called multiple times, allowing the browser to either update your location as
 // you move, or provide a more accurate location as different techniques are used to geolocate you. 
  var watchID = navigator.geolocation.watchPosition (
    function change(position) {
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude 
               + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
});

// the clearWatch() method to stop watching the user's location.

navigator.geolocation.clearWatch(watchID);