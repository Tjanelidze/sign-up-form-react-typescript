import { useForm } from 'react-hook-form';

import GlobalStyle from './components/styles/GlobalStyles.styled';
import WelcomeSignComponent from './components/WelcomeSignComponent';
import { Container } from './components/styles/Container.styled';
import FreeTrialBox from './components/FreeTrialBox';
import FormComponent from './components/FormComponent';

function App() {
  const { register } = useForm();

  return (
    <>
      <Container>
        <GlobalStyle />
        <WelcomeSignComponent />
        <div>
          <FreeTrialBox />
          <FormComponent register={register} />
        </div>
      </Container>
    </>
  );
}

export default App;
