import React from 'react';
import './App.css';
import WeatherComponent from './components/WeatherComponent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-body">
        <div className="weather-container">
          <WeatherComponent />
        </div>
        <div className="info-container">
          <h2>This Service Has Significant Missing Data</h2>
          <p>
            Please check out the seasonal weather report plot for an illustration of missing data and read this article about how dust and distance from the sun affect Insight's power situation.
          </p>
          <p>
            NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. Please note that there are sometimes problems with the sensors on Mars that result in missing data!
          </p>
          <p>
            This API provides per-Sol summary data for each of the last seven available Sols (Martian Days). As more data from a particular Sol are downlinked from the spacecraft, these values may change.
          </p>
          <p>
            Check out more information at <a href="https://mars.nasa.gov/insight/weather/">this link</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
