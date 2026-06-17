import React, { useState } from 'react';
import axios from 'axios';

function Weather()
{
    const [city, setCity] = useState('');

    const apiKey = '15dd411d6460f71dc66a13f62cbb1d78';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const [weatherData, setWeatherData] = useState("");

    const [temp,setTemp] = useState("");

    const [description,setDescription] = useState("");

    function handleCity(evt)
    {
        setCity(evt.target.value);
    }

    function getWeather()
    {        
        axios.get(apiUrl)
            .then(function(success) {
                console.log(success.data)
                setWeatherData(success.data.weather[0].main);
                setDescription(success.data.weather[0].description);
                setTemp(success.data.main.temp);

            }).catch((error) => {
                console.error(error);
            })
    }

   
    return (
        <div className="bg-black p-20">
            <div className = "bg-green-500 p-10 rounded-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you the current weather information for any city!</p>
                <input type="text" placeholder="Enter city name" className="border border-gray-300 rounded-md p-2 mt-4 w-full" value={city} onChange={handleCity} />
                <button className="bg-blue-500 text-white rounded-md p-2 mt-4 w-full" onClick={getWeather}>Get Weather</button>
            <div className='mt-2'>
                <h1><b>Current Weather: {weatherData}</b></h1>
                <p>Temperature: {temp}°C</p>
                <p>Description: {description}</p>
            </div>
            </div>
            
        </div>
    );
}

export default Weather;