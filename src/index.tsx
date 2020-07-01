import './style';
import React from 'react';
import ReactDOM from 'react-dom';
import sum from './sum';

function Main() {
  return <p>Hello, {sum(1, 2)}!</p>;
}

ReactDOM.render(<Main />, document.getElementById('react-root'));
