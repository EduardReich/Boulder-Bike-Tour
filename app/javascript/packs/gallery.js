const apiKey = "d9f919603b3f6e079ee3a340db3dbb15";
const loadMoreBtn = document.getElementById("loadMoreBtn");
let photosContainer = document.getElementById("photosContainer");
let page = 2;

let state = {
  page : 1
}

function getPhotos(page) {
  fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+ apiKey +'&tags=bikerace%2C+boulderbiketour&per_page=40&page='+page+'&format=json&nojsoncallback=1')
	  .then(response => response.json())
	  .then((data) => {
	    let result = data.photos.photo;
      let endResult = [];
      for(let i of result) {
        let pictures = "https://farm" + i.farm +".staticflickr.com/" + i.server + "/" + i.id + "_" + i.secret + ".jpg";
        endResult.push("<img src='" + pictures + "' >");
      }     
      photosContainer.innerHTML += endResult;
    });
}    

getPhotos(state.page);

loadMoreBtn.addEventListener("click", function() {
  state.page++;
  getPhotos(state.page);
});
