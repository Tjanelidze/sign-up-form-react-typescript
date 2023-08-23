import { useState } from 'react';

import GlobalStyle from './components/styles/GlobalStyles.styled';
import WelcomeSignComponent from './components/WelcomeSignComponent';
import { Container } from './components/styles/Container.styled';
import FreeTrialBox from './components/FreeTrialBox';
import FormComponent from './components/FormComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <GlobalStyle />
        <WelcomeSignComponent />
        <div>
          <FreeTrialBox />
          <FormComponent />
        </div>
      </Container>
    </>
  );
}

export default App;
