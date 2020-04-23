import React from 'react';
import './app.css';
import NasaApi from '../../services/NasaAPIService'
import Header from "../header/header";
import Carousel from "../carousel/carousel";

function App() {

  return (
    <div className="app-text">
      <Header/>
      <Carousel/>
    </div>
  );
}

export default App;
