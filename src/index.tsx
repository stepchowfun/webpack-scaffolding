import './style';
import React from 'react';
import ReactDOM from 'react-dom';
import greet from './greeting';

greet();

function Main() {
  return <p>Hello, World!</p>;
}

ReactDOM.render(<Main />, document.getElementById('react-root'));
