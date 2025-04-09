import React, {useState, useEffect} from 'react';

function WeatherApp(){
    const [cityName, setCityName] = useState("Malaysia");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() =>{
        fetchWeatherData();
    }, [cityName]);

    async function fetchWeatherData(){
        const apiKey = "2074262ee1d5d79dd6e2e091469c8a4e";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
       


        try{
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        }catch(error){
            console.error("Error fetching weather data :(", error);
        }
    }

    return(
        <>
            <div className="search-area">
                <input type="text" 
                placeholder="Type a City Name..."
                value={cityName} onChange={(e) => setCityName(e.target.value)}/>
                <button className="search-button" onClick={fetchWeatherData}>🔍</button>
            
            </div>

            {weatherData && weatherData.main && (
                
                <div className="weather-info">
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>🌡️ Temp: {weatherData.main.temp}&deg;C</p>
                    <p>💧 Humidity: {weatherData.main.humidity}%</p>
                    <p>💨 Wind: {weatherData.wind.speed} m/s</p>
                </div>


            )}
        
        </>
    )
}





export default WeatherApp