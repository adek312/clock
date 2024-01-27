const container = document.querySelector(".container");
const currentTimeContainer = document.querySelector(".currentTimeContainer");

const currentTimeClock = document.createElement("div");
const currentTimeText = document.createElement("div");
currentTimeText.innerHTML = "Current Time:";
currentTimeContainer.appendChild(currentTimeText);


function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let miliseconds = now.getMilliseconds();
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    miliseconds = miliseconds < 10 ? '00' + miliseconds : (miliseconds < 100 ? '0' + miliseconds : miliseconds);
  

    let time = hours + ':' + minutes + ':' + seconds + ":" + miliseconds;
  
    currentTimeClock.innerHTML = time;
    currentTimeContainer.appendChild(currentTimeClock);
    setTimeout(updateClock, 100);
  }
  
updateClock();