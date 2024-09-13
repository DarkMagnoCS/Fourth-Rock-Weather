import React, { useEffect, useState } from 'react';
import { getMarsWeather } from '../api/marsWeatherApi';

const HUD = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMarsWeather();
      setWeather(data);
    };
    fetchData();
  }, []);

  return (
    <div className="hud">
      {weather ? (
        <>
          <h1>Mars Weather</h1>
          <p>Temperature: {weather.Temperature} °C</p>
          <p>Wind Speed: {weather.WindSpeed} m/s</p>
          <p>Pressure: {weather.Pressure} Pa</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HUD;
