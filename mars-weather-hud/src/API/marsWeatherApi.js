const API_KEY = 'DEMO_KEY';
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

async function getMarsWeatherData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Extract the latest Sol (Martian Day)
    const latestSol = data.sol_keys[0];
    const solData = data[latestSol];

    // Extract temperature, wind speed, and pressure
    const temperature = solData.AT.av;
    const windSpeed = solData.HWS.av;
    const pressure = solData.PRE.av;

    return {
      sol: latestSol,
      temperature,
      windSpeed,
      pressure
    };
  } catch (error) {
    console.error("Error fetching Mars weather data:", error);
  }
}
