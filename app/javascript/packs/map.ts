import {Loader, LoaderOptions} from 'google-maps';
// or const {Loader} = require('google-maps'); without typescript


const options: LoaderOptions = {/* todo */};
const loader = new Loader('AIzaSyDyTSBeiR8Vb1UgRpGawDKcnn4EbJPji7U', options);


function initGmaps() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.012394, lng: -105.260928},
    zoom: 13,
  });

  var infowindow =  new google.maps.InfoWindow({
    content: ""
  });

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/cycling.png';

// Create markers.

  for (var i = 0; i < locations.latitude.length; i++) {
    var marker = new google.maps.Marker({
      position: {lat: locations.latitude[i], lng: locations.longitude[i]},
      icon: iconBase,
      map: map
    });
    var contentString = 
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">'+names.first[i] + ' ' + names.last[i]'</h2>'+
    '</div>';

    bindInfoWindow(marker, map, infowindow, contentString);
  };
 
}

function bindInfoWindow(marker, map, infowindow, description) {
  marker.addListener('click', function() {
      infowindow.setContent(description);
      infowindow.open(map, this);
  });
}

if (locations.latitude !== undefined && window.google == undefined) {
  loader.load().then(function (google) {
    initGmaps();
  } 
} else {
  location.reload(true);
}




