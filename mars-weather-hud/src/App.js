import React from 'react';
import './App.css';
import WeatherComponent from './components/WeatherComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mars Weather App</h1>
        <WeatherComponent />
      </header>
    </div>
  );
}

export default App;
