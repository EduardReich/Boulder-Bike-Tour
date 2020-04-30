locations = {
  latitude: [],
  longitude: []
}

names = {
  first: [],
  last: []
}


function getData() {

  fetch('/riders/locations')
  .then(response => response.json())
  .then((data) => {
    const result = data;
    ridersLatitude = [];
    ridersLongitude = [];
    ridersFirst = [];
    ridersLast = [];
    for(let i = 0; i < result.length; i++) {
      ridersLatitude.push(result[i].latitude);
      ridersLongitude.push(result[i].longitude);
      ridersFirst.push(result[i].first_name);
      ridersLast.push(result[i].last_name);
    }
    locations.latitude = ridersLatitude;
    locations.longitude = ridersLongitude;
    names.first = ridersFirst;
    names.last = ridersLast;
  });
}

getData();