locations = {
  latitude: [],
  longitude: []
}


function getData() {

  fetch('/riders/locations')
  .then(response => response.json())
  .then((data) => {
    const result = data;
    ridersLatitude = [];
    riderLongitude = [];
    for(let i = 0; i < result.length; i++) {
      ridersLatitude.push(result[i].latitude);
      riderLongitude.push(result[i].longitude);
    }
    locations.latitude = ridersLatitude;
    locations.longitude = riderLongitude;

  });
}

getData();