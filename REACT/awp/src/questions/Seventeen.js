import React from "react";
import { useState } from "react";
function Seventeen(){
    const [city,setCity]=useState('');
    const [temp,setTemp]=useState('');
    const getWeather=function(e){
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
        .then(response=>response.json())
        .then(data=>{
            setTemp(data.main.temp);
        })
        .catch(error=>{
            console.error("Error fetching weather data:",error);
        });
    }
    return(
        <div>
            <h1>Weather Report</h1>
            <form onSubmit={getWeather}>
                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter City Name"/>
                <button type="submit">Get Weather</button>
            </form>
                    <h2>Current Temperature in {city} is: {temp}°C</h2>
        </div>
    );
}
export default Seventeen;