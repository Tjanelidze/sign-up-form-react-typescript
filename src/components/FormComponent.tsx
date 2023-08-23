import { FormStyled } from './styles/Form.Styled';

export default function FormComponent() {
  return (
    <FormStyled>
      <form action="">
        <input type="text" placeholder="FirstName" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button>Claim Your Free Trial</button>
      </form>
      <p>
        By clicking the button, you are agreeing to our
        <span> Terms and Services </span>
      </p>
    </FormStyled>
  );
}
