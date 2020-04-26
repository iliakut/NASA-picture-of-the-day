import React from 'react';
import './app.css';
import NasaApi from '../../services/NasaAPIService'
import Header from "../header/header";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";

function App() {

  return (
    <div className="app-text">
      <Header/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
