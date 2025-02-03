let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city"); 

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}
//Function to fetch weather details from api and display them
let getWeather = () => {
    let cityValue = cityRef.value;
    //If input field is empty
    if (cityValue.length == 0) {
      result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    }
    //If input field is NOT empty
    else {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&
      units=metric`;
      //Clear the input field
      let temp, minTemp, maxTemp;
      cityRef.value = "";
      fetch(url)
        .then((resp) => resp.json())
        //If city name is valid
        .then((data) => {
          console.log(data);
          console.log(data.weather[0].icon);
          console.log(data.weather[0].main);
          console.log(data.weather[0].description);
          console.log(data.name);
          console.log(data.temp);
          console.log(data.main.temp_min);
          console.log(data.main.temp_max);
          temp=kelvinToCelsius(data.main.temp).toPrecision(4);
          minTemp=kelvinToCelsius(data.main.temp_min).toPrecision(4);
          maxTemp=kelvinToCelsius(data.main.temp_max).toPrecision(4);
          result.innerHTML = `
          <h2>${data.name}</h2>
          <h4 class="weather">${data.weather[0].main}</h4>
          <h4 class="desc">${data.weather[0].description}</h4>
          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
          <h1>${temp} &#176;</h1>
          <div class="temp-container">
              <div>
                  <h4 class="title">min</h4>
                  <h4 class="temp">${minTemp}&#176;</h4>
              </div>
              <div>
                  <h4 class="title">max</h4>
                  <h4 class="temp">${maxTemp}&#176;</h4>
              </div>
          </div>
          `;
        })
        //If city name is NOT valid
        .catch(() => {
          result.innerHTML = `<h3 class="msg">City not found</h3>`;
        });
    }
  };
  searchBtn.addEventListener("click", getWeather);
  window.addEventListener("load", getWeather);