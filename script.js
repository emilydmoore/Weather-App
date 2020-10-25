function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `Today | ${currentDay} ${hours}:${minutes}`;
}

let day = document.querySelector("#current-day");
let date = new Date();

day.innerHTML = formatDate(date);

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;
}
let citySearchForm = document.querySelector("#city-search-form");
citySearchForm.addEventListener("submit", displayCity);

function convertToCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");

  temperatureElement.innerHTML = 17;
}

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", convertToCelcius);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = 66;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
