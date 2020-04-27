let countDownDate = new Date("Apr 1, 2021 00:00:00").getTime();

state = {
  now: []
}

const counter = document.getElementById('counter');

function startTimer(display) {
  
  setInterval(function () {

    fetch('/time/index')
    .then(response => response.json())
    .then((data) => {
      state.now = new Date(data);
    })

    let distance = countDownDate - state.now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    display.innerHTML = "<div class='text-center w-25'><ul class='list-group-flush'><li class='list-group-item bg-transparent'>" + days + " Days </li><li class='list-group-item bg-transparent'>" + hours + " Hours </li><li class='list-group-item bg-transparent'>"
      + minutes + " Minutes </li><li class='list-group-item bg-transparent'>" + seconds + " Seconds remaining</li><li class='list-group-item bg-transparent'> 2021/01/04</li></ul></div>";

    if (distance < 0) {
      clearInterval(x);
      display.innerHTML = "EXPIRED";
    }
  }, 1000);

}

startTimer(counter);