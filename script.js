const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// run the app at the current time
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempDay = tempDate.getDate();
let tempMonth = tempDate.getMonth();

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 30, 00); 


// get elements
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

//let futureDate = new Date(2023, 01, 08, 21, 19, 00);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;
 
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = time / oneDay;
  days = Math.floor(days);
  let hours = (time % oneDay) / oneHour;
  hours = Math.floor(hours);
  let minutes = (time % oneHour) / oneMinute;
  minutes = Math.floor(minutes);
  let seconds = (time % oneMinute) / 1000;
  seconds = Math.floor(seconds);
  
// set values array
  const values = [days, hours, minutes, seconds];

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  });

  function format(item) {
    if(item < 10) {
      return item = `0${item}`
    }
    return item;
  }

  if(time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">
    Sorry, this giveaway has expired
  </h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
