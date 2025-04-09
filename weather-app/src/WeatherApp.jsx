import React, {useState, useEffect} from 'react';

function WeatherApp(){
    const [cityName, setCityName] = useState("Malaysia");


    return(
        <>
            <div className="search-area">
                <input type="text" placeholder="Type a City Name..."/>
                <button className="search">🔍</button>
            
            </div>
        
        </>
    )
}





export default WeatherApp