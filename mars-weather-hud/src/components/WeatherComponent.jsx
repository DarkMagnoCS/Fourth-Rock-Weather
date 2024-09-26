import React, { useEffect, useState } from 'react';

const MarsWeather = () => {
  const [solData, setSolData] = useState(null);
  const [solKeys, setSolKeys] = useState([]);
  const [selectedSol, setSelectedSol] = useState(null);
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
          // Set the available Sol keys and default selected Sol to the latest Sol
          setSolKeys(solKeys);
          setSelectedSol(solKeys[0]);

          // Set the default Sol data (the latest Sol)
          const sol = solKeys[0];
          const atmosphericTemp = data[sol]?.AT?.av || 'No data available';
          const windSpeed = data[sol]?.HWS?.av || 'No data available';
          const pressure = data[sol]?.PRE?.av || 'No data available';

          setSolData({
            sol,
            atmosphericTemp,
            windSpeed,
            pressure,
          });
        } else {
          setErrorMessage('No Sol data available.');
        }
      } catch (error) {
        setErrorMessage('Error fetching data.');
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once after component mounts

  // Handle sol selection change
  const handleSolChange = (event) => {
    const sol = event.target.value;

    if (solKeys.includes(sol)) {
      setSelectedSol(sol);

      // Fetch the data for the selected Sol
      const url = `https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const atmosphericTemp = data[sol]?.AT?.av || 'No data available';
          const windSpeed = data[sol]?.HWS?.av || 'No data available';
          const pressure = data[sol]?.PRE?.av || 'No data available';

          setSolData({
            sol,
            atmosphericTemp,
            windSpeed,
            pressure,
          });
        })
        .catch((error) => {
          setErrorMessage('Error fetching data for the selected Sol.');
        });
    }
  };

  return (
    <div>
      <h1>Mars Weather</h1>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : solData ? (
        <div>
          <h2>Sol {solData.sol}</h2>
          <p>Temperature: {solData.atmosphericTemp} °C</p>
          <p>Wind Speed: {solData.windSpeed} m/s</p>
          <p>Atmospheric Pressure: {solData.pressure} Pa</p>

          <label htmlFor="sol-select">Select a Sol: </label>
          <select id="sol-select" value={selectedSol} onChange={handleSolChange}>
            {solKeys.map((sol) => (
              <option key={sol} value={sol}>
                Sol {sol}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MarsWeather;
