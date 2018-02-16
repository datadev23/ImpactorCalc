import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




import ImpactCalcForm  from './ImpactCalcForm/ImpactCalcForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the impact Effects calculator</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        Welcome to the Earth Impact Effects Program: an easy-to-use, interactive web site for estimating the regional environmental consequences of an impact on Earth. This program will estimate the ejecta distribution, ground shaking, atmospheric blast wave, and thermal effects of an impact as well as the size of the crater produced.

Please enter values in the boxes below to describe your impact event of choice and your distance away. Then click "Calculate Effects" to learn about the environmental consequences.
        

     
       <ImpactCalcForm />
      
     

     

     



      </div>
    );
  }
}

export default App;
