import { useForm } from 'react-hook-form';

import GlobalStyle from './components/styles/GlobalStyles.styled';
import WelcomeSignComponent from './components/WelcomeSignComponent';
import { Container } from './components/styles/Container.styled';
import FreeTrialBox from './components/FreeTrialBox';
import FormComponent from './components/FormComponent';

function App() {
  const { register,handleSubmit, formState } = useForm();

  return (
    <>
      <Container>
        <GlobalStyle />
        <WelcomeSignComponent />
        <div>
          <FreeTrialBox />
          <FormComponent register={register} handleSubmit={handleSubmit} formState={formState} />
        </div>
      </Container>
    </>
  );
}

export default App;
