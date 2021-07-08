import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import './App.css';

function App() {

  // BEM Convention Block Element Modifier
  return (
    <div className="App">
      <Header></Header>
      <Home />
      <h1>Hello Clever programers, let's build the Amazon Store 🚀</h1>
    </div>
  );
}

export default App;
