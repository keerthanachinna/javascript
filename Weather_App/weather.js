// Function to fetch weather data from the API
function getWeather() {
    const apiKey = '7b2bdcc5f31dc565f34f2bc86f664f7e'; // Replace with your own API key
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim();
  
    // Check if the city name is provided
    if (cityName !== '') {
      // API URL
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
      // Make a GET request to the API
      fetch(url)
        .then(response => response.json())
        .then(data => {
          displayWeather(data);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    } else {
      console.log('Please enter a city name.');
    }
  }
  
  // Function to display the weather data
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';
  
    const cityName = document.createElement('h2');
    cityName.textContent = data.name;
    weatherInfo.appendChild(cityName);
  
    const weatherDescription = document.createElement('p');
    weatherDescription.textContent = data.weather[0].description;
    weatherInfo.appendChild(weatherDescription);
  
    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    weatherInfo.appendChild(temperature);
  
    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherInfo.appendChild(humidity);
  
    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    weatherInfo.appendChild(windSpeed);
  }
  