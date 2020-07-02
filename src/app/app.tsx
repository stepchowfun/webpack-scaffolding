import React from 'react';
import smiley from './smiley.svg';
import './app.scss';
import sum from '../sum/sum';

function App() {
  return (
    <div className="app">
      <p>
        <img src={smiley} alt="Smiley face" />
      </p>
      <p>1 + 2 = {sum(1, 2)}</p>
    </div>
  );
}

export default App;
