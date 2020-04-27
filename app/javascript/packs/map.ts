import {Loader, LoaderOptions} from 'google-maps';
// or const {Loader} = require('google-maps'); without typescript


const options: LoaderOptions = {/* todo */};
const loader = new Loader('api', options);


function initGmaps() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.012394, lng: -105.260928},
    zoom: 13,
  });

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/cycling.png';

// Create markers.

  for (var i = 0; i < locations.latitude.length; i++) {
    var marker = new google.maps.Marker({
      position: {lat: locations.latitude[i], lng: locations.longitude[i]},
      icon: iconBase,
      map: map
    });
  };
}

if (locations.latitude !== undefined && window.google == undefined) {
  loader.load().then(function (google) {
    initGmaps();
  } 
} else {
  location.reload(true);
}




<<<<<<< HEAD
=======
      // Create markers.
      for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
          position: features[i].position,
          icon: icons[features[i].type].icon,
          map: map
        });
      };
});
>>>>>>> 228c80310fa799c1b2178e09ed92523cd8726c50
