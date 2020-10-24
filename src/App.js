import React from 'react';
import './App.css';
import GenerateCharacters from './components/GenerateCharacters/GenerateCharacters'
import Header from './components/Header/Header'



function App() {
  return (
    <div>
      <Header />
      <GenerateCharacters />
    </div>
  );
}

export default App;
