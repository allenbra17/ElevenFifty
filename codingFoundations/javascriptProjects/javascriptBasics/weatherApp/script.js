/*Weather App Notes

The user will press a button to get their weather data
When pressed, the button will get the browser's geolocation data
Take the Lat and Long and fetch the weather data with it
Display the weather data in the document

*/

const baseURL = 'https://api.open-meteo.com/v1/forecast';

//Button the user will interact with
let buttonElement = document.getElementById('geolocation-weather');
//Area where results will be displayed
let resultsElement = document.getElementById('results');

function displayWeatherData(temperature, windSpeed) {
    //Clear previous results
    // resultsElement.innerHTML = '';
    let temperatureElement = document.createElement('p');
    let windSpeedElement = document.createElement('p');

    temperatureElement.innerText = temperature;
    windSpeedElement.innerText = windSpeed;

    resultsElement.appendChild(temperatureElement);
    resultsElement.appendChild(windSpeedElement);
    
}

function fetchWeather(latitude, longitude) {
    let url =`${ baseURL }?latitude=${ latitude }&longitude=${ longitude }&current_weather=true&temperature_unit=fahrenheit`;

    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
        let temperature = jsonData.current_weather.temperature;
        let windSpeed = jsonData.current_weather.windspeed;

        displayWeatherData(temperature, windSpeed);
    })
}

function retrieveGeolocationData() {
    navigator.geolocation.getCurrentPosition(result => {
        console.log(result);
        let latitude = result.coords.latitude;
        let longitude = result.coords.longitude;

        fetchWeather(latitude, longitude);
    });
    
}

buttonElement.addEventListener('click', () => {
    console.log("testing");
    retrieveGeolocationData();
})