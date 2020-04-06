//APIkey: AIzaSyDyTSBeiR8Vb1UgwDKcnn4EbJPji7U
var map;
function initMap() {
  map = new google.maps.Map(
          document.getElementById('map'),
          {center: new google.maps.LatLng(40.012394, -105.260928), zoom: 13});


  var iconBase =
          'https://maps.google.com/mapfiles/kml/shapes/';

      var icons = {
        cyclcing: {
          icon: iconBase + 'cycling.png'
        }
      };        

      var features = [
        {
          position: new google.maps.LatLng(40.00, -105.35),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(39.95, -105.24),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.06, -105.26),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.03, -105.23),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.04, -105.23),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(39.96, -105.22),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(39.98, -105.21),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.00, -105.25),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.02, -105.30),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.01, -105.20),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(39.98, -105.24),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(39.99, -105.25),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.01, -105.29),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(39.97, -105.27),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(39.97, -105.33),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.00, -105.29),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.05, -105.30),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.00, -105.25),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.05, -105.26),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(39.99, -105.31),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(40.01, -105.32),
          type: 'cyclcing'
        }
      ];
      

      // Create markers.
      for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
          position: features[i].position,
          icon: icons[features[i].type].icon,
          map: map
        });
      };


}
