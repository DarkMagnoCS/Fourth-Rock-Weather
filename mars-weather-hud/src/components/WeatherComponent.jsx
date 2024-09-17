import React, { useEffect, useState } from 'react';

const MarsWeather = () => {
  const [solData, setSolData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch data from NASA API
    const fetchData = async () => {
      const url = "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";
      
      try {
        const response = await fetch(url);
        const data = await response.json();

        const solKeys = data.sol_keys || [];

        if (solKeys.length > 0) {
          // Get the first Sol's data
          const sol = solKeys[0];
          const atmosphericTemp = data[sol]?.AT?.av || 'No data available';
          const windSpeed = data[sol]?.HWS?.av || 'No data available';
          const pressure = data[sol]?.PRE?.av || 'No data available';

          // Set the fetched data
          setSolData({
            sol,
            atmosphericTemp,
            windSpeed,
            pressure,
          });
        } else {
          // Handle no Sol data
          setErrorMessage('No Sol data available.');
        }
      } catch (error) {
        setErrorMessage('Error fetching data.');
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once after component mounts

  return (
    <div>
      <h1>Mars Weather</h1>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : solData ? (
        <div>
          <h2>Sol {solData.sol}</h2>
          <p>Average Temperature: {solData.atmosphericTemp} °C</p>
          <p>Average Wind Speed: {solData.windSpeed} m/s</p>
          <p>Average Atmospheric Pressure: {solData.pressure} Pa</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MarsWeather;
