import React from 'react';
import './App.css';
import WeatherComponent from './components/WeatherComponent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="divider" />
      <main className="App-body">
        <WeatherComponent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
