
// Set up our connection information
var connection = require("./connection");
 
//   ???? this script needs to live somewhere to be called by this controller?????
//     </script>
//   </head>
//   <body>
//     <div id="map"></div>
//     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyApq-fBkuFCDJKmSz7KEPV-Tc9ROcTPYpU&libraries=places&callback=initMap" async defer></script>
//   </body>
// </html>
 

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM parkinglots", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


function initMap() {
  // google map centered at City Center Bldg.
  var myLatLng = {lat: 35.228440, lng: -80.834919};

    // create a map centered on charlotte
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 15
    });

  // create markers for each result with information called from sql database
  function createMarkers(result) {
    // console.log(result); 
    for (var i=0; i < result.length; i++) {

      var latLng = new google.maps.LatLng (result[i].lot_latitude, result[i].lot_longitude); 

      var marker = new google.maps.Marker({
        position: myLatlng,
        title: result [i].lot_name,
        customInfo: {
          name: result[i].lot_name,
          address: result[i].lot_address,
          available: result[i].spot_id
        };
      });

// To add the marker to the map, call setMap();
marker.setMap(map);

createMarkers(result);
    };
  };
};

// on click sends an alert for the custom information assigned to each lot name
// need to create a table or display to show this information
// then clicking on this will take you to the spot????
google.maps.event.addListener(marker, 'click', function() {
    alert(this.customInfo);
});


