import React, { useState, useEffect } from 'react';
import './Weather.css';

function WeatherPage() {
    const [locationInput, setLocationInput] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (locationInput.trim() !== '') {
            fetchWeatherData(locationInput);
        }
    }, [locationInput]);

    const fetchWeatherData = (location) => {
        const key = 'fd66da4fd797a172389145335e173f51';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
                setError(null);
            })
            .catch(error => {
                setError('Error fetching weather data. Please try again later.');
                setWeatherData(null);
                console.error('Error fetching weather data:', error);
            });
    };

    const getLocationWeather = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherDataByCoords(latitude, longitude);
                },
                error => {
                    setError('Geolocation error occurred. Please allow location access and try again.');
                    console.error('Geolocation error:', error);
                }
            );
        } else {
            setError('Geolocation is not supported by your browser.');
        }
    };

    const fetchWeatherDataByCoords = (latitude, longitude) => {
        const key = 'fd66da4fd797a172389145335e173f51';
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
                setError(null);
            })
            .catch(error => {
                setError('Error fetching weather data. Please try again later.');
                setWeatherData(null);
                console.error('Error fetching weather data:', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData(locationInput);
    };

    const handleChange = (e) => {
        setLocationInput(e.target.value);
    };

    return (
        <div className='h-screen flex justify-center items-center ' style={{ backgroundImage: 'url("https://th.bing.com/th/id/R.98f1db12da022615ab8478647b781dd4?rik=08tRwv5ZkA8VJw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fWeather-Photo.jpg&ehk=1vnDlHWl3lYDPLqie%2b05YqPEFXsUthhc1Y%2bNoVBQ6kk%3d&risl=&pid=ImgRaw&r=0")' }}>
            <div className="weather-page-container max-w-md bg-white bg-opacity-90 rounded-lg p-6 text-black shadow-lg">
                <h1 className='heading mb-4 text-3xl font-bold text-black'>Weather Forecast</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="text"
                        value={locationInput}
                        onChange={handleChange}
                        placeholder="Enter location..."
                        className="input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        style={{ color: 'black' }}
                    />
                    <button type="submit" className="btn btn-primary ml-2 mt-5 rounded-none">Search</button>
                </form>
                <button className='useloc btn btn-outline' onClick={getLocationWeather}>Use My Location</button>

                {error && <p className="error-message mt-4">{error}</p>}
                {weatherData && (
                    <div className="mt-4">
                        <div className="wcard bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg p-4">
                            <h2 className="Weather-card-title text-xl font-bold">{weatherData.name}, {weatherData.sys.country}</h2>
                            <p>Date: {getDate(new Date())}</p>
                            <p>Temperature: {weatherData.main.temp}°C</p>
                            <p>Weather: {weatherData.weather[0].main}</p>
                            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                            <p>Humidity: {weatherData.main.humidity}%</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function getDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateNum = date.getDate();
    const year = date.getFullYear();
    return `${day}, ${dateNum} ${month}, ${year}`;
}

export default WeatherPage;
