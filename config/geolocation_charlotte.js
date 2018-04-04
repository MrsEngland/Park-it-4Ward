
// center on charlotte
function initialize() {
  var charlotte = new google.maps.LatLng(-35.2271, 80.8431);

  var map = new google.maps.Map(document.getElementById('map'), {
    center: charlotte,
    zoom: 15,
    scrollwheel: true
  });
  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  // Specify location, radius and place types for your Places API search.
  var request = {
    location: charlotte,
    radius: '100',
    types: ['park', 'parking']
  };

  // Search radius for parking places
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // If the request succeeds, draw the place location on
        // the map as a marker, and register an event to handle a
        // click on the marker.
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
      }
    }
  });

// if the user clicks on a marker
  document.getElementById('submit').addEventListener('click', function() {
    placeDetailsByPlaceId(service, map, infowindow);
  });


function placeDetailsByPlaceId(service, map, infowindow) {
  // Create and send the request to obtain details for a specific place,
  // using its Place ID.
  var request = {
    placeId: document.getElementById('place-id').value
  };

  service.getDetails(request, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      // If the request succeeds, draw the place location on the map
      // as a marker, and register an event to handle a click on the marker.
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
          'Place ID: ' + place.place_id + '<br>' +
          place.formatted_address + '</div>');
        infowindow.open(map, this);
      });

      map.panTo(place.geometry.location);
    }
  });
};
};
// Run the initialize function when the window has finished loading.
google.maps.event.addDomListener(window, 'load', initialize);


  
