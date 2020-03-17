var tester = document.getElementById("test");
let apiRequest = new XMLHttpRequest();
const apiKey = "d9f919603b3f6e079ee3a340db3dbb15";

window.addEventListener("load", () => {
  apiRequest.open("GET", "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+ apiKey +"&tags=bikerace%2C+boulderbiketour&per_page=500&format=json&nojsoncallback=1");
  apiRequest.send();
});

apiRequest.onreadystatechange = () => {
  if(apiRequest.status === 200) {  
    var response = JSON.parse(apiRequest.response);
    var photos = response.photos.photo;
    console.log(photos);
    
    for (let i of photos) {
      var pictures = "https://farm" + i.farm +".staticflickr.com/" + i.server + "/" + i.id + "_" + i.secret + ".jpg";
      tester.innerHTML += "<img src='" + pictures + "' ><br>"; 
    }  
  }else {
    console.log("not ready");
  }
};