import './style';
import React from 'react';
import ReactDOM from 'react-dom';
import sum from './sum';
import smiley from './smiley.svg';

function Main() {
  return (
    <div>
      <p>
        <img src={smiley} alt="Smiley face" />
      </p>
      <p>1 + 2 = {sum(1, 2)}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('react-root'),
);
