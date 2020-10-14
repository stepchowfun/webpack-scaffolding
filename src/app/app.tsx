import React from 'react';
import styled from 'styled-components';
import smiley from './smiley.svg';
import sum from '../sum/sum';

const AppContainer = styled.div`
  color: #333333;
  text-align: center;
`;

function App(): JSX.Element {
  return (
    <AppContainer>
      <p>
        <a href="https://github.com/stepchowfun/webpack-scaffolding">
          <img src={smiley} alt="Smiley face" />
        </a>
      </p>
      <p>1 + 2 = {sum(1, 2)}</p>
    </AppContainer>
  );
}

export default App;
