import axios from 'axios';

const API_KEY = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0';

export const getMarsWeather = async () => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching the Mars weather data:", error);
  }
};
