const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById('ampm');
const dayNames = [
  "DOM",
  "LUN",
  "MAR",
  "MIÉR",
  "JUE",
  "VIE",
  "SÁB",
];

function getDate() {
  const date = new Date();

  day.textContent = dayNames[date.getDay()];

  if (date.getHours() >= 10) {
    hour.textContent = date.getHours() - 12;
    ampm.textContent = 'PM'
  } else {
    hour.textContent = "0" + date.getHours();
  }

  if (date.getMinutes() >= 10) {
    minutes.textContent = date.getMinutes();
  } else {
    minutes.textContent = "0" + date.getMinutes();
  }

  if (date.getSeconds() >= 10) {
    seconds.textContent = date.getSeconds();
  } else {
    seconds.textContent = "0" + date.getSeconds();
  }

  setTimeout(() => {
    getDate();
  }, 1000);
}

getDate();
