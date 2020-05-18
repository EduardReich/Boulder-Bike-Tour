async function getData() {
  const response = await fetch('/riders/locations');
  return response.json();
}

export function sendData() {
  const riders = {
    latitude: [],
    longitude: [],
    first: [],
    last: []
  }

  getData().then(
    (data) => {      
      const result = data;      
      for(let i = 0; i < result.length; i++) {
        riders.latitude.push(result[i].latitude);
        riders.longitude.push(result[i].longitude);
        riders.first.push(result[i].first_name);
        riders.last.push(result[i].last_name);    
      }
    })  
  return riders;  
}



