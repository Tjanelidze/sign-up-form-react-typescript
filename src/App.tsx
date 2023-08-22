import { useState } from 'react';
import GlobalStyle from './components/styles/GlobalStyles.styled';
import { styled } from 'styled-components';
import WelcomeSignComponent from './components/WelcomeSignComponent';
import { Container } from './components/styles/Container.styled';
import FreeTrialBox from './components/FreeTrialBox';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <GlobalStyle />
        <WelcomeSignComponent />
        <div>
          <FreeTrialBox />
          <div></div>
          <h1 className="primaryHeading">Hello</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id vero
            dolorem sunt delectus veniam aut tempore aperiam quam soluta error
            culpa suscipit eveniet velit voluptate ipsum saepe, nostrum quas
            explicabo.
          </p>
          <div>
            <h1>hello</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              tempore vel veritatis rem maxime ex magnam, nemo laboriosam,
              dolorum ipsam commodi sit similique enim repudiandae molestias ut
              minus, corrupti aliquam?
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
