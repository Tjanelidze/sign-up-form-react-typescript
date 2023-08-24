import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormStyled } from './styles/Form.Styled';

interface Props {
  register: UseFormRegister<FieldValues>;
}

export default function FormComponent({ register }: Props) {
  return (
    <FormStyled>
      <form action="">
        <input {...register('firstName')} type="text" placeholder="FirstName" />
        <input {...register('lastName')} type="text" placeholder="Last Name" />
        <input
          {...register('email')}
          type="email"
          placeholder="Email Address"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
        />
        <button>Claim Your Free Trial</button>
      </form>
      <p>
        By clicking the button, you are agreeing to our
        <a href="#"> Terms and Services </a>
      </p>
    </FormStyled>
  );
}
