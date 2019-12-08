import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header className="App-header">
      <p>Hello world</p>
        <Header />
      </Header>
      <p className="temp_note"> Website under construction
      <br /> Contact us at
      </p>
    </div>
  );
}

export default App;
