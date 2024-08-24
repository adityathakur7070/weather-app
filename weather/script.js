
function searchWeather() {
    const apiKey = '810364b1033a8861a736457568c31c69';
    const city = document.getElementById('search').value; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        
        const weatherTemp = document.querySelector('.weather-temp');
        const weatherDescription = document.querySelector('.weather-description');
        const weatherDetails = document.querySelector('.weather-details');

        weatherTemp.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        weatherDetails.innerHTML = `
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind: ${data.wind.speed} km/h</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.querySelector('.weather-info');
        weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
    });
}
