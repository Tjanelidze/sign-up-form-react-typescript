import { useState } from 'react';
import GlobalStyle from './GlobalStyles';
import { styled } from 'styled-components';
import WelcomeSignComponent from './components/WelcomeSignComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <WelcomeSignComponent />
    </>
  );
}

export default App;
