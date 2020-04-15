import {Loader, LoaderOptions} from 'google-maps';
// or const {Loader} = require('google-maps'); without typescript

const options: LoaderOptions = {/* todo */};
const loader = new Loader('api', options);


loader.load().then(function (google) {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.012394, lng: -105.260928},
        zoom: 13,
    });

    var iconBase =
          'https://maps.google.com/mapfiles/kml/shapes/';

      var icons = {
        cyclcing: {
          icon: iconBase + 'cycling.png'
        }
      };

      var features = [
        {
          position: new google.maps.LatLng(state.locations[0][0], state.locations[1][0]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][1], state.locations[1][1]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][2], state.locations[1][2]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][3], state.locations[1][3]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][4], state.locations[1][4]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][5], state.locations[1][5]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][6], state.locations[1][6]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][7], state.locations[1][7]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][8], state.locations[1][8]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][9], state.locations[1][9]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][10], state.locations[1][10]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][11], state.locations[1][11]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][12], state.locations[1][12]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][13], state.locations[1][13]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][14], state.locations[1][14]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][15], state.locations[1][15]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][16], state.locations[1][16]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][17], state.locations[1][17]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][18], state.locations[1][18]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][19], state.locations[1][19]),
          type: 'cyclcing'
        }, {
          position: new google.maps.LatLng(state.locations[0][20], state.locations[1][20]),
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
});
