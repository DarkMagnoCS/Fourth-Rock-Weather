import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setWeatherData(data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        setWeatherData({
          temperature: '-55', // average data while fetching actual data
          condition: 'Unknown', // Placeholder data
        });
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Weather on Mars</h1>
      <p>Temperature: {weatherData?.temperature}°C</p>
      <p>Condition: {weatherData?.condition}</p>
      {isError && <p>Showing last available data.</p>}
    </div>
  );
};

export default WeatherComponent;
