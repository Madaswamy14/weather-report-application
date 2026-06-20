import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [temp, setTemp] = useState('');
  const [description, setDescription] = useState('');
  const [humidity, setHumidity] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [icon, setIcon] = useState('');
  const [error, setError] = useState('');

  const apiKey = '15dd411d6460f71dc66a13f62cbb1d78';

  function handleCity(evt) {
    setCity(evt.target.value);
  }

  function getWeather(evt) {
    evt.preventDefault();
    
    if (city.trim() === '') {
      setError('Please enter a city name.');
      setWeatherData(null);
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(function(response) {
        console.log(response.data);
        setWeatherData(response.data);
        setTemp(response.data.main.temp);
        setDescription(response.data.weather[0].description);
        setHumidity(response.data.main.humidity);
        setWindSpeed(response.data.wind.speed);
        setIcon(response.data.weather[0].icon);
        setError(''); // Clear any previous errors
      })
      .catch(function(err) {
        console.error(err);
        setWeatherData(null);
        setError('City not found. Please enter a valid city name.');
      });
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-12 min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <header className="text-center mb-6">
          <h1 id="app-title" className="text-3xl font-bold text-blue-600">Weather Report</h1>
          <p className="text-gray-500 mt-2">Enter any city name to get the current weather report!</p>
        </header>

        <main>
          {/* Search form */}
          <form onSubmit={getWeather} className="mb-6">
            <div className="flex flex-col gap-3">
              <input
                id="search-input"
                type="text"
                placeholder="Enter city name..."
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                value={city}
                onChange={handleCity}
              />
              <button
                id="search-button"
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg p-3 w-full transition duration-200 cursor-pointer"
              >
                Get Weather
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div id="error-msg" className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-6 font-medium">
              {error}
            </div>
          )}

          {/* Weather Results */}
          {weatherData && !error && (
            <div id="weather-card" className="border-t border-gray-100 pt-6">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{weatherData.name}, {weatherData.sys.country}</h2>
                <p className="text-gray-400 capitalize text-sm">{description}</p>
              </div>

              <div className="flex items-center justify-center gap-4 mb-6">
                {icon && (
                  <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={description}
                    className="w-16 h-16 bg-blue-50 rounded-full"
                  />
                )}
                <span className="text-4xl font-extrabold text-gray-800">{Math.round(temp)}°C</span>
              </div>

              {/* Responsive details grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-gray-500 text-xs font-semibold uppercase">Humidity</span>
                  <span className="text-lg font-bold text-gray-700">{humidity}%</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <span className="block text-gray-500 text-xs font-semibold uppercase">Wind Speed</span>
                  <span className="text-lg font-bold text-gray-700">{windSpeed} m/s</span>
                </div>
              </div>
            </div>
          )}
        </main>

        <footer className="text-center mt-8 text-xs text-gray-400 border-t border-gray-100 pt-4">
          <p>© {new Date().getFullYear()} Weather Report Project</p>
        </footer>
      </div>
    </div>
  );
}

export default Weather;