import React from 'react';
import uc from './uc.jpg';
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
      <br /> Mobile: 416-627-2426 Andy Geng
      <br /> Email: andy.geng@brandyconstruction.ca
      </p>
      <img
        src={uc}
        width="600"
        height="600"
        className="d-inline-block align-top"
      />
    </div>
  );
}

export default App;
