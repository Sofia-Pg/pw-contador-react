import './App.css';
import React, { Component } from 'react';



import Contador from './components/layout/Contador'
import Card from './components/layout/Card';

export default () => (

  <div className="App">
    <h1>Contador</h1>

    <div className="Cards">
      <Card titulo="Contador componentizado" color="#0d3024">
        <Contador numeroinicial={10}/>
      </Card>
    </div>
  </div>
);

