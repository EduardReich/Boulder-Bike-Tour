let countDownDate = new Date("Apr 1, 2021 00:00:00").getTime();

state = {
  now: [],
  rightNow: []
}
fetch('/time/index')
  .then(response => response.json())
  .then((data) => {
    state.now = Math.floor(data);     
  })

var counter = document.getElementById('counter');

function increment() {
  state.now += 1000;
}

setInterval(increment, 1000);


function startTimer(display) {

  setInterval(function () {
   
    let distance = countDownDate - state.now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    display.innerHTML = "<div class='text-center m-5'><ul class='list-group'><li class='list-group-item text-white bg-hunter-green'><b>"
      + days + "</b> Days </li><li class='list-group-item bg-morning-blue'><b>"
      + hours + "</b> Hours </li><li class='list-group-item text-white bg-hunter-green'><b>"
      + minutes + "</b> Minutes </li><li class='list-group-item bg-morning-blue'><b>" 
      + seconds + "</b> Seconds</li></ul></div>";

    if (distance < 0) {
      clearInterval(x);
      display.innerHTML = "EXPIRED";
    }
  }, 1000);

}

startTimer(counter);

