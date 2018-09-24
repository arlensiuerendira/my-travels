import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
        destination="Puerto Vallarta"
        country="Mexico"
        photo="http://visitpuertovallarta.com/images/pvsunset.jpg"
        distance="9,419"
          />
        <Travel
        destination="Wallis and Futuna"
        country="French Overseas Collectivity"
        photo="https://static.wixstatic.com/media/ea0381_4d718eb3615145b3808e3f439cd5e12d~mv2.jpg/v1/fill/w_612,h_337,al_c,lg_1,q_80/ea0381_4d718eb3615145b3808e3f439cd5e12d~mv2.jpg"
        distance="15,956"
          />
      </div>
    );
  }
}

export default App;
